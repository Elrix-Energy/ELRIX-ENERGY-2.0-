/**
 * Trust / KPI strip metrics — editable here until Sanity CMS is connected.
 * TrustStrip currently shows certifications from siteConfig; use these for a future numeric KPI bar.
 */

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
}

export const trustMetrics: TrustMetric[] = [
  { id: "experience", value: "16+", label: "Years local trust" },
  { id: "subsidy", value: "₹78K", label: "Max PM Surya Ghar subsidy" },
  { id: "warranty", value: "25 yr", label: "Panel performance warranty" },
  { id: "districts", value: "4", label: "Districts served in AP" },
];
