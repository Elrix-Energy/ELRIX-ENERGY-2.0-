/**
 * Optimize certification badge sources in public/certifications/_import → .webp
 * Sources: mnre-source.png, apspdcl-source.png, iso-source.png, msme-source.png
 * Run: node scripts/import-certifications.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMPORT_DIR = path.join(ROOT, "public", "certifications", "_import");
const OUT_DIR = path.join(ROOT, "public", "certifications");

const SLOT_BG = { r: 238, g: 242, b: 246 };

const CERTS = [
  { id: "mnre", source: "mnre-source.png", flattenBlack: false },
  { id: "apspdcl", source: "apspdcl-source.png", flattenBlack: true },
  { id: "iso", source: "iso-source.png", flattenBlack: false },
  { id: "msme", source: "msme-source.png", flattenBlack: false },
];

async function processCert({ id, source, flattenBlack }) {
  const input = path.join(IMPORT_DIR, source);
  const outWebp = path.join(OUT_DIR, `${id}.webp`);

  let pipeline = sharp(input).rotate().resize({
    height: 128,
    withoutEnlargement: true,
  });

  pipeline = pipeline.flatten({
    background: flattenBlack ? SLOT_BG : { r: 255, g: 255, b: 255 },
  });

  await pipeline.webp({ quality: 90, effort: 6 }).toFile(outWebp);

  const stat = await fs.stat(outWebp);
  console.log(`  ${id}.webp — ${Math.round(stat.size / 1024)} KB`);
}

async function removeLegacy() {
  for (const ext of ["svg", "png"]) {
    for (const id of ["mnre", "apspdcl", "iso", "msme"]) {
      try {
        await fs.unlink(path.join(OUT_DIR, `${id}.${ext}`));
      } catch {
        /* ok */
      }
    }
  }
}

async function main() {
  console.log("Processing certification badges…\n");
  await removeLegacy();
  for (const cert of CERTS) {
    await processCert(cert);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
