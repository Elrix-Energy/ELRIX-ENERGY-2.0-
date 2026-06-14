import { trustMetrics, type TrustMetric } from "@/app/data/trustMetrics";

interface TrustStripProps {
  metrics?: TrustMetric[];
  className?: string;
}

export default function TrustStrip({
  metrics = trustMetrics,
  className = "",
}: TrustStripProps) {
  return (
    <section
      className={`trust-strip trust-strip--shared ${className}`.trim()}
      aria-label="Company highlights"
    >
      <div className="container trust-strip-inner">
        <ul className="trust-strip__list">
          {metrics.map((metric) => (
            <li key={metric.id} className="trust-strip__stat">
              <span className="trust-strip__value">{metric.value}</span>
              <span className="trust-strip__label">{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
