import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "PM Surya Ghar Subsidy up to Rs. 78,000 | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SubsidyOgImage() {
  return createPageOgImage(
    "PM Surya Ghar Subsidy",
    "Up to Rs. 78,000 · EMI Financing · APSPDCL Paperwork",
  );
}
