import type { Metadata } from "next";
import LegalDocument from "../components/views/LegalDocument";
import { BRAND, SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";
import { LEGAL_LAST_UPDATED, termsSections } from "../data/legalContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description: `Terms governing use of the ${BRAND.name} website, calculators, and online inquiries. Solar projects are subject to separate written agreements.`,
  path: "/terms",
  robots: { index: true, follow: true },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms and Conditions",
      item: buildCanonical("/terms"),
    },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalDocument
        title="Terms and Conditions"
        subtitle={`Rules for using the ${BRAND.name} website and online tools.`}
        lastUpdated={LEGAL_LAST_UPDATED}
        sections={termsSections}
      />
    </>
  );
}
