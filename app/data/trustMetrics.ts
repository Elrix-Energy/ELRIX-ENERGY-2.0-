/**
 * Trust / KPI strip metrics — editable here until Sanity CMS is connected.
 * Rendered by TrustStrip on Home and city landing pages.
 */

export interface TrustMetric {
  id: string;
  value: string;
  label: string;
}

export const trustMetrics: TrustMetric[] = [
  { id: "installations", value: "10+", label: "Rooftop installations" },
  { id: "capacity", value: "50 kW+", label: "Total capacity installed" },
  { id: "experience", value: "16+", label: "Years local experience" },
  { id: "districts", value: "4", label: "Districts across Andhra Pradesh" },
];
