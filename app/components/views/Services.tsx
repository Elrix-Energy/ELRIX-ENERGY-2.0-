"use client";
import React from "react";
import Link from "next/link";
import { CheckSquare, ArrowRight } from "lucide-react";
import ContentImage from "../common/ContentImage";
import { PUBLIC_ASSETS } from "@/app/lib/siteConfig";


const ServicesList = () => (
  <div className="services-page">
    <header className="page-header">
      <div className="container">
        <h1>Our Solar Services</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>Comprehensive solar energy solutions tailored for every scale.</p>
      </div>
    </header>
    
    <section className="section bg-white section-no-bottom-padding">
      <div className="container">
        
        {/* Residential Row: Image Left, Text Right */}
        <div className="service-split-row" id="residential" style={{ scrollMarginTop: '80px' }}>
          <div className="split-image-container">
             <ContentImage src={PUBLIC_ASSETS.services.residential} alt="Residential Solar Installation" className="split-image" />
          </div>
          <div className="split-content">
            <h2>Residential Solar</h2>
            <p>Power your home with premium rooftop solar panels. Lower your electricity bills, increase property value, and transition to clean energy with our zero-hassle installation process.</p>
            <ul className="service-features text-left">
              <li><CheckSquare size={20} className="mr-1 text-success" /> 1kW to 10kW Home Systems</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Direct PM Surya Ghar Subsidy Support</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Seamless Net Metering Setup</li>
            </ul>
            <div className="mt-2">
              <Link href="/contact" className="btn btn-primary" style={{display: 'inline-flex'}}>Get Free Quote <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
            </div>
          </div>
        </div>

        {/* Commercial Row: Text Left, Image Right (Reverse) */}
        <div className="service-split-row reverse" id="commercial" style={{ scrollMarginTop: '80px' }}>
          <div className="split-image-container">
             <ContentImage src={PUBLIC_ASSETS.services.commercial} alt="Commercial Solar Array" className="split-image" />
          </div>
          <div className="split-content">
            <h2>Commercial Solar</h2>
            <p>Reduce operational costs and achieve energy independence. Ideal for offices, hospitals, and commercial complexes looking to leverage clean power and accelerated depreciation tax benefits.</p>
            <ul className="service-features text-left">
              <li><CheckSquare size={20} className="mr-1 text-success" /> 10kW to 100kW+ Corporate Systems</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Accelerated Depreciation Tax Benefits</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Customized Heavy Load Analysis</li>
            </ul>
            <div className="mt-2">
              <Link href="/contact" className="btn btn-primary" style={{display: 'inline-flex'}}>Request Audit <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
            </div>
          </div>
        </div>

        {/* Industrial Row: Image Left, Text Right */}
        <div className="service-split-row" id="industrial" style={{ scrollMarginTop: '80px' }}>
          <div className="split-image-container">
             <ContentImage src={PUBLIC_ASSETS.services.industrial} alt="Industrial Solar Farm" className="split-image" />
          </div>
          <div className="split-content">
            <h2>Industrial Solar</h2>
            <p>High-yield solar installations built for massive power loads. We design and construct robust, utility-scale plants and large rooftop arrays for manufacturing facilities and industrial campuses.</p>
            <ul className="service-features text-left">
              <li><CheckSquare size={20} className="mr-1 text-success" /> Megawatt (MW) Scale Projects</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Advanced Grid Synchronization</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> 100% Uninterrupted Operation Focus</li>
            </ul>
            <div className="mt-2">
              <Link href="/contact" className="btn btn-primary" style={{display: 'inline-flex'}}>Consult Expert <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
            </div>
          </div>
        </div>

        {/* Maintenance Row: Text Left, Image Right (Reverse) */}
        <div className="service-split-row reverse" id="maintenance" style={{ scrollMarginTop: '80px' }}>
          <div className="split-image-container">
             <ContentImage src={PUBLIC_ASSETS.services.maintenance} alt="Solar Panel Maintenance" className="split-image" />
          </div>
          <div className="split-content">
            <h2>Maintenance & Service</h2>
            <p>Ensure peak performance year-round with our comprehensive Operations & Maintenance plans. From routine checkups to 24/7 digital monitoring, we protect your solar investment.</p>
            <ul className="service-features text-left">
              <li><CheckSquare size={20} className="mr-1 text-success" /> Free Professional Site Visit</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> Automated Panel Cleaning & Checkups</li>
              <li><CheckSquare size={20} className="mr-1 text-success" /> 24/7 Digital Performance Monitoring</li>
            </ul>
            <div className="mt-2">
              <Link href="/contact" className="btn btn-secondary" style={{display: 'inline-flex'}}>Book Service <ArrowRight size={18} style={{marginLeft: '8px'}}/></Link>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Guarantees Section */}
    <section className="section bg-light" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container text-center">
        <h2 style={{ marginBottom: '1rem' }}>Our Iron-Clad Guarantees</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-light)' }}>
          When you invest in premium solar with ELRIX ENERGY, you are protected by the strongest warranties in the industry.
        </p>
        <div className="guarantees-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="guarantee-card glass" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', background: 'white', border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1, fontWeight: 800 }}>25<span style={{ fontSize: '1.5rem' }}>YR</span></p>
            <h3 style={{ marginBottom: '0.5rem' }}>Linear Performance Warranty</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Our tier-1 panels are guaranteed to produce high yields for decades, surviving extreme coastal weather.</p>
          </div>
          <div className="guarantee-card glass" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', background: 'white', border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1, fontWeight: 800 }}>10<span style={{ fontSize: '1.5rem' }}>YR</span></p>
            <h3 style={{ marginBottom: '0.5rem' }}>Product Warranty on Inverters</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>We only use premium inverters that form the reliable brain of your solar system.</p>
          </div>
          <div className="guarantee-card glass" style={{ padding: '2.5rem', borderRadius: '16px', textAlign: 'center', background: 'white', border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1, fontWeight: 800 }}>5<span style={{ fontSize: '1.5rem' }}>YR</span></p>
            <h3 style={{ marginBottom: '0.5rem' }}>Comprehensive Workmanship</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Zero-leak roof guarantees and flawless electrical wiring executed by our elite engineers.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Services = () => {
  return <ServicesList />;
};

export default Services;
