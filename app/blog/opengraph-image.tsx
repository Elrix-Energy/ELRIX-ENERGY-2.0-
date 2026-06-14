import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Solar Guides & PM Surya Ghar Resources | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogOgImage() {
  return createPageOgImage(
    "Solar Guides & Resources",
    "PM Surya Ghar · Costs · Net Metering · Andhra Pradesh",
  );
}
