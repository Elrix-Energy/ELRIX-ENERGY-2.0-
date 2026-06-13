import { createOgImage } from "@/app/lib/ogImage";
import { getCityPageData } from "@/app/lib/cityData";

const data = getCityPageData("ongole");

export const alt = `Solar Company in Ongole | ELRIX ENERGY`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OngoleOgImage() {
  return createOgImage({
    variant: "city",
    city: data.city,
    tagline: data.tagline,
  });
}
