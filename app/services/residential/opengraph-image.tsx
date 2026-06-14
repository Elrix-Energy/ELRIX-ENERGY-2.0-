import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Residential Solar Installation | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ResidentialSolarOgImage() {
  return createPageOgImage(
    "Residential Solar",
    "PM Surya Ghar up to Rs. 78,000 · Net Metering",
  );
}
