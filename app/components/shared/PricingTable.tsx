import { RESIDENTIAL_PRICING_ROWS, PRICING_FOOTNOTE } from "@/app/data/pricingData";

interface PricingTableProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function PricingTable({
  title = "Estimated System Costs in Andhra Pradesh (2026)",
  subtitle = "Transparent pricing with ELRIX discount and PM Surya Ghar subsidy applied.",
  className = "",
}: PricingTableProps) {
  const headings = [
    "System Size",
    "Gross Cost",
    "ELRIX Discount",
    "Customer Price",
    "Subsidy",
    "Net Cost (Est.)",
  ];

  return (
    <div className={className}>
      <h2 className="text-center mb-1">{title}</h2>
      <p className="text-center mb-3 pricing-table__subtitle">{subtitle}</p>
      <div className="pricing-table__wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              {headings.map((heading) => (
                <th key={heading} scope="col">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RESIDENTIAL_PRICING_ROWS.map((row) => (
              <tr
                key={row.systemSize}
                className={row.highlighted ? "highlight-row" : undefined}
              >
                <td>
                  {row.systemSize}
                  {row.highlighted ? (
                    <span className="pricing-table__badge" aria-label="Most popular size">
                      ★
                    </span>
                  ) : null}
                </td>
                <td>{row.grossCost}</td>
                <td>{row.elrixDiscount}</td>
                <td>{row.customerPrice}</td>
                <td>{row.subsidy}</td>
                <td className="subsidy-price">{row.netCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center pricing-table__footnote">{PRICING_FOOTNOTE}</p>
    </div>
  );
}
