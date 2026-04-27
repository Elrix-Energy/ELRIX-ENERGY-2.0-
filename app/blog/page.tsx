import type { Metadata } from "next";
import Blog from "../components/pages/Blog";

export const metadata: Metadata = {
  title: "Blog | ELRIX ENERGY",
  description: "Solar insights, subsidy guides, and regional analysis from ELRIX ENERGY."
};

export default function BlogPage() {
  return <Blog />;
}
