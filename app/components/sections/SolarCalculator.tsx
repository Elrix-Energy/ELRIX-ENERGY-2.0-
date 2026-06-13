"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";
import {
  buildCalculatorContactUrl,
  buildCalculatorWhatsAppMessage,
  calculateSolarSavings,
  type SolarCalcResult,
} from "@/app/lib/calc";
import { trackCalculatorSubmit } from "@/app/lib/analytics";
import { WHATSAPP } from "@/app/lib/siteConfig";

interface SolarCalculatorProps {
  variant?: "section" | "hero";
  className?: string;
  id?: string;
}

export default function SolarCalculator({
  variant = "section",
  className = "",
  id = "calculator",
}: SolarCalculatorProps) {
  const [bill, setBill] = useState("");
  const [calcResult, setCalcResult] = useState<SolarCalcResult | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const numBill = parseFloat(bill);
    const result = calculateSolarSavings(numBill);
    setCalcResult(result);
    if (result) {
      trackCalculatorSubmit(numBill, result.systemSize);
    }
  };

  const wrapperClass =
    variant === "hero"
      ? `hero-calculator-card glass ${className}`.trim()
      : `calculator-wrapper glass ${className}`.trim();

  return (
    <div
      className={wrapperClass}
      id={id}
      style={{ scrollMarginTop: "80px" }}
      data-analytics-location={`solar_calculator_${variant}`}
    >
      <div className="calculator-content">
        <h2 className="calculator-heading">
          <Calculator aria-hidden="true" className="calculator-heading__icon" />
          Solar Savings Calculator
        </h2>
        <p className="calculator-intro">
          Find out how much you can save and the approximate system size you need based on your
          monthly electricity bill.
        </p>

        <form onSubmit={handleSubmit} className="calc-form">
          <div className="calc-input-group">
            <label htmlFor={`bill-${variant}`}>Average Monthly Bill (₹)</label>
            <input
              type="number"
              id={`bill-${variant}`}
              value={bill}
              onChange={(event) => setBill(event.target.value)}
              placeholder="e.g. 3500"
              required
              min="100"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Calculate Savings
          </button>
        </form>

        {calcResult && (
          <>
            <div className="calc-result" role="status" aria-live="polite" aria-atomic="true">
              <div className="result-box">
                <h3>Recommended Size</h3>
                <p className="result-value">{calcResult.systemSize} kW</p>
              </div>
              <div className="result-box">
                <h3>Est. Net Cost</h3>
                <p className="result-value">₹ {calcResult.estimatedNetCost}</p>
              </div>
              <div className="result-box">
                <h3>25-Year Savings</h3>
                <p className="result-value result-value--accent">
                  ₹ {calcResult.lifetimeSavings}
                </p>
              </div>
              <div className="result-box">
                <h3>Trees Planted Eq.</h3>
                <p className="result-value result-value--success">{calcResult.treesPlanted}</p>
              </div>
              <div className="result-box">
                <h3>CO₂ Offset (25 Yrs)</h3>
                <p className="result-value result-value--success">{calcResult.co2} Tons</p>
              </div>
            </div>

            <div className="calc-lead-capture">
              <p>
                A <strong>{calcResult.systemSize} kW</strong> system pays for itself quickly.
                Invest ~<strong>₹ {calcResult.estimatedNetCost}</strong> (after subsidy) to save{" "}
                <strong>₹ {calcResult.lifetimeSavings}</strong> over 25 years.
              </p>
              <div className="calc-cta-group">
                <Link href={buildCalculatorContactUrl(bill, calcResult)} className="btn btn-primary">
                  Get Detailed Quote
                </Link>
                <a
                  href={WHATSAPP.url(buildCalculatorWhatsAppMessage(bill, calcResult))}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp This Estimate
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
