"use client";

import { useState } from "react";
import { trackEmiCalculate } from "@/app/lib/analytics";
import { Button, Card, Input, Select } from "../ui";

interface EmiResult {
  emi: number;
  principal: number;
  totalPayable: number;
  totalInterest: number;
}

interface EmiCalculatorProps {
  title?: string;
  description?: string;
  defaultSystemCost?: string;
  defaultSubsidyAmount?: string;
  defaultTenure?: string;
  defaultRate?: string;
}

const tenureOptions = [
  { value: "12", label: "1 Year" },
  { value: "24", label: "2 Years" },
  { value: "36", label: "3 Years" },
  { value: "48", label: "4 Years" },
  { value: "60", label: "5 Years" },
  { value: "72", label: "6 Years" },
  { value: "84", label: "7 Years" },
];

const formatINR = (num: number) => num.toLocaleString("en-IN");

export default function EmiCalculator({
  title = "EMI Calculator",
  description = "Calculate your monthly EMI for a solar installation. Your EMI is often less than your current electricity bill!",
  defaultSystemCost = "",
  defaultSubsidyAmount = "",
  defaultTenure = "60",
  defaultRate = "9",
}: EmiCalculatorProps) {
  const [systemCost, setSystemCost] = useState(defaultSystemCost);
  const [subsidyAmount, setSubsidyAmount] = useState(defaultSubsidyAmount);
  const [tenure, setTenure] = useState(defaultTenure);
  const [rate, setRate] = useState(defaultRate);
  const [emiResult, setEmiResult] = useState<EmiResult | null>(null);

  const calculateEMI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const principal = parseFloat(systemCost) - parseFloat(subsidyAmount || "0");
    if (!principal || principal <= 0) return;

    const monthlyRate = parseFloat(rate) / 12 / 100;
    const months = parseInt(tenure, 10);
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;

    const roundedEmi = Math.round(emi);
    const roundedPrincipal = Math.round(principal);

    setEmiResult({
      emi: roundedEmi,
      principal: roundedPrincipal,
      totalPayable: Math.round(totalPayable),
      totalInterest: Math.round(totalInterest),
    });

    trackEmiCalculate(roundedPrincipal, roundedEmi, months);
  };

  return (
    <div className="ui-emi">
      <div className="ui-emi__intro">
        <h2 className="text-center mb-2">{title}</h2>
        <p className="text-center mb-3">{description}</p>
      </div>

      <Card variant="glass" className="emi-calculator-box ui-emi__box">
        <form onSubmit={calculateEMI}>
          <div className="emi-form ui-emi__form">
            <Input
              label="Total System Cost (₹)"
              name="systemCost"
              type="number"
              value={systemCost}
              onChange={(event) => setSystemCost(event.target.value)}
              placeholder="e.g. 170000"
              required
              min="10000"
            />
            <Input
              label="Subsidy Amount (₹)"
              name="subsidyAmount"
              type="number"
              value={subsidyAmount}
              onChange={(event) => setSubsidyAmount(event.target.value)}
              placeholder="e.g. 78000"
              min="0"
            />
            <Select
              label="Loan Tenure"
              name="tenure"
              value={tenure}
              onChange={(event) => setTenure(event.target.value)}
              options={tenureOptions}
            />
            <Input
              label="Interest Rate (% p.a.)"
              name="rate"
              type="number"
              value={rate}
              onChange={(event) => setRate(event.target.value)}
              placeholder="e.g. 9"
              required
              min="0"
              step="0.1"
              max="30"
            />
          </div>

          <div className="text-center">
            <Button type="submit" variant="primary">
              Calculate EMI
            </Button>
          </div>
        </form>

        {emiResult && (
          <div className="emi-results ui-emi__results" role="status" aria-live="polite" aria-atomic="true">
            {[
              ["Monthly EMI", emiResult.emi],
              ["Loan Amount", emiResult.principal],
              ["Total Interest", emiResult.totalInterest],
              ["Total Payable", emiResult.totalPayable],
            ].map(([label, value]) => (
              <Card key={label} variant="result" className="emi-result-card ui-emi__result-card">
                <h3>{label}</h3>
                <p className="emi-result-value">₹ {formatINR(Number(value))}</p>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
