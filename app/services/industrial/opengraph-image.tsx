import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Industrial Solar EPC | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function IndustrialSolarOgImage() {
  return createPageOgImage(
    "Industrial Solar EPC",
    "MW-Scale Plants · HT/LT Integration",
  );
}
