import type { Metadata } from "next";
import Subsidy from "../components/pages/Subsidy";

export const metadata: Metadata = {
  title: "PM Surya Ghar Subsidy & EMI Financing | ELRIX ENERGY",
  description: "Understand PM Surya Ghar subsidy slabs, solar system pricing before and after subsidy, and calculate your EMI with ELRIX ENERGY's financing support."
};

export default function SubsidyPage() {
  return <Subsidy />;
}
