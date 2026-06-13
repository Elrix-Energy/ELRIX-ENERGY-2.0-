import type { Metadata } from "next";
import Projects from "../components/views/Projects";
import { buildPageMetadata } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Projects Portfolio",
  description:
    "Preview ELRIX ENERGY solar project layouts across Nellore, Tirupati, Kadapa and Ongole. Final case studies publishing soon.",
  path: "/projects",
  robots: { index: false, follow: false },
});

export default function ProjectsPage() {
  return <Projects />;
}
