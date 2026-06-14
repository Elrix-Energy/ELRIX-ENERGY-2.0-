import type { Metadata } from "next";
import Contact from "../components/views/Contact";
import { BRAND, CONTACT } from "../lib/siteConfig";
import { buildBreadcrumbSchema, buildPageMetadata, routeOgImage } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Get a Free Solar Quote",
  description: `Contact ${BRAND.name} for a free solar site survey and quote. We respond within 24 hours in Nellore, Tirupati, Kadapa and Ongole. Call ${CONTACT.phoneDisplay}.`,
  path: "/contact",
  ogTitle: `Contact ${BRAND.name} | Free Solar Quote in Andhra Pradesh`,
  images: [routeOgImage("/contact", `Contact ${BRAND.name} | Free Solar Quote`)],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

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
