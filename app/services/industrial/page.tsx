import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, Zap, Settings, BarChart2, ArrowRight } from "lucide-react";
import { PUBLIC_ASSETS, SITE_URL } from "../../lib/siteConfig";
import { buildCanonical, buildPageMetadata } from "../../lib/seoConfig";
import { buildServiceSchema } from "../../lib/citySchema";
import { FinalCta } from "../../components/sections";
import ContentImage from "../../components/common/ContentImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Industrial Solar EPC",
  description:
    "MW-scale industrial solar for factories in Nellore, Tirupati, Kadapa and Ongole. Grid synchronization, 40% depreciation and zero-downtime commissioning.",
  path: "/services/industrial",
});

const serviceSchema = buildServiceSchema({
  name: "Industrial Solar EPC",
  description:
    "Megawatt-scale industrial solar EPC for factories and industrial campuses across Nellore, Tirupati, Kadapa and Ongole.",
  path: "/services/industrial",
  serviceType: "Industrial Solar EPC",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: buildCanonical("/services") },
    { "@type": "ListItem", position: 3, name: "Industrial Solar", item: buildCanonical("/services/industrial") },
  ],
};

export default function IndustrialPage() {
  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="page-header">
        <div className="container">
          <h1>Industrial Solar EPC in Andhra Pradesh</h1>
          <p>Megawatt-scale solar plants engineered for heavy industrial loads. Zero operational compromise.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <ContentImage
                src={PUBLIC_ASSETS.services.industrial}
                alt="Industrial Solar Farm Andhra Pradesh – Megawatt Scale by ELRIX ENERGY"
              />
            </div>
            <div>
              <h2>Power Your Factory with Permanent Solar Energy</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Industrial electricity costs are the single largest controllable overhead for manufacturers in Nellore, Kadapa, and Ongole. ELRIX ENERGY designs and constructs megawatt-capable solar arrays for continuous industrial operation — with advanced grid synchronization, transformer integration, and zero-downtime commissioning.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {['100kW to multi-MW industrial installations','Advanced grid synchronization & transformer loading','40% accelerated depreciation in Year 1','Zero-downtime commissioning protocol','High-wind HDGI structural design','SCADA and remote monitoring integration','Dedicated industrial project management team'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                    <CheckSquare size={20} style={{ color: '#10b981', flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Get Industrial Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <h2 className="text-center mb-3">Our Industrial Engineering Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Zap, title: 'Grid Synchronization', desc: 'Precise synchronization with HT/LT grids for seamless integration without disrupting existing industrial power supply.' },
              { icon: Settings, title: 'Transformer Integration', desc: 'Expert solar integration at transformer level for large industrial loads — minimising losses and maximising yield.' },
              { icon: BarChart2, title: 'SCADA Monitoring', desc: 'Remote dashboards tracking real-time generation, consumption, export, and system health across your entire plant.' },
              { icon: ArrowRight, title: 'Zero-Downtime Protocol', desc: 'Our commissioning methodology ensures your production floor never loses power during installation and integration.' },
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

      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="mb-3">Industries We Serve in Andhra Pradesh</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {['Manufacturing Plants','Textile Mills','Cold Storage & Logistics','Rice Mills','Quarrying & Mining','Cement Plants','Aquaculture Units','Paper Mills','Pharma Facilities','Steel Fabrication'].map(type => (
              <span key={type} style={{ background: 'var(--background)', border: '1px solid rgba(0,0,0,0.08)', padding: '0.6rem 1.2rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 500 }}>{type}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready to Slash Your Industrial Power Costs?"
        description="Our engineers will conduct a full load analysis and present a detailed EPC proposal."
        primaryHref="/contact"
        primaryLabel="Request Industrial Consultation"
        className="bg-background"
      />
    </div>
  );
}
