import type { Metadata } from "next";
import Projects from "../components/views/Projects";
import { projectCaseStudies } from "../data/projectsData";
import { BRAND } from "../lib/siteConfig";
import { buildBreadcrumbSchema, buildItemListSchema, buildPageMetadata, routeOgImage } from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Projects Portfolio",
  description:
    "On-grid rooftop solar installations by ELRIX ENERGY in Nellore and Tirupati — residential and industrial projects across Andhra Pradesh.",
  path: "/projects",
  ogTitle: `Solar Projects | ${BRAND.name}`,
  images: [routeOgImage("/projects", "Solar Projects Portfolio | ELRIX ENERGY")],
});

const structuredData = [
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]),
  buildItemListSchema({
    name: `${BRAND.name} Solar Projects`,
    items: projectCaseStudies.map((project) => ({
      name: project.title,
      description: project.summary,
    })),
  }),
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Projects />
    </>
  );
}
