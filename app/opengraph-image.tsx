import { createOgImage } from "./lib/ogImage";

export const alt = "ELRIX ENERGY – Premium Solar EPC in Andhra Pradesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function HomeOgImage() {
  return createOgImage({
    variant: "home",
  });
}
