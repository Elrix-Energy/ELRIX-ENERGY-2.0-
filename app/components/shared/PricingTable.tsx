import { RESIDENTIAL_PRICING_ROWS, PRICING_FOOTNOTE } from "@/app/data/pricingData";

interface PricingTableProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PricingTable({
  title = "Estimated System Costs in Andhra Pradesh (2026)",
  subtitle = "Net cost after PM Surya Ghar subsidy. Actual prices may vary based on site conditions.",
  className = "",
}: PricingTableProps) {
  return (
    <div className={className}>
      <h2 className="text-center mb-1">{title}</h2>
      <p className="text-center mb-3 pricing-table__subtitle">{subtitle}</p>
      <div className="pricing-table__wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              {["System Size", "Gross Cost", "Subsidy", "Net Cost (Est.)", "Approx. ROI"].map(
                (heading) => (
                  <th key={heading} scope="col">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {RESIDENTIAL_PRICING_ROWS.map((row) => (
              <tr key={row.systemSize}>
                <td>{row.systemSize}</td>
                <td>{row.grossCost}</td>
                <td>{row.subsidy}</td>
                <td className="subsidy-price">{row.netCost}</td>
                <td>{row.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center pricing-table__footnote">{PRICING_FOOTNOTE}</p>
    </div>
  );
}
