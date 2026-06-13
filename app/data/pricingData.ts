/**
 * Shared residential pricing & PM Surya Ghar subsidy tiers.
 * Used by Subsidy page, Residential service page, calculator, and blog copy references.
 */

export interface SubsidySlab {
  id: string;
  capacityLabel: string;
  amount: number;
  amountDisplay: string;
  description: string;
  highlighted?: boolean;
}

export interface ResidentialPricingRow {
  systemSize: string;
  grossCost: string;
  subsidy: string;
  netCost: string;
  roi: string;
}

export const COST_PER_KW_INR = 65_000;

export const PM_SURYA_GHAR_SLABS: SubsidySlab[] = [
  {
    id: "1kw",
    capacityLabel: "1 kW System",
    amount: 30_000,
    amountDisplay: "₹ 30,000",
    description: "Perfect for small homes",
  },
  {
    id: "2kw",
    capacityLabel: "2 kW System",
    amount: 60_000,
    amountDisplay: "₹ 60,000",
    description: "Ideal for average usage",
  },
  {
    id: "3kw-plus",
    capacityLabel: "3 kW & Above",
    amount: 78_000,
    amountDisplay: "₹ 78,000",
    description: "For high energy demands",
    highlighted: true,
  },
];

export const RESIDENTIAL_PRICING_ROWS: ResidentialPricingRow[] = [
  {
    systemSize: "1 kW",
    grossCost: "₹65,000",
    subsidy: "₹30,000",
    netCost: "₹35,000",
    roi: "30–36 months",
  },
  {
    systemSize: "2 kW",
    grossCost: "₹1,30,000",
    subsidy: "₹60,000",
    netCost: "₹70,000",
    roi: "30–36 months",
  },
  {
    systemSize: "3 kW",
    grossCost: "₹1,70,000",
    subsidy: "₹78,000",
    netCost: "₹92,000",
    roi: "30–40 months",
  },
  {
    systemSize: "5 kW",
    grossCost: "₹2,70,000",
    subsidy: "₹78,000",
    netCost: "₹1,92,000",
    roi: "36–48 months",
  },
  {
    systemSize: "10 kW",
    grossCost: "₹5,00,000",
    subsidy: "₹78,000",
    netCost: "₹4,22,000",
    roi: "36–48 months",
  },
];

export const PRICING_FOOTNOTE =
  "*Subsidy of ₹78,000 applies to 3kW and above. For 1kW: ₹30,000; 2kW: ₹60,000.";

/** PM Surya Ghar residential subsidy by system size (kW). */
export function calculatePmSuryaGharSubsidy(kwSize: number): number {
  if (kwSize >= 3) return 78_000;
  if (kwSize >= 2) return 60_000;
  if (kwSize >= 1) return 30_000;
  return Math.round(kwSize * 30_000);
}

export function estimateNetSystemCost(kwSize: number): number {
  const gross = kwSize * COST_PER_KW_INR;
  return Math.max(0, gross - calculatePmSuryaGharSubsidy(kwSize));
}
