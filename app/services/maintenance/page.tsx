import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, Wrench, Monitor, Droplets, ArrowRight } from "lucide-react";
import { PUBLIC_ASSETS, SITE_URL } from "../../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../../lib/seoConfig";
import { buildServiceSchema } from "../../lib/citySchema";
import { FinalCta } from "../../components/sections";
import ContentImage from "../../components/common/ContentImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Maintenance & AMC",
  description:
    "Solar panel cleaning, inverter checks and AMC packages in Nellore, Tirupati, Kadapa and Ongole. 24/7 monitoring and performance guarantees.",
  path: "/services/maintenance",
});

const serviceSchema = buildServiceSchema({
  name: "Solar Maintenance & AMC",
  description:
    "Solar panel cleaning, inverter health checks, and annual maintenance contracts across Nellore, Tirupati, Kadapa and Ongole.",
  path: "/services/maintenance",
  serviceType: "Solar Operations and Maintenance",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: buildCanonical("/services") },
    { "@type": "ListItem", position: 3, name: "Maintenance & AMC", item: buildCanonical("/services/maintenance") },
  ],
};

export default function MaintenancePage() {
  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="page-header">
        <div className="container">
          <h1>Solar Panel Maintenance & AMC in Andhra Pradesh</h1>
          <p>Protect your solar investment. Peak performance guaranteed with ELRIX ENERGY's O&M services.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="service-split-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <ContentImage
                src={PUBLIC_ASSETS.services.maintenance}
                alt="Solar Panel Maintenance and Cleaning Service in Nellore by ELRIX ENERGY"
              />
            </div>
            <div>
              <h2>Keep Your Solar System at Peak Performance</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                A solar system with dirty panels or a degrading inverter can lose 20–30% of its output without any visible sign of failure. ELRIX ENERGY's Operations & Maintenance (O&M) service ensures your system generates at rated capacity throughout its 25-year lifespan — across Nellore, Tirupati, Kadapa, and Ongole.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'Free professional site visit included',
                  'Scheduled panel cleaning (dry & wet wash)',
                  'Inverter health diagnostics & firmware updates',
                  'String & module-level performance testing',
                  '24/7 digital performance monitoring',
                  'Thermal imaging for hot-spot detection',
                  'Annual performance guarantee report',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                    <CheckSquare size={20} style={{ color: '#10b981', flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Book a Maintenance Visit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="text-center mb-3">What Our O&M Service Includes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Droplets, title: 'Panel Cleaning', desc: 'Dust accumulation on panels in AP can reduce output by 15–25%. Our automated and manual cleaning protocols restore full yield.' },
              { icon: Wrench, title: 'Inverter & BOS Check', desc: 'Full electrical inspection of DC strings, AC isolators, earthing continuity, junction boxes, and inverter health diagnostics.' },
              { icon: Monitor, title: '24/7 Remote Monitoring', desc: 'Real-time generation data, fault alerts, and monthly performance reports delivered digitally — so you always know your system is working.' },
              { icon: ArrowRight, title: 'Thermal Imaging', desc: 'Annual drone-based thermal imaging to detect hot-spot failures, delamination, and micro-cracking before they cause output loss.' },
            ].map(card => (
              <div key={card.title} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <card.icon size={36} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta
        title="Is Your Solar System Performing at 100%?"
        description="Book a free diagnostic visit for your existing solar system — anywhere in Nellore, Tirupati, Kadapa, or Ongole."
        primaryHref="/contact"
        primaryLabel="Book Free Diagnostic"
        secondaryHref="tel:+919640484677"
        secondaryLabel="Call +91 9640484677"
      />
    </div>
  );
}
