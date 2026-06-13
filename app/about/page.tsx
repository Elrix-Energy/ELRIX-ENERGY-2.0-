import type { Metadata } from "next";
import About from "../components/views/About";
import { BRAND, SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${BRAND.name}`,
  description:
    "MNRE-certified, APSPDCL-empanelled solar EPC in Nellore serving Tirupati, Kadapa and Ongole. 16+ years of local trust, transparent pricing and end-to-end installation.",
  path: "/about",
  ogTitle: `About ${BRAND.name} | Solar EPC in Nellore, AP`,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: buildCanonical("/about") },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <About />
    </>
  );
}
