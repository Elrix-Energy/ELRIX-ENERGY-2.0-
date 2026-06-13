import Image from "next/image";
import { CERTIFICATIONS } from "@/app/lib/siteConfig";

interface CertificationBadgesProps {
  className?: string;
  variant?: "footer" | "inline";
}

export default function CertificationBadges({
  className = "",
  variant = "footer",
}: CertificationBadgesProps) {
  return (
    <ul
      className={`cert-badges cert-badges--${variant} ${className}`.trim()}
      aria-label="Certifications and registrations"
    >
      {CERTIFICATIONS.map(({ id, label, iconSrc }) => (
        <li key={id} className="cert-badges__item">
          <span className="cert-badges__slot">
            {iconSrc ? (
              <Image
                src={iconSrc}
                alt={label}
                className="cert-badges__icon"
                width={120}
                height={64}
                sizes="(max-width: 640px) 5rem, 6rem"
              />
            ) : (
              <span className="cert-badges__check" aria-hidden="true">
                ✓
              </span>
            )}
          </span>
          <span className="cert-badges__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}
