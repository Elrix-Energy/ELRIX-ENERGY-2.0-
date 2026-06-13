import type { Metadata } from "next";
import Subsidy from "../components/views/Subsidy";
import { SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "PM Surya Ghar Subsidy in Andhra Pradesh",
  description:
    "Claim up to ₹78,000 PM Surya Ghar subsidy for rooftop solar in Nellore, Tirupati, Kadapa and Ongole. ELRIX ENERGY handles APSPDCL paperwork and EMI planning.",
  path: "/subsidy",
  ogTitle: "PM Surya Ghar Subsidy up to ₹78,000 | ELRIX ENERGY",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "PM Surya Ghar Subsidy", item: buildCanonical("/subsidy") },
  ],
};

export default function SubsidyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Subsidy />
    </>
  );
}
