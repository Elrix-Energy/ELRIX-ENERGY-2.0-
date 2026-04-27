import type { Metadata } from "next";
import About from "../components/pages/About";

export const metadata: Metadata = {
  title: "About | ELRIX ENERGY",
  description: "Learn about ELRIX ENERGY, our leadership, and why customers trust our solar EPC expertise."
};

export default function AboutPage() {
  return <About />;
}
