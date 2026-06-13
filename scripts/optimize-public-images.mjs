/**
 * Compress and convert raster assets in /public.
 * Run: node scripts/optimize-public-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.join(process.cwd(), "public");
const MAX_CONTENT_WIDTH = 1600;
const MAX_BLOG_WIDTH = 1200;
const OG_SIZE = { width: 1200, height: 630 };

async function fileSizeKb(filePath) {
  const stat = await fs.stat(filePath);
  return Math.round(stat.size / 1024);
}

async function removeIfExists(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}

async function convertPhotoPng(basename) {
  const input = path.join(PUBLIC, `${basename}.png`);
  const output = path.join(PUBLIC, `${basename}.webp`);
  const before = await fileSizeKb(input);

  await sharp(input)
    .resize({ width: MAX_CONTENT_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const after = await fileSizeKb(output);
  await removeIfExists(input);
  console.log(`  ${basename}.png → ${basename}.webp  (${before} KB → ${after} KB)`);
  return `/${basename}.webp`;
}

async function convertLogo() {
  const input = path.join(PUBLIC, "logo.png");
  const webpOut = path.join(PUBLIC, "logo.webp");
  const before = await fileSizeKb(input);

  await sharp(input)
    .resize({ width: 512, withoutEnlargement: true })
    .webp({ quality: 88, effort: 6, alphaQuality: 90 })
    .toFile(webpOut);

  const after = await fileSizeKb(webpOut);
  await removeIfExists(input);
  console.log(`  logo.png → logo.webp  (${before} KB → ${after} KB)`);
  return "/logo.webp";
}

async function convertFounderPhoto() {
  const input = path.join(PUBLIC, "md-photo.png");
  const output = path.join(PUBLIC, "md-photo.webp");
  const before = await fileSizeKb(input);

  await sharp(input)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const after = await fileSizeKb(output);
  await removeIfExists(input);
  console.log(`  md-photo.png → md-photo.webp  (${before} KB → ${after} KB)`);
  return "/md-photo.webp";
}

async function optimizeHeroAvif() {
  const file = path.join(PUBLIC, "hero-bg.avif");
  const tmp = path.join(PUBLIC, "hero-bg.next.avif");
  const before = await fileSizeKb(file);

  await sharp(file)
    .resize({ width: 1920, withoutEnlargement: true })
    .avif({ quality: 52, effort: 6 })
    .toFile(tmp);

  await fs.rename(tmp, file);
  const after = await fileSizeKb(file);
  console.log(`  hero-bg.avif recompressed  (${before} KB → ${after} KB)`);
}

async function optimizeOgImage() {
  const pngIn = path.join(PUBLIC, "og-image.png");
  const jpgOut = path.join(PUBLIC, "og-image.jpg");
  const before = await fileSizeKb(pngIn);

  await sharp(pngIn)
    .resize({ ...OG_SIZE, fit: "cover", position: "centre" })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(jpgOut);

  const after = await fileSizeKb(jpgOut);
  await removeIfExists(pngIn);
  console.log(`  og-image.png → og-image.jpg  (${before} KB → ${after} KB)`);
  return "/og-image.jpg";
}

async function convertBlogJpg(filename) {
  const input = path.join(PUBLIC, "blog", filename);
  const base = filename.replace(/\.jpe?g$/i, "");
  const output = path.join(PUBLIC, "blog", `${base}.webp`);
  const before = await fileSizeKb(input);

  await sharp(input)
    .resize({ width: MAX_BLOG_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const after = await fileSizeKb(output);
  await removeIfExists(input);
  console.log(`  blog/${filename} → blog/${base}.webp  (${before} KB → ${after} KB)`);
  return `/blog/${base}.webp`;
}

async function main() {
  console.log("Optimizing /public images…\n");

  const logoPath = await convertLogo();
  const founderPath = await convertFounderPhoto();
  const ogPath = await optimizeOgImage();
  await optimizeHeroAvif();

  const serviceBasenames = [
    "residential_solar",
    "commercial_solar",
    "industrial_solar",
    "solar_maintenance",
  ];
  const servicePaths = {};
  for (const base of serviceBasenames) {
    servicePaths[base] = await convertPhotoPng(base);
  }

  const blogDir = path.join(PUBLIC, "blog");
  const blogFiles = (await fs.readdir(blogDir)).filter((f) => /\.jpe?g$/i.test(f));
  const blogPaths = {};
  for (const file of blogFiles) {
    const base = file.replace(/\.jpe?g$/i, "");
    blogPaths[base] = await convertBlogJpg(file);
  }

  const manifest = {
    logoPath,
    founderPhoto: founderPath,
    ogImagePath: ogPath,
    heroBackground: "/hero-bg.avif",
    services: {
      residential: servicePaths.residential_solar,
      commercial: servicePaths.commercial_solar,
      industrial: servicePaths.industrial_solar,
      maintenance: servicePaths.solar_maintenance,
    },
    blog: blogPaths,
  };

  await fs.writeFile(
    path.join(process.cwd(), "scripts", ".optimize-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log("\nDone. Update app paths from scripts/.optimize-manifest.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
