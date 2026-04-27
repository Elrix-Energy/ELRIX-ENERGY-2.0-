import type { Metadata } from "next";
import Services from "../components/pages/Services";

export const metadata: Metadata = {
  title: "Services | ELRIX ENERGY",
  description: "Residential, commercial, industrial solar and maintenance services across Andhra Pradesh."
};

export default function ServicesPage() {
  return <Services />;
}
