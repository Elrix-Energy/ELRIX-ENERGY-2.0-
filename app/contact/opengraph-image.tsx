import { createPageOgImage } from "@/app/lib/ogImage";
import { BRAND } from "@/app/lib/siteConfig";

export const alt = `Contact ${BRAND.name} | Free Solar Quote`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ContactOgImage() {
  return createPageOgImage(
    "Get a Free Solar Quote",
    "Site Survey · Nellore · Tirupati · Kadapa · Ongole",
  );
}
