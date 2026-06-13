import Button from "../ui/Button";

interface FinalCtaProps {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}

export default function FinalCta({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className = "",
}: FinalCtaProps) {
  return (
    <section className={`ui-final-cta section bg-white ${className}`.trim()}>
      <div className="container text-center">
        <h2 className="mb-2">{title}</h2>
        {description && <p className="ui-final-cta__description">{description}</p>}
        <div className="ui-final-cta__actions">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
