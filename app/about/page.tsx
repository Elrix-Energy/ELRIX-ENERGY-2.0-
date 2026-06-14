import type { Metadata } from "next";
import About from "../components/views/About";
import { BRAND } from "../lib/siteConfig";
import { buildBreadcrumbSchema, buildPageMetadata, routeOgImage } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${BRAND.name}`,
  description:
    "MNRE-certified, APSPDCL-empanelled solar EPC in Nellore serving Tirupati, Kadapa and Ongole. 16+ years of local trust, transparent pricing and end-to-end installation.",
  path: "/about",
  ogTitle: `About ${BRAND.name} | Solar EPC in Nellore, AP`,
  images: [routeOgImage("/about", `About ${BRAND.name} | Solar EPC in Nellore`)],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

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
