import type { Metadata } from "next";
import { buildPageMetadata } from "./seoConfig";
import { cityOgImagePath } from "./ogImage";
import type { CityPageData } from "./cityData";

export function buildCityPageMetadata(data: CityPageData): Metadata {
  const ogImageUrl = cityOgImagePath(data.slug);

  return buildPageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: data.path,
    ogTitle: data.meta.ogTitle,
    ogDescription: data.meta.ogDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `Solar Company in ${data.city} | ELRIX ENERGY`,
      },
    ],
  });
}
