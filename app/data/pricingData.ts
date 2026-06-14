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
  elrixDiscount: string;
  customerPrice: string;
  subsidy: string;
  netCost: string;
  /** kW numeric value for calculator lookups */
  kw: number;
  highlighted?: boolean;
}

function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export const PM_SURYA_GHAR_SLABS: SubsidySlab[] = [
  {
    id: "1kw",
    capacityLabel: "1 kW System",
    amount: 30_000,
    amountDisplay: "₹30,000",
    description: "Perfect for small homes",
  },
  {
    id: "2kw",
    capacityLabel: "2 kW System",
    amount: 60_000,
    amountDisplay: "₹60,000",
    description: "Ideal for average usage",
  },
  {
    id: "3kw-plus",
    capacityLabel: "3 kW & Above",
    amount: 78_000,
    amountDisplay: "₹78,000",
    description: "For high energy demands",
    highlighted: true,
  },
];

/** Standard residential tiers — gross, ELRIX discount, customer price, subsidy, net (2026). */
export const RESIDENTIAL_PRICING_ROWS: ResidentialPricingRow[] = [
  {
    kw: 1,
    systemSize: "1 kW",
    grossCost: formatInr(75_000),
    elrixDiscount: formatInr(8_000),
    customerPrice: formatInr(67_000),
    subsidy: formatInr(30_000),
    netCost: formatInr(37_000),
  },
  {
    kw: 2,
    systemSize: "2 kW",
    grossCost: formatInr(1_50_000),
    elrixDiscount: formatInr(15_000),
    customerPrice: formatInr(1_35_000),
    subsidy: formatInr(60_000),
    netCost: formatInr(75_000),
  },
  {
    kw: 3,
    systemSize: "3 kW",
    grossCost: formatInr(2_23_000),
    elrixDiscount: formatInr(23_000),
    customerPrice: formatInr(2_00_000),
    subsidy: formatInr(78_000),
    netCost: formatInr(1_22_000),
    highlighted: true,
  },
  {
    kw: 5,
    systemSize: "5 kW",
    grossCost: formatInr(3_72_000),
    elrixDiscount: formatInr(38_000),
    customerPrice: formatInr(3_34_000),
    subsidy: formatInr(78_000),
    netCost: formatInr(2_56_000),
  },
  {
    kw: 10,
    systemSize: "10 kW",
    grossCost: formatInr(7_43_000),
    elrixDiscount: formatInr(77_000),
    customerPrice: formatInr(6_66_000),
    subsidy: formatInr(78_000),
    netCost: formatInr(5_88_000),
  },
];

export const PRICING_FOOTNOTE =
  "*Net cost = Customer price after ELRIX discount, minus PM Surya Ghar subsidy. Subsidy: ₹30,000 (1 kW), ₹60,000 (2 kW), ₹78,000 (3 kW+).";

/** Customer price per kW used for non-standard calculator sizes (based on 3 kW tier). */
export const CUSTOMER_PRICE_PER_KW_INR = Math.round(200_000 / 3);

const TIER_CUSTOMER_PRICE = new Map(
  RESIDENTIAL_PRICING_ROWS.map((row) => [row.kw, parseInr(row.customerPrice)]),
);

function parseInr(value: string): number {
  return Number(value.replace(/[₹,\s]/g, ""));
}

/** PM Surya Ghar residential subsidy by system size (kW). */
export function calculatePmSuryaGharSubsidy(kwSize: number): number {
  if (kwSize >= 3) return 78_000;
  if (kwSize >= 2) return 60_000;
  if (kwSize >= 1) return 30_000;
  return Math.round(kwSize * 30_000);
}

/** Customer price after ELRIX discount — exact tier or estimated for other sizes. */
export function estimateCustomerPrice(kwSize: number): number {
  const roundedKw = Math.round(kwSize);
  const exactTier = TIER_CUSTOMER_PRICE.get(roundedKw);
  if (exactTier !== undefined && Math.abs(kwSize - roundedKw) < 0.15) {
    return exactTier;
  }
  return Math.round(kwSize * CUSTOMER_PRICE_PER_KW_INR);
}

export function estimateNetSystemCost(kwSize: number): number {
  return Math.max(0, estimateCustomerPrice(kwSize) - calculatePmSuryaGharSubsidy(kwSize));
}

/** @deprecated Use estimateCustomerPrice — kept for any legacy imports */
export const COST_PER_KW_INR = CUSTOMER_PRICE_PER_KW_INR;
