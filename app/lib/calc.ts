/**
 * Shared solar savings calculator logic.
 * Single source of truth for CO₂ and tree-equivalent formulas sitewide.
 */

import {
  estimateCustomerPrice,
  calculatePmSuryaGharSubsidy,
} from "@/app/data/pricingData";

export interface SolarCalcResult {
  systemSize: string;
  lifetimeSavings: string;
  estimatedNetCost: string;
  co2: string;
  treesPlanted: string;
}

const SAVINGS_PER_KW = 1100;
const CO2_TONS_PER_KW = 31;
const TREES_PER_CO2_TON = 40;
const LIFETIME_YEARS = 25;

function formatInr(value: number): string {
  return Math.round(value).toLocaleString("en-IN");
}

export function calculateSolarSavings(monthlyBill: number): SolarCalcResult | null {
  if (!monthlyBill || monthlyBill <= 0) return null;

  const kwSize = monthlyBill / SAVINGS_PER_KW;
  const requiredKw = kwSize.toFixed(1);
  const lifetimeSavings = monthlyBill * 12 * LIFETIME_YEARS;

  const grossCost = estimateCustomerPrice(kwSize);
  const subsidy = calculatePmSuryaGharSubsidy(kwSize);
  const netCost = Math.max(0, grossCost - subsidy);

  const co2Offset = Number(requiredKw) * CO2_TONS_PER_KW;
  const trees = Math.round(co2Offset * TREES_PER_CO2_TON);

  return {
    systemSize: requiredKw,
    lifetimeSavings: formatInr(lifetimeSavings),
    estimatedNetCost: formatInr(netCost),
    co2: co2Offset.toFixed(1),
    treesPlanted: formatInr(trees),
  };
}

export function buildCalculatorContactUrl(
  bill: string,
  result: SolarCalcResult
): string {
  const params = new URLSearchParams({
    bill,
    systemSize: result.systemSize,
    lifetimeSavings: result.lifetimeSavings.replace(/,/g, ""),
    lead_source: "calculator",
  });
  return `/contact?${params.toString()}`;
}

export function buildCalculatorWhatsAppMessage(
  bill: string,
  result: SolarCalcResult
): string {
  return [
    "Hi, I calculated my solar savings on your website.",
    `My monthly bill: ₹${bill}`,
    `Recommended system: ${result.systemSize} kW`,
    `Est. 25-year savings: ₹${result.lifetimeSavings}`,
    "",
    "Please share a detailed quote.",
  ].join("\n");
}
