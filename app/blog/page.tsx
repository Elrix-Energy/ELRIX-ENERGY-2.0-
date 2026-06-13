import type { Metadata } from "next";
import Blog from "../components/views/Blog";
import { buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Guides & PM Surya Ghar Resources",
  description:
    "Expert solar guides for Andhra Pradesh: PM Surya Ghar subsidy, panel costs, on-grid vs hybrid systems, and local insights for Nellore, Tirupati, Kadapa and Ongole.",
  path: "/blog",
  ogTitle: "Solar Resources & Guides for Andhra Pradesh | ELRIX ENERGY",
});

export default function BlogPage() {
  return <Blog />;
}
