import type { Metadata } from "next";
import Contact from "../components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact | ELRIX ENERGY",
  description: "Contact ELRIX ENERGY for a free solar site survey and quote."
};

export default function ContactPage() {
  return <Contact />;
}
