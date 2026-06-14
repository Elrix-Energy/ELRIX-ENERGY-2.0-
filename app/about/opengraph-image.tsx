import { createPageOgImage } from "@/app/lib/ogImage";
import { BRAND } from "@/app/lib/siteConfig";

export const alt = `About ${BRAND.name} | Solar EPC in Nellore`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function AboutOgImage() {
  return createPageOgImage(
    `About ${BRAND.name}`,
    "MNRE Certified · 16+ Years Local Trust · Nellore HQ",
  );
}
