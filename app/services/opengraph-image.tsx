import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Solar Services in Andhra Pradesh | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ServicesOgImage() {
  return createPageOgImage(
    "Solar Installation Services",
    "Residential · Commercial · Industrial · Maintenance",
  );
}
