import type { Metadata } from "next";
import Blog from "../components/views/Blog";
import { buildBreadcrumbSchema, buildPageMetadata, routeOgImage } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Guides & PM Surya Ghar Resources",
  description:
    "Expert solar guides for Andhra Pradesh: PM Surya Ghar subsidy, panel costs, on-grid vs hybrid systems, and local insights for Nellore, Tirupati, Kadapa and Ongole.",
  path: "/blog",
  ogTitle: "Solar Resources & Guides for Andhra Pradesh | ELRIX ENERGY",
  images: [routeOgImage("/blog", "Solar Guides & PM Surya Ghar Resources | ELRIX ENERGY")],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Blog />
    </>
  );
}
