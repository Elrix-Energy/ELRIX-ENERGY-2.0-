"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Sun, ShieldCheck, Wrench, IndianRupee, ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "../common/Reveal";
import HeroBackground from "../common/HeroBackground";
import { HeroCta, SubsidyHook, TrustStrip } from "../sections";
import { Card } from "../ui";
import { homeFaqs } from "@/app/data/homeFaqs";
import { getLatestBlogArticles } from "@/app/lib/blogCityLinks";
import { estimateReadingTimeMinutes, formatReadingTime } from "@/app/lib/blogUtils";
import { CONTACT, WHATSAPP } from "@/app/lib/siteConfig";

const SolarCalculator = dynamic(() => import("../sections/SolarCalculator"), {
  loading: () => <div className="solar-calculator-skeleton" aria-hidden="true" />,
});

const TestimonialMarquee = dynamic(() => import("../sections/TestimonialMarquee"), {
  loading: () => <div className="testimonial-marquee-skeleton" aria-hidden="true" />,
});

const serviceCards = [
  {
    title: "Residential Solar",
    description: "Power your home with clean energy. Slash your bills and increase property value.",
    link: "/services/residential",
  },
  {
    title: "Commercial Solar",
    description: "Turn your roof into an asset. Maximize ROI with accelerated depreciation.",
    link: "/services/commercial",
  },
  {
    title: "Industrial Solar",
    description: "Large scale MW plants to handle heavy operational loads and compliance.",
    link: "/services/industrial",
  },
];

const blogPreviews = getLatestBlogArticles(3);

const heroHighlights = [
  { value: "₹78,000", label: "Max PM Surya Ghar subsidy" },
  { value: "300+", label: "Sunny days per year in AP" },
  { value: "25 yrs", label: "Panel performance warranty" },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="home">
      {/* 1. Hero — two-column on desktop */}
      <section className="hero">
        <HeroBackground priority overlay="home" />
        <div className="container hero-grid">
          <Reveal delay={0}>
            <div className="hero-copy">
              <div className="hero-auth-badge">
                <span className="badge-icon">🇮🇳</span> Authorized PM Surya Ghar Integrator
              </div>
              <h1>
                <span className="hero-word-dark">Eliminate</span>{" "}
                <span className="hero-word-light">Your Power Bill.</span>
                <br />
                <span className="hero-word-light">Demand</span>{" "}
                <span className="hero-word-dark">Premium Solar.</span>
              </h1>
              <p>
                South India&apos;s most trusted solar EPC. We engineer permanent, cyclone-proof
                solar solutions for residential and commercial roofs in Nellore, Tirupati, Kadapa,
                and Ongole—with full PM Surya Ghar subsidy integration.
              </p>
              <HeroCta
                primaryHref="/contact"
                primaryLabel="Get Free Quote"
                whatsappHref={WHATSAPP.url(WHATSAPP.defaultMessage)}
                whatsappLabel="Chat on WhatsApp"
                secondaryHref={`tel:${CONTACT.phone}`}
                secondaryLabel={`Call ${CONTACT.phoneDisplay}`}
                analyticsLocation="home_hero"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="hero-highlights" aria-label="Key solar benefits">
              {heroHighlights.map((item) => (
                <div key={item.label} className="hero-highlight-card">
                  <p className="hero-highlight-card__value">{item.value}</p>
                  <p className="hero-highlight-card__label">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Calculator */}
      <section className="section bg-primary-light home-calculator-section">
        <div className="container">
          <Reveal>
            <SolarCalculator />
          </Reveal>
        </div>
      </section>

      {/* 4. Value props */}
      <section className="section bg-white relative-z">
        <div className="container">
          <div className="value-props">
            <Reveal delay={0}>
              <Card className="prop-card" variant="elevated">
                <Sun size={40} className="prop-icon" />
                <h3>Tier-1 ALMM Tech</h3>
                <p>
                  Maximum power, zero compromise. We exclusively install Tier-1 components
                  guaranteeing decadal efficiency.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={150}>
              <Card className="prop-card" variant="elevated">
                <IndianRupee size={40} className="prop-icon" />
                <h3>Free Roof Blueprint</h3>
                <p>
                  Stop guessing. We provide a 100% free, mathematically precise roof analysis
                  across our four service districts.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="prop-card" variant="elevated">
                <ShieldCheck size={40} className="prop-icon" />
                <h3>Instant Gov Subsidy</h3>
                <p>
                  We aggressively handle all portal paperwork to secure your massive PM Surya Ghar
                  subsidy and effortless EMI.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={450}>
              <Card className="prop-card" variant="elevated">
                <Wrench size={40} className="prop-icon" />
                <h3>Cyclone Proofing</h3>
                <p>
                  Built to survive. Our heavy-duty HDGI mounting structures easily withstand 180
                  km/h coastal wind speeds.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Social proof — testimonial marquee */}
      <TestimonialMarquee />

      {/* 6. Services */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Our Core Services</h2>
          </Reveal>
          <div className="services-grid">
            {serviceCards.map((service, index) => (
              <Reveal delay={index * 150} key={service.title}>
                <div className="service-card glass">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="text-secondary font-bold">
                    Learn More &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Subsidy hook */}
      <SubsidyHook />

      {/* 8. FAQ */}
      <section className="section bg-white relative-z">
        <div className="container">
          <Reveal>
            <div className="flex-between mb-3">
              <h2 className="faq-section-heading">Frequently Asked Questions</h2>
            </div>
            <div className="faq-container">
              {homeFaqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openFaq === index}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                >
                  <div className="faq-item__header">
                    <h3>{faq.q}</h3>
                    {openFaq === index ? (
                      <ChevronUp size={20} className="text-primary" aria-hidden="true" />
                    ) : (
                      <ChevronDown size={20} className="text-light" aria-hidden="true" />
                    )}
                  </div>
                  <div className="faq-item__answer-wrap">
                    <p className="faq-item__answer">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Blog teaser */}
      <section className="section bg-background">
        <div className="container">
          <div className="flex-between mb-3">
            <h2 className="blog-section-heading">Recent Resources</h2>
            <Link href="/blog" className="btn btn-outline blog-view-all-btn">
              View All Blogs
            </Link>
          </div>
          <div className="blogs-preview-grid">
            {blogPreviews.map((post, index) => (
              <Reveal delay={index * 150} key={post.id}>
                <article className="home-blog-card bg-white">
                  <Link href={`/blog/${post.slug}`} className="home-blog-card__media">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={640}
                      height={360}
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="home-blog-card__image"
                    />
                  </Link>
                  <div className="home-blog-card__body">
                    <p className="blog-date">{post.date}</p>
                    <h3>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.summary}</p>
                    <p className="home-blog-card__meta">
                      {formatReadingTime(estimateReadingTimeMinutes(post.content))}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-primary font-bold mt-1 inline-block">
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
