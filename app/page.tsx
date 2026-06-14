import type { Metadata } from "next";
import Home from "./components/views/Home";
import { homeFaqs } from "./data/homeFaqs";
import { BRAND } from "./lib/siteConfig";
import { buildBreadcrumbSchema, buildFaqPageSchema, buildPageMetadata } from "./lib/seoConfig";
import { HOME_OG_IMAGE_PATH } from "./lib/ogImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Company in Nellore, Tirupati, Kadapa & Ongole",
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar with PM Surya Ghar subsidy up to ₹78,000. Free site survey.",
  path: "/",
  ogTitle: `${BRAND.name} | Premium Solar Solutions in Andhra Pradesh`,
  ogDescription:
    "South India's most trusted solar EPC. Cyclone-proof solar installations in Nellore, Tirupati, Kadapa & Ongole.",
  images: [
    {
      url: HOME_OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: `${BRAND.name} – Premium Solar EPC in Andhra Pradesh`,
    },
  ],
});

const structuredData = [
  buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
  buildFaqPageSchema(homeFaqs),
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Home />
    </>
  );
}
