import { createPageOgImage } from "@/app/lib/ogImage";

export const alt = "Solar Projects Portfolio | ELRIX ENERGY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ProjectsOgImage() {
  return createPageOgImage(
    "Our Solar Projects",
    "On-Grid Installations · Nellore · Tirupati",
  );
}
