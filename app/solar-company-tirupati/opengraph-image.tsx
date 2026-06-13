import { createOgImage } from "@/app/lib/ogImage";
import { getCityPageData } from "@/app/lib/cityData";

const data = getCityPageData("tirupati");

export const alt = `Solar Company in Tirupati | ELRIX ENERGY`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TirupatiOgImage() {
  return createOgImage({
    variant: "city",
    city: data.city,
    tagline: data.tagline,
  });
}
