import type { Metadata } from "next";
import Projects from "../components/pages/Projects";

export const metadata: Metadata = {
  title: "Projects | ELRIX ENERGY",
  description: "Explore ELRIX ENERGY solar installations and case studies in Andhra Pradesh."
};

export default function ProjectsPage() {
  return <Projects />;
}
