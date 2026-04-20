import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, ShieldCheck, Wrench, IndianRupee, MapPin, ArrowRight, Calculator, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from '../components/common/Reveal';
import './Home.css';

const Home = () => {
  const [bill, setBill] = useState('');
  const [calcResult, setCalcResult] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateSolar = (e) => {
    e.preventDefault();
    const numBill = parseFloat(bill);
    if (!numBill || numBill <= 0) return;

    // Estimates: 1kW reduces approx Rs 1100 off bill
    const requiredKw = (numBill / 1100).toFixed(1);
    const savings = (numBill * 12 * 25).toLocaleString('en-IN');

    // Environmental impact estimates
    const co2Offset = (requiredKw * 31).toFixed(1);
    const trees = Math.round(co2Offset * 40).toLocaleString('en-IN');

    setCalcResult({
      systemSize: requiredKw,
      lifetimeSavings: savings,
      co2: co2Offset,
      treesPlanted: trees
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <Reveal delay={0}>
            <h1>Eliminate Your Power Bill. <br /><span className="text-primary">Demand Premium Solar.</span></h1>
          </Reveal>
          <Reveal delay={150}>
            <p>South India's most trusted solar EPC. We engineer permanent, cyclone-proof solar solutions for residential and commercial roofs in Nellore, Tirupati, Kadapa, and Ongole—with full PM Surya Ghar subsidy integration.</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary">Get Free Solar Quote</Link>
              <a href="tel:+919640484677" className="btn btn-secondary">Call Now: +91 9640484677</a>
            </div>
          </Reveal>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Value Props */}
      <section className="section bg-white relative-z">
        <div className="container">
          <div className="value-props">
            <Reveal delay={0}>
              <div className="prop-card">
                <Sun size={40} className="prop-icon" />
                <h3>Tier-1 ALMM Tech</h3>
                <p>Maximum power, zero compromise. We exclusively install Tier-1 components guaranteeing decadal efficiency.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="prop-card">
                <IndianRupee size={40} className="prop-icon" />
                <h3>Free Roof Blueprint</h3>
                <p>Stop guessing. We provide a 100% free, mathematically precise roof analysis across our four service districts.</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="prop-card">
                <ShieldCheck size={40} className="prop-icon" />
                <h3>Instant Gov Subsidy</h3>
                <p>We aggressively handle all portal paperwork to secure your massive PM Surya Ghar subsidy and effortless EMI.</p>
              </div>
            </Reveal>
            <Reveal delay={450}>
              <div className="prop-card">
                <Wrench size={40} className="prop-icon" />
                <h3>Cyclone Proofing</h3>
                <p>Built to survive. Our heavy-duty HDGI mounting structures easily withstand 180 km/h coastal wind speeds.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="client-logos-section">
        <h3>Trusted By Quality-Driven Businesses in Andhra Pradesh</h3>
        <div className="logo-marquee-container">
          <div className="logo-track">
            <div className="client-logo-box">COMING SOON</div>
            <div className="client-logo-box">PARTNER WITH US</div>
            <div className="client-logo-box">COMING SOON</div>
            <div className="client-logo-box">YOUR BRAND HERE</div>
            <div className="client-logo-box">COMING SOON</div>
          </div>
          {/* Exactly duplicated track for seamless infinite scroll */}
          <div className="logo-track" aria-hidden="true">
            <div className="client-logo-box">COMING SOON</div>
            <div className="client-logo-box">PARTNER WITH US</div>
            <div className="client-logo-box">COMING SOON</div>
            <div className="client-logo-box">YOUR BRAND HERE</div>
            <div className="client-logo-box">COMING SOON</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Our Core Services</h2>
          </Reveal>
          <div className="services-grid">
            <Reveal delay={0}>
              <div className="service-card glass">
                <h3>Residential Solar</h3>
                <p>Power your home with clean energy. Slash your bills and increase property value.</p>
                <Link to="/services/residential" className="text-secondary font-bold">Learn More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="service-card glass">
                <h3>Commercial Solar</h3>
                <p>Turn your roof into an asset. Maximize ROI with accelerated depreciation.</p>
                <Link to="/services/commercial" className="text-secondary font-bold">Learn More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="service-card glass">
                <h3>Industrial Solar</h3>
                <p>Large scale MW plants to handle heavy operational loads and compliance.</p>
                <Link to="/services/industrial" className="text-secondary font-bold">Learn More &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solar Calculator Section */}
      <section className="section bg-primary-light" id="calculator" style={{ scrollMarginTop: '80px' }}>
        <div className="container">
          <Reveal>
            <div className="calculator-wrapper glass">
              <div className="calculator-content">
                <h2><Calculator style={{ display: 'inline-block', marginRight: '10px', color: 'var(--primary-dark)' }} /> Solar Savings Calculator</h2>
                <p className="mb-2">Find out how much you can save and the approximate system size you need based on your monthly electricity bill.</p>
  
                <form onSubmit={calculateSolar} className="calc-form">
                  <div className="calc-input-group">
                    <label htmlFor="bill">Average Monthly Bill (₹)</label>
                    <input
                      type="number"
                      id="bill"
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      placeholder="e.g. 3500"
                      required
                      min="100"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Calculate Savings</button>
                </form>
  
                {calcResult && (
                  <div className="calc-result">
                    <div className="result-box">
                      <h4>Recommended Size</h4>
                      <p className="result-value text-primary font-bold" style={{ fontSize: '1.5rem' }}>{calcResult.systemSize} kW</p>
                    </div>
                    <div className="result-box">
                      <h4>Est. 25-Year Savings</h4>
                      <p className="result-value text-secondary font-bold" style={{ fontSize: '1.5rem' }}>₹ {calcResult.lifetimeSavings}</p>
                    </div>
                    <div className="result-box">
                      <h4>Trees Planted Eq.</h4>
                      <p className="result-value font-bold" style={{ color: '#10b981', fontSize: '1.5rem' }}>{calcResult.treesPlanted}</p>
                    </div>
                    <div className="result-box">
                      <h4>CO₂ Target (25 Yrs)</h4>
                      <p className="result-value font-bold" style={{ color: '#10b981', fontSize: '1.5rem' }}>{calcResult.co2} Tons</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="text-center">Hear From Our Customers</h2>
            <p className="text-center mb-3" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)' }}>Don't just take our word for it. See what local business owners and families have to say about their switch to ELRIX ENERGY.</p>
          </Reveal>

          <div className="testimonials-grid">
            <Reveal delay={0}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                </div>
                <p className="testimonial-quote">"We are committed to delivering the highest quality solar solutions across Andhra Pradesh. Your upcoming 5-star review will be featured right here."</p>
                <div className="testimonial-author">
                  <h4>Future Client</h4>
                  <p>Commercial Partner</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                </div>
                <p className="testimonial-quote">"Let us handle your entire solar transition and PM Surya Ghar subsidy flawlessly. Form a partnership with ELRIX and share your success story with us."</p>
                <div className="testimonial-author">
                  <h4>Future Customer</h4>
                  <p>Residential Homeowner</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                </div>
                <p className="testimonial-quote">"Heavy-duty engineering means absolute peace of mind for decades. We look forward to powering your facility and showcasing your industrial upgrade here."</p>
                <div className="testimonial-author">
                  <h4>Future Partner</h4>
                  <p>Industrial Facility</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white relative-z">
        <div className="container">
          <Reveal>
            <div className="flex-between mb-3">
              <h2 style={{ margin: 0 }}>Frequently Asked Questions</h2>
            </div>
            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                q: "Does solar work in the rainy season?",
                a: <>Yes! While peak efficiency occurs on clear days, solar panels still generate electricity during the monsoon. Thanks to Net Metering, the massive excess power you generate during the summer essentially "banks" credits to offset lower generation during cloudy months.</>
              },
              {
                q: "Will my electricity bill be absolutely zero?",
                a: <>Practically, yes. All of your actual energy usage charges can be completely offset to zero. However, you will still receive a very minimal monthly bill from your DISCOM specifically to cover basic fixed grid-connection charges.</>
              },
              {
                q: "Do you handle solar loan processing and financing?",
                a: <>Absolutely. We have direct partnerships with leading banks to provide seamless EMI support. Our team at <strong>ELRIX ENERGY</strong> guides you through the entire documentation process, making the financial transition to solar effortless.</>
              },
              {
                q: "Is ELRIX ENERGY an officially empanelled vendor?",
                a: <>Yes. <strong>ELRIX ENERGY</strong> is an officially registered and empanelled vendor. This guarantees that all our installations meet strict government standards and ensures you are fully eligible for the PM Surya Ghar subsidy scheme.</>
              },
              {
                q: "What is the difference between DCR and Non-DCR panels?",
                a: <>DCR (Domestic Content Requirement) panels are manufactured entirely in India out of Indian cells, which is a strictly mandatory requirement to claim residential government subsidies. Non-DCR panels often utilize imported components and are used aggressively in commercial projects where subsidies do not apply.</>
              },
              {
                q: "What is the expected Return on Investment (ROI)?",
                a: <>Solar is one of the highest-yield low-risk investments available today. Residential setups typically see a full ROI within <strong>36 to 60 months</strong>. Commercial and industrial installations often achieve ROI in just <strong>24 to 48 months</strong> largely due to accelerated depreciation tax benefits.</>
              },
              {
                q: "Can commercial business owners get the government subsidy?",
                a: <>No, centralized government subsidies like PM Surya Ghar are exclusively for residential homeowners. Commercial clients, however, benefit heavily from aggressive tax exemptions under Section 32 of the Income Tax Act (Accelerated Depreciation).</>
              },
              {
                q: "What is Net Metering and how does it work?",
                a: <>Net metering is a grid-connected billing mechanism. If your panels produce more power than your property uses during the day, the excess electricity is exported back to the DISCOM, and you are financially credited for it on your next billing cycle!</>
              },
              {
                q: "How much maintenance do solar panels actually require?",
                a: <>Very minimal! Because Tier-1 solar panels have absolutely no moving parts, the only regular residential maintenance required is occasionally washing the surface with clean water to remove accumulated dust. <strong>ELRIX</strong> also offers dedicated automated maintenance packages for commercial sites.</>
              },
              {
                q: "Do on-grid solar systems work during a grid power outage?",
                a: <>Standard grid-tied (On-Grid) systems without batteries will automatically shut down during a blackout. This is a mandatory safety mechanism to protect DISCOM linesmen repairing the grid. If you require backup power during outages, <strong>ELRIX</strong> offers Hybrid systems directly integrated with battery storage.</>
              }
            ].slice(0, showAllFaqs ? 10 : 5).map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  padding: '1.5rem 0',
                  cursor: 'pointer'
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary-dark)', margin: 0 }}>{faq.q}</h4>
                  {openFaq === index ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-light" />}
                </div>
                {openFaq === index && (
                  <p style={{ marginTop: '1rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button 
                onClick={() => setShowAllFaqs(!showAllFaqs)} 
                className="btn btn-outline"
                style={{ padding: '0.6rem 2.5rem' }}
              >
                {showAllFaqs ? 'View Less FAQs' : 'View All FAQs'}
              </button>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="section bg-background">
        <div className="container">
          <div className="flex-between mb-3">
            <h2 style={{ margin: 0 }}>Recent Resources</h2>
            <Link to="/blog" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>View All Blogs</Link>
          </div>
          <div className="blogs-preview-grid">
            <Reveal delay={0}>
              <div className="blog-card bg-white">
                <p className="blog-date">Oct 20, 2023</p>
                <h3>Top 5 Reasons to go Solar in Nellore</h3>
                <p>With 300 sunny days, Nellore is the perfect city to slash your electricity bills using Solar power and PM Surya Ghar subsidy.</p>
                <Link to="/blog" className="text-primary font-bold mt-1 inline-block">Read More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="blog-card bg-white">
                <p className="blog-date">Dec 15, 2023</p>
                <h3>Is Solar a Good Investment for Small Industries?</h3>
                <p>Accelerated depreciation and lower operational costs make solar a must-have for MSMEs.</p>
                <Link to="/blog" className="text-primary font-bold mt-1 inline-block">Read More &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
