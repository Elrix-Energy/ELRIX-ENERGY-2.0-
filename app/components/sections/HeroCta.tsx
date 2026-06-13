import Button from "../ui/Button";

interface HeroCtaProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  whatsappHref?: string;
  whatsappLabel?: string;
  className?: string;
  analyticsLocation?: string;
}

export default function HeroCta({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  whatsappHref,
  whatsappLabel = "Chat on WhatsApp",
  className = "",
  analyticsLocation = "hero",
}: HeroCtaProps) {
  return (
    <div className={`hero-cta-group ${className}`.trim()}>
      <Button
        href={primaryHref}
        variant="hero-primary"
        data-analytics-location={analyticsLocation}
        data-analytics-label={primaryLabel}
      >
        {primaryLabel}
      </Button>
      {whatsappHref && (
        <a
          href={whatsappHref}
          className="btn btn-hero-outline"
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-location={analyticsLocation}
        >
          {whatsappLabel}
        </a>
      )}
      {secondaryHref && secondaryLabel && (
        <Button
          href={secondaryHref}
          variant="hero-outline"
          data-analytics-location={analyticsLocation}
          data-analytics-label={secondaryLabel}
        >
          {secondaryLabel}
        </Button>
      )}
    </div>
  );
}
