/**
 * Download solar-relevant Unsplash hero images for all blog articles.
 * Uses only verified photovoltaic / rooftop solar photos.
 * Run: npm run download:blog-heroes
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_BLOG = path.join(process.cwd(), "public", "blog");
const WIDTH = 1200;
const HEIGHT = 675;

/** Verified solar-only Unsplash photo IDs */
const SOLAR_PHOTOS = {
  groundFarm: "1509391366360-2e959784a276",
  rooftopAerial: "1745187946672-2c1d8cf26a2b",
  tiledRoof: "1780445392792-556e5609c5ab",
  metalRoofCommercial: "1780445392628-d6f5b9e5609b",
  panelsCloseUp: "1658298775754-5839ffd434cc",
};

/** slug → { photoKey, crop } */
const IMAGES = [
  { slug: "nellore-solar-capital", photoKey: "groundFarm", crop: "entropy" },
  { slug: "pm-surya-ghar-tirupati-kadapa", photoKey: "tiledRoof", crop: "top" },
  { slug: "commercial-solar-epc-nellore", photoKey: "metalRoofCommercial", crop: "centre" },
  { slug: "solar-panel-cost-andhra-pradesh-2026", photoKey: "groundFarm", crop: "right" },
  { slug: "on-grid-vs-hybrid-solar-andhra-pradesh", photoKey: "panelsCloseUp", crop: "centre" },
  { slug: "pm-surya-ghar-andhra-pradesh-complete-guide", photoKey: "rooftopAerial", crop: "centre" },
  { slug: "reduce-electricity-bill-rooftop-solar", photoKey: "groundFarm", crop: "left" },
  { slug: "3kw-5kw-10kw-solar-system-comparison", photoKey: "panelsCloseUp", crop: "top" },
  { slug: "solar-panel-cost-nellore-after-subsidy", photoKey: "tiledRoof", crop: "centre" },
  { slug: "rooftop-solar-tirupati-homeowners-guide", photoKey: "tiledRoof", crop: "bottom" },
  { slug: "net-metering-andhra-pradesh-guide", photoKey: "rooftopAerial", crop: "top" },
  { slug: "solar-investment-payback-period-roi", photoKey: "groundFarm", crop: "bottom" },
  { slug: "rooftop-solar-benefits-ongole", photoKey: "panelsCloseUp", crop: "left" },
  { slug: "commercial-solar-kadapa-businesses", photoKey: "metalRoofCommercial", crop: "top" },
  { slug: "solar-installation-process-elrix-energy", photoKey: "rooftopAerial", crop: "right" },
];

async function downloadAndConvert({ slug, photoKey, crop }) {
  const photoId = SOLAR_PHOTOS[photoKey];
  const cropParam = crop === "centre" ? "center" : crop;
  const url = `https://images.unsplash.com/photo-${photoId}?w=${WIDTH}&h=${HEIGHT}&fit=crop&crop=${cropParam}&q=85&auto=format`;
  const output = path.join(PUBLIC_BLOG, `${slug}.webp`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${slug}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .resize({ width: WIDTH, height: HEIGHT, fit: "cover", position: cropParam })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const stat = await fs.stat(output);
  console.log(`  ${slug}.webp  (${Math.round(stat.size / 1024)} KB)  [${photoKey}/${crop}]`);
}

async function main() {
  await fs.mkdir(PUBLIC_BLOG, { recursive: true });
  console.log("Downloading solar-relevant blog hero images…\n");

  for (const item of IMAGES) {
    await downloadAndConvert(item);
  }

  console.log("\nDone — 15 blog heroes updated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
