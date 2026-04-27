import type { Metadata } from "next";
import Home from "./components/pages/Home";

export const metadata: Metadata = {
  title: "Solar Company in Nellore, Tirupati, Kadapa & Ongole | ELRIX ENERGY",
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
};

export default function HomePage() {
  return <Home />;
}
