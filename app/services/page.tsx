import type { Metadata } from "next";
import Services from "../components/views/Services";
import { SITE_URL } from "../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Installation Services in Andhra Pradesh",
  description:
    "Residential, commercial and industrial solar EPC in Nellore, Tirupati, Kadapa and Ongole. PM Surya Ghar subsidy support, net metering and 25-year panel warranty.",
  path: "/services",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: buildCanonical("/services") },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Services />
    </>
  );
}
