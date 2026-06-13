"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Wrench, Sun, Star, IndianRupee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "../common/Reveal";
import { PUBLIC_ASSETS } from "@/app/lib/siteConfig";

interface SmartCard {
  icon: LucideIcon;
  title: string;
  desc: React.ReactNode;
}

const smartCards: SmartCard[] = [
  {
    icon: Wrench,
    title: "7-Day Installation",
    desc: (
      <>
        Our rapid deployment teams ensure your system is up and running in{" "}
        <strong>record time</strong> without cutting corners.
      </>
    ),
  },
  {
    icon: Sun,
    title: "Tier-1 ALMM Tech",
    desc: (
      <>
        We exclusively use <strong>Domestic Content Requirement (DCR)</strong> panels that
        qualify for full government subsidies.
      </>
    ),
  },
  {
    icon: Star,
    title: "Expert Engineering",
    desc: (
      <>
        Our structures are <strong>cyclone-rated</strong> and designed specifically for the
        unique coastal climate of Andhra Pradesh.
      </>
    ),
  },
  {
    icon: IndianRupee,
    title: "Total Transparency",
    desc: (
      <>
        From <strong>detailed BOMs</strong> to live subsidy tracking, you know exactly where
        every rupee of your investment goes.
      </>
    ),
  },
];

const credentials = ["MNRE Certified", "APSPDCL Empanelled", "ISO & IEC Compliant", "MSME Registered"];

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1>About ELRIX ENERGY</h1>
          <p>16 Years of Local Trust. Now Powering Andhra with Solar.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className="md-message-grid">
              <div className="md-photo-container">
                <Image
                  src={PUBLIC_ASSETS.founderPhoto}
                  alt="Haranath Vommena - Managing Director"
                  className="md-photo"
                  width={480}
                  height={560}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="md-message-content">
                <h2>
                  Message from our <span className="text-primary">Managing Director</span>
                </h2>

                <div className="about-metrics-bar">
                  <div className="metric-badge">
                    <Star size={16} aria-hidden="true" />
                    <span>16+ Years Experience</span>
                  </div>
                  <div className="metric-badge">
                    <ShieldCheck size={16} aria-hidden="true" />
                    <span>4 Key Districts Served</span>
                  </div>
                  <div className="metric-badge">
                    <ShieldCheck size={16} aria-hidden="true" />
                    <span>MNRE Certified</span>
                  </div>
                </div>

                <p>
                  For over <strong>16 years</strong>, I have served the people of Nellore through
                  Hari Car Decors with one core principle: <strong>Absolute Trust</strong>.
                </p>

                <p>
                  When I looked at the solar industry in Andhra Pradesh, I saw a gap. People wanted
                  clean energy but were worried about{" "}
                  <strong>reliability, maintenance, and hidden costs</strong>.
                </p>

                <p>
                  With <strong>ELRIX ENERGY</strong>, we carry forward our legacy of quality. We
                  are scaling from our Nellore headquarters to serve Tirupati, Kadapa, and Ongole
                  with a simple promise: <strong>Solar that outlasts its ROI.</strong>
                </p>

                <div className="trust-bullets">
                  <div className="about-trust-item">
                    <ShieldCheck className="trust-icon" size={20} aria-hidden="true" />
                    <span>
                      <strong>Tier-1 Components:</strong> Zero compromise on efficiency.
                    </span>
                  </div>
                  <div className="about-trust-item">
                    <ShieldCheck className="trust-icon" size={20} aria-hidden="true" />
                    <span>
                      <strong>Local Accountability:</strong> We are your neighbors, always reachable.
                    </span>
                  </div>
                  <div className="about-trust-item">
                    <ShieldCheck className="trust-icon" size={20} aria-hidden="true" />
                    <span>
                      <strong>Subsidy Management:</strong> We handle 100% of the portal paperwork.
                    </span>
                  </div>
                </div>

                <p className="signature">
                  <strong>- Haranath Vommena</strong>
                  <br />
                  <span className="signature-role">Managing Director</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="why-started-box">
              <h3 className="mb-2 text-center text-primary-dark">Why we started ELRIX ENERGY?</h3>
              <p className="why-started-box__text text-center">
                &ldquo;I saw homeowners installing solar only to have it fail during the first heavy
                winds, or businesses struggling with confusing subsidy portals. I realized that my
                16 years of engineering experience in car decors and customer service could solve
                this.
                <br />
                <br />
                <strong>ELRIX was born to bring &lsquo;Nellore Trust&rsquo; to the Solar revolution.</strong>{" "}
                We don&apos;t just sell panels; we build permanent power plants for your
                family.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Why Smart Consumers choose ELRIX ENERGY</h2>
          </Reveal>
          <div className="smart-choice-grid">
            {smartCards.map((card, index) => (
              <Reveal delay={index * 150} key={card.title}>
                <div className="smart-card text-center">
                  <card.icon size={40} className="smart-icon" aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="certifications text-center">
            <Reveal>
              <h2 className="mb-3">Our Credentials</h2>
            </Reveal>
            <div className="cert-grid">
              {credentials.map((cred, index) => (
                <Reveal delay={index * 100} key={cred}>
                  <div className="cert-card">
                    <h3>{cred}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
