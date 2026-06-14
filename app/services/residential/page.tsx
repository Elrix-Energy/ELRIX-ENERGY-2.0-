import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, Sun, IndianRupee, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import { PUBLIC_ASSETS, SITE_URL } from "../../lib/siteConfig";
import { buildCanonical, buildPageMetadata, routeOgImage } from "../../lib/seoConfig";
import { buildServiceSchema } from "../../lib/citySchema";
import { FinalCta } from "../../components/sections";
import ContentImage from "../../components/common/ContentImage";
import PricingTable from "../../components/shared/PricingTable";

export const metadata: Metadata = buildPageMetadata({
  title: "Residential Solar Installation",
  description:
    "1kW–10kW rooftop solar for homes in Nellore, Tirupati, Kadapa and Ongole. PM Surya Ghar subsidy up to ₹78,000, net metering and free site survey.",
  path: "/services/residential",
  images: [routeOgImage("/services/residential", "Residential Solar Installation | ELRIX ENERGY")],
});

const serviceSchema = buildServiceSchema({
  name: "Residential Solar Installation",
  description:
    "1kW to 10kW rooftop solar for homes in Nellore, Tirupati, Kadapa and Ongole with PM Surya Ghar subsidy and net metering.",
  path: "/services/residential",
  serviceType: "Residential Solar Installation",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: buildCanonical("/services") },
    { "@type": "ListItem", position: 3, name: "Residential Solar", item: buildCanonical("/services/residential") },
  ],
};

export default function ResidentialPage() {
  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="page-header">
        <div className="container">
          <h1>Residential Solar Installation in Andhra Pradesh</h1>
          <p>Eliminate your electricity bill with a Tier-1 rooftop solar system. PM Surya Ghar subsidy up to ₹78,000 included.</p>
        </div>
      </header>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="service-split-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <ContentImage
                src={PUBLIC_ASSETS.services.residential}
                alt="Residential Solar Panel Installation in Nellore by ELRIX ENERGY"
              />
            </div>
            <div>
              <h2>Power Your Home with Clean, Free Energy</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                ELRIX ENERGY designs and installs residential solar systems from 1kW to 10kW across Nellore, Tirupati, Kadapa, and Ongole. Every installation uses ALMM-listed, DCR-compliant Tier-1 panels that qualify for the full PM Surya Ghar government subsidy.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  '1kW to 10kW home systems',
                  'PM Surya Ghar subsidy up to ₹78,000',
                  'Seamless APSPDCL net metering setup',
                  '25-year linear performance warranty on panels',
                  '10-year inverter product warranty',
                  '5-year comprehensive workmanship warranty',
                  'Cyclone-proof HDGI mounting structure',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)' }}>
                    <CheckSquare size={20} style={{ color: '#10b981', flexShrink: 0 }} />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Get Free Site Survey <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="text-center mb-3">How ELRIX Makes Going Solar Simple</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', icon: Sun, title: 'Free Roof Survey', desc: 'We assess your roof, measure shadow-free area, and calculate exact panel placement for maximum yield.' },
              { step: '02', icon: IndianRupee, title: 'Subsidy Application', desc: 'We register your PM Surya Ghar application and manage all APSPDCL portal paperwork on your behalf.' },
              { step: '03', icon: Wrench, title: 'Installation in 7 Days', desc: 'Our certified engineers complete your full installation — panels, inverter, wiring, and earthing — in record time.' },
              { step: '04', icon: ShieldCheck, title: 'Grid Connection & Credit', desc: 'We finalize your net metering connection and ensure your subsidy Direct Benefit Transfer is processed.' },
            ].map(step => (
              <div key={step.step} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
                <span style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(0,0,0,0.04)', position: 'absolute', top: '0.5rem', right: '1rem', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>{step.step}</span>
                <step.icon size={36} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <PricingTable />
        </div>
      </section>

      {/* CTA */}
      <FinalCta
        title="Ready to Eliminate Your Electricity Bill?"
        description="Get a free, no-obligation site survey from our certified engineers within 24 hours."
        primaryHref="/contact"
        primaryLabel="Book Free Survey"
        secondaryHref="/subsidy"
        secondaryLabel="Learn About Subsidy"
        className="bg-background"
      />
    </div>
  );
}
