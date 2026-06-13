import type { Metadata } from "next";
import Contact from "../components/views/Contact";
import { BRAND, CONTACT, SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Get a Free Solar Quote",
  description: `Contact ${BRAND.name} for a free solar site survey and quote. We respond within 24 hours in Nellore, Tirupati, Kadapa and Ongole. Call ${CONTACT.phoneDisplay}.`,
  path: "/contact",
  ogTitle: `Contact ${BRAND.name} | Free Solar Quote in Andhra Pradesh`,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: buildCanonical("/contact") },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Contact />
    </>
  );
}
