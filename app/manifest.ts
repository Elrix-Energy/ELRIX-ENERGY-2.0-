import type { MetadataRoute } from "next";
import { BRAND } from "./lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.legalName,
    short_name: BRAND.name,
    description:
      "MNRE-certified solar EPC in Nellore, Tirupati, Kadapa and Ongole. Residential, commercial and industrial installations with PM Surya Ghar subsidy support.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3A",
    theme_color: "#0B1F3A",
    lang: "en-IN",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
