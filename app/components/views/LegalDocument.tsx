import Link from "next/link";
import type { LegalSection } from "@/app/data/legalContent";
import { BRAND, CONTACT } from "@/app/lib/siteConfig";

interface LegalDocumentProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalDocument({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="legal-page">
      <header className="page-header">
        <div className="container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <p className="legal-updated">Last updated: {lastUpdated}</p>

          <div className="legal-body">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="legal-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {section.listItems ? (
                  <ul>
                    {section.listItems.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}

            <div className="legal-contact">
              <h2>Contact us</h2>
              <p>
                Questions about this page? Reach {BRAND.legalName} at{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, call{" "}
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>, or visit our{" "}
                <Link href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
