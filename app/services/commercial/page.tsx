import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { PUBLIC_ASSETS, SITE_URL } from "../../lib/siteConfig";
import { buildCanonical, buildPageMetadata, routeOgImage } from "../../lib/seoConfig";
import { buildServiceSchema } from "../../lib/citySchema";
import { FinalCta } from "../../components/sections";
import ContentImage from "../../components/common/ContentImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Commercial Solar Systems",
  description:
    "10kW–500kW+ commercial solar EPC in Nellore, Tirupati, Kadapa and Ongole. 40% accelerated depreciation, load analysis and MNRE-certified installation.",
  path: "/services/commercial",
  images: [routeOgImage("/services/commercial", "Commercial Solar Installation | ELRIX ENERGY")],
});

const serviceSchema = buildServiceSchema({
  name: "Commercial Solar Installation",
  description:
    "10kW to 500kW+ commercial solar EPC for businesses in Nellore, Tirupati, Kadapa and Ongole with accelerated depreciation benefits.",
  path: "/services/commercial",
  serviceType: "Commercial Solar Installation",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: buildCanonical("/services") },
    { "@type": "ListItem", position: 3, name: "Commercial Solar", item: buildCanonical("/services/commercial") },
  ],
};

export default function CommercialPage() {
  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="page-header">
        <div className="container">
          <h1>Commercial Solar Installation in Andhra Pradesh</h1>
          <p>Turn your business roof into a profit center. 40% accelerated depreciation + zero electricity bills.</p>
        </div>
      </header>

      {/* Main Split */}
      <section className="section bg-white">
        <div className="container">
          <div className="service-split-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <ContentImage
                src={PUBLIC_ASSETS.services.commercial}
                alt="Commercial Rooftop Solar System in Andhra Pradesh by ELRIX ENERGY"
              />
            </div>
            <div>
              <h2>Solar That Makes Business Sense</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                For businesses in Nellore, Tirupati, Kadapa, and Ongole, commercial solar is the highest-ROI energy investment available. ELRIX ENERGY designs 10kW to 500kW+ rooftop arrays that slash your operational energy costs while enabling powerful income tax benefits under Section 32 of the Income Tax Act.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  '10kW to 500kW+ corporate systems',
                  '40% accelerated depreciation in Year 1 (Section 32)',
                  'Custom heavy-load analysis and design',
                  'Zero-interest financing through banking partners',
                  '25-year Tier-1 panel warranty',
                  'Net metering for export credits',
                  'Monthly performance reporting dashboard',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                    <CheckSquare size={20} style={{ color: '#10b981', flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Request Commercial Audit <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="text-center mb-2">The Commercial Solar Advantage</h2>
          <p className="text-center mb-3" style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto 3rem' }}>
            Beyond eliminating electricity costs, commercial solar delivers tax benefits that are unavailable in almost any other capital investment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: TrendingUp, title: '40% Accelerated Depreciation', desc: 'Claim 40% of the total system cost as a depreciation deduction in Year 1 under Section 32 of the Income Tax Act — dramatically reducing your taxable income.' },
              { icon: Zap, title: '60–80% OPEX Reduction', desc: 'Commercial electricity tariffs in AP range from ₹8 to ₹12 per unit. Solar production at ₹0 per unit delivers instant, permanent operational savings.' },
              { icon: Shield, title: 'ROI in 24–48 Months', desc: 'Commercial solar ROI is the fastest of any segment — often 24 to 36 months — when depreciation tax benefits are combined with direct energy cost savings.' },
              { icon: ArrowRight, title: 'ESG Compliance', desc: 'Installing solar solar demonstrates genuine environmental commitment, strengthening your brand for clients, investors, and regulatory compliance audits.' },
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

      {/* Who we serve */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="mb-3">Commercial Clients We Serve</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {['Hospitals & Clinics', 'Hotels & Resorts', 'Shopping Complexes', 'Colleges & Schools', 'Warehouses', 'Office Buildings', 'Cold Storage Units', 'Apartment Complexes', 'Petrol Pumps', 'Supermarkets'].map(type => (
              <span key={type} style={{ background: 'var(--background)', border: '1px solid rgba(0,0,0,0.08)', padding: '0.6rem 1.2rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 500 }}>{type}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta
        title="Get Your Free Commercial Solar Audit"
        description="We analyse your electricity bills, roof area, and load profile to design the optimum system for maximum ROI."
        primaryHref="/contact"
        primaryLabel="Request Commercial Consultation"
        className="bg-background"
      />
    </div>
  );
}
