import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

/** Legacy route — content lives on /subsidy. Kept for redirect only. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FinancingPage() {
  permanentRedirect("/subsidy");
}
