import type { Metadata } from "next";
import LegalDocument from "../components/views/LegalDocument";
import { BRAND, SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";
import { LEGAL_LAST_UPDATED, privacyPolicySections } from "../data/legalContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses, and protects your personal information when you use our website, contact form, and analytics cookies.`,
  path: "/privacy",
  robots: { index: true, follow: true },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: buildCanonical("/privacy") },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalDocument
        title="Privacy Policy"
        subtitle={`How ${BRAND.name} handles your personal data and cookies.`}
        lastUpdated={LEGAL_LAST_UPDATED}
        sections={privacyPolicySections}
      />
    </>
  );
}
