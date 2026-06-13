import { createOgImage } from "@/app/lib/ogImage";
import { getCityPageData } from "@/app/lib/cityData";

const data = getCityPageData("kadapa");

export const alt = `Solar Company in Kadapa | ELRIX ENERGY`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function KadapaOgImage() {
  return createOgImage({
    variant: "city",
    city: data.city,
    tagline: data.tagline,
  });
}
