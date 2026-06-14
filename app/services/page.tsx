import type { Metadata } from "next";
import Services from "../components/views/Services";
import { buildBreadcrumbSchema, buildPageMetadata, routeOgImage } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Installation Services in Andhra Pradesh",
  description:
    "Residential, commercial and industrial solar EPC in Nellore, Tirupati, Kadapa and Ongole. PM Surya Ghar subsidy support, net metering and 25-year panel warranty.",
  path: "/services",
  images: [routeOgImage("/services", "Solar Services in Andhra Pradesh | ELRIX ENERGY")],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

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
