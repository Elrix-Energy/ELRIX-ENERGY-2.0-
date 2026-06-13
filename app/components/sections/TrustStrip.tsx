import Badge from "../ui/Badge";
import { CERTIFICATIONS } from "@/app/lib/siteConfig";

interface TrustStripProps {
  items?: string[];
  className?: string;
}

export default function TrustStrip({
  items = CERTIFICATIONS.map((cert) => cert.label),
  className = "",
}: TrustStripProps) {
  return (
    <div className={`trust-strip trust-strip--shared ${className}`.trim()}>
      <div className="container trust-strip-inner">
        {items.map((item) => (
          <Badge key={item} variant="brand" className="trust-strip__item">
            ✓ {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
