import type { Metadata } from "next";
import Subsidy from "../components/views/Subsidy";
import { subsidyFaqs } from "../data/subsidyFaqs";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildPageMetadata,
  routeOgImage,
} from "../lib/seoConfig";

export const metadata: Metadata = buildPageMetadata({
  title: "PM Surya Ghar Subsidy in Andhra Pradesh",
  description:
    "Claim up to ₹78,000 PM Surya Ghar subsidy for rooftop solar in Nellore, Tirupati, Kadapa and Ongole. ELRIX ENERGY handles APSPDCL paperwork and EMI planning.",
  path: "/subsidy",
  ogTitle: "PM Surya Ghar Subsidy up to ₹78,000 | ELRIX ENERGY",
  images: [routeOgImage("/subsidy", "PM Surya Ghar Subsidy up to ₹78,000 | ELRIX ENERGY")],
});

const structuredData = [
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "PM Surya Ghar Subsidy", path: "/subsidy" },
  ]),
  buildFaqPageSchema(subsidyFaqs),
];

export default function SubsidyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Subsidy />
    </>
  );
}
