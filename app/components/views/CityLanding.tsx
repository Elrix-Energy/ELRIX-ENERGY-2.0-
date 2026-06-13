"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Sun, ShieldCheck, IndianRupee, Wrench, Phone, ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import HeroBackground from "../common/HeroBackground";
import WhySectionContent from "../city/WhySectionContent";
import { HeroCta, TrustStrip } from "../sections";
import { Card } from "../ui";
import type { CityPageData } from "@/app/lib/cityData";
import { getOtherCities } from "@/app/lib/cityData";
import { CONTACT, WHATSAPP } from "@/app/lib/siteConfig";
import styles from "./CityLanding.module.css";

export type { UniquePoint, CityService, CityFaq } from "@/app/lib/cityData";

const iconMap: Record<string, React.ElementType> = {
  Sun,
  ShieldCheck,
  IndianRupee,
  Wrench,
  MapPin,
  ArrowRight,
};

interface CityLandingProps {
  data: CityPageData;
}

const CityLanding = ({ data }: CityLandingProps) => {
  const { city, state, tagline, intro, whySection, uniquePoints, services, faqs } = data;
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const otherCities = getOtherCities(data.slug);

  return (
    <div className={styles.page}>
      <section className={styles.cityHero}>
        <HeroBackground overlay="city" objectPosition="center center" />
        <div className={`container ${styles.cityHeroContent}`}>
          <Reveal>
            <div className={styles.cityHeroBadge}>
              <MapPin size={16} aria-hidden="true" />
              {city}, {state}
            </div>
            <h1>
              Solar Company in {city}
              <br />
              <span className={styles.cityHeroTagline}>{tagline}</span>
            </h1>
            <p className={styles.cityHeroIntro}>{intro}</p>
            <HeroCta
              primaryHref="/contact"
              primaryLabel={`Get Free Quote in ${city}`}
              whatsappHref={WHATSAPP.url(
                `Hi ELRIX ENERGY, I'm interested in solar installation in ${city}.`
              )}
              whatsappLabel="Chat on WhatsApp"
              secondaryHref={`tel:${CONTACT.phone}`}
              secondaryLabel={`Call ${CONTACT.phoneDisplay}`}
              analyticsLocation={`city_${data.slug}`}
            />
          </Reveal>
        </div>
      </section>

      <TrustStrip />

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">
              Why ELRIX ENERGY is {city}&apos;s Most Trusted Solar Company
            </h2>
            <WhySectionContent
              content={whySection}
              className={`${styles.cityWhySection} ${styles.cityWhySectionCentered}`}
            />
          </Reveal>
          <div className={styles.valueProps}>
            {uniquePoints.map((point, index) => {
              const IconComp = iconMap[point.iconName] || Sun;
              return (
                <Reveal delay={index * 150} key={point.title}>
                  <Card className="prop-card" variant="elevated">
                    <IconComp size={40} className="prop-icon" aria-hidden="true" />
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Our Solar Services in {city}</h2>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal delay={index * 150} key={service.title}>
                <Card className="service-card glass" variant="glass">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href={service.link} className={styles.cityServiceLink}>
                    Learn More <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className={`${styles.citySubsidyCard} glass`}>
              <h2>Get Up to ₹78,000 Government Subsidy in {city}</h2>
              <p>
                As an MNRE-certified and APSPDCL-empanelled vendor, ELRIX ENERGY handles 100% of
                your PM Surya Ghar subsidy paperwork — from portal registration to the Direct
                Benefit Transfer arriving in your bank account.
              </p>
              <div className={styles.citySubsidyCardActions}>
                <Link href="/subsidy" className="btn btn-primary">
                  Learn About the Subsidy
                </Link>
                <Link href="/subsidy#emi-calculator" className="btn btn-outline">
                  Calculate EMI
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Start My Application
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Solar Across Andhra Pradesh</h2>
            <p className={`${styles.cityInternalLinksIntro} text-center`}>
              Headquartered in Nellore, we serve {city} and neighbouring districts with the same
              Tier-1 EPC quality. Explore solar in our other service areas or view all services.
            </p>
            <div className={styles.cityInternalLinksGrid}>
              {otherCities.map((other) => (
                <Link key={other.slug} href={other.path} className={styles.cityInternalLinksCard}>
                  <MapPin size={18} aria-hidden="true" />
                  <span>Solar in {other.city}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ))}
              <Link href="/services" className={styles.cityInternalLinksCard}>
                <span>All Solar Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.cityInternalLinksCard}>
                <span>Free Site Survey</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Solar FAQs for {city} Homeowners</h2>
            <div className={styles.cityFaqList}>
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className={styles.cityFaqItem}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openFaq === index}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenFaq(openFaq === index ? null : index);
                    }
                  }}
                >
                  <div className={styles.cityFaqItemHeader}>
                    <h3>{faq.q}</h3>
                    <span className={styles.cityFaqItemToggle} aria-hidden="true">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className={styles.cityFaqItemAnswer}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.cityFinalCta}`}>
        <div className="container text-center">
          <Reveal>
            <h2>Ready for Solar in {city}?</h2>
            <p>
              Get a free site survey and detailed quote from our {city} engineers within 24 hours.
            </p>
            <div className={styles.cityFinalCtaActions}>
              <Link href="/contact" className="btn btn-hero-primary">
                Get Free Quote
              </Link>
              <a href={`tel:${CONTACT.phone}`} className="btn btn-hero-outline">
                <Phone size={18} aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CityLanding;
