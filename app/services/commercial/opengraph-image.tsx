import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Commercial Solar Installation | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function CommercialSolarOgImage() {
  return createPageOgImage(
    "Commercial Solar",
    "40% Accelerated Depreciation · ROI Focus",
  );
}
