"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FileText, Settings, Wallet, CreditCard, IndianRupee, ShieldCheck, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from '../common/Reveal';
import { FinalCta, PageHeader } from '../sections';
import { Card } from '../ui';
import { subsidyFaqs } from '@/app/data/subsidyFaqs';
import { PM_SURYA_GHAR_SLABS } from '@/app/data/pricingData';

const EmiCalculator = dynamic(() => import('../sections/EmiCalculator'), {
  loading: () => <div className="emi-calculator-skeleton" aria-hidden="true" />,
});

type YesNo = 'yes' | 'no';

const Subsidy = () => {
  // Eligibility Checker State
  const [q1, setQ1] = useState<YesNo | null>(null);
  const [q2, setQ2] = useState<YesNo | null>(null);
  const [q3, setQ3] = useState<YesNo | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="subsidy-page">
      {/* Hero */}
      <PageHeader
        title="PM Surya Ghar: Muft Bijli Yojana"
        subtitle="Government Subsidy up to ₹78,000 + Flexible EMI Financing in Andhra Pradesh"
        className="subsidy-hero"
      />

      {/* What is the Subsidy */}
      <section className="section bg-background">
        <div className="container">
          <Reveal>
            <div className="info-ribbon glass text-center mb-4">
              <h2 className="mb-1 text-primary-dark">What is the Subsidy?</h2>
              <p>A flagship Central Government scheme providing <strong>Direct Benefit Transfers (DBT)</strong> straight to your bank account to cover the cost of your rooftop solar installation, making clean energy highly affordable.</p>
            </div>
          </Reveal>

          {/* Subsidy Slabs */}
          <Reveal>
            <h2 className="text-center mb-3">Clear-Cut Subsidy Structure</h2>
          </Reveal>
          <div className="slab-grid mb-4">
            {PM_SURYA_GHAR_SLABS.map((slab, index) => (
              <Reveal delay={index * 150} key={slab.id}>
                <div
                  className={`slab-card line-bottom ${slab.highlighted ? "highlighted-slab" : ""}`}
                >
                  {slab.highlighted ? <div className="slab-badge">MAXIMUM CAP</div> : null}
                  <div className={`slab-capacity ${slab.highlighted ? "text-white" : ""}`}>
                    {slab.capacityLabel}
                  </div>
                  <div
                    className={`slab-amount ${slab.highlighted ? "text-white" : "text-secondary"}`}
                  >
                    {slab.amountDisplay}
                  </div>
                  <p
                    className={`slab-desc mt-1 ${slab.highlighted ? "text-white" : "text-text-light"}`}
                  >
                    {slab.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="section bg-light" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <Reveal>
            <div className="eligibility-checker glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem', borderRadius: '16px', background: 'white' }}>
              <h2 className="text-center mb-1">Check Your Eligibility</h2>
              <p className="text-center mb-3 text-text-light">Answer 3 simple questions to see if you qualify for the PM Surya Ghar subsidy.</p>
              
              <div className="eligibility-questions">
                <div className="eq-item" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>1. Do you own the roof where panels will be installed?</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className={`btn ${q1 === 'yes' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setQ1('yes')} style={{ padding: '0.5rem 1.5rem' }}>Yes</button>
                    <button className={`btn ${q1 === 'no' ? 'btn-danger' : 'btn-outline'}`} onClick={() => setQ1('no')} style={{ padding: '0.5rem 1.5rem', borderColor: q1 === 'no' ? 'var(--danger)' : '', background: q1 === 'no' ? 'var(--danger)' : '', color: q1 === 'no' ? 'white' : '' }}>No</button>
                  </div>
                </div>
                
                <div className="eq-item" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>2. Is your electricity connection for residential use?</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className={`btn ${q2 === 'yes' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setQ2('yes')} style={{ padding: '0.5rem 1.5rem' }}>Yes</button>
                    <button className={`btn ${q2 === 'no' ? 'btn-danger' : 'btn-outline'}`} onClick={() => setQ2('no')} style={{ padding: '0.5rem 1.5rem', borderColor: q2 === 'no' ? 'var(--danger)' : '', background: q2 === 'no' ? 'var(--danger)' : '', color: q2 === 'no' ? 'white' : '' }}>No</button>
                  </div>
                </div>
                
                <div className="eq-item" style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>3. Do you have shadow-free space on your roof?</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className={`btn ${q3 === 'yes' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setQ3('yes')} style={{ padding: '0.5rem 1.5rem' }}>Yes</button>
                    <button className={`btn ${q3 === 'no' ? 'btn-danger' : 'btn-outline'}`} onClick={() => setQ3('no')} style={{ padding: '0.5rem 1.5rem', borderColor: q3 === 'no' ? 'var(--danger)' : '', background: q3 === 'no' ? 'var(--danger)' : '', color: q3 === 'no' ? 'white' : '' }}>No</button>
                  </div>
                </div>
              </div>

              {q1 && q2 && q3 && (
                <div className="eligibility-result" style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '8px', background: (q1==='yes' && q2==='yes' && q3==='yes') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: `1px solid ${(q1==='yes' && q2==='yes' && q3==='yes') ? '#10b981' : '#ef4444'}` }}>
                  {(q1==='yes' && q2==='yes' && q3==='yes') ? (
                    <div className="text-center">
                      <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>✅ You are Eligible!</h3>
                      <p style={{ marginBottom: '1rem' }}>You meet the criteria for the PM Surya Ghar subsidy up to ₹78,000.</p>
                      <Link href="/contact" className="btn btn-primary">Start Your Application</Link>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h3 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>Commercial Options Available</h3>
                      <p style={{ marginBottom: '1rem' }}>You might not qualify for the residential subsidy, but commercial solar offers 40% accelerated depreciation benefits.</p>
                      <Link href="/contact" className="btn btn-hero-outline" style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark)' }}>Consult an Expert</Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>



      {/* EMI Calculator */}
      <section className="section bg-background" id="emi-calculator">
        <div className="container">
          <Reveal delay={150}>
            <EmiCalculator />
          </Reveal>
        </div>
      </section>

      {/* How ELRIX Helps */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className="hassle-free-box mb-4">
              <div className="hassle-grid">
                <div className="hassle-text">
                  <h2 className="mb-2">How <span className="text-secondary">ELRIX ENERGY</span> Helps</h2>
                  <p className="mb-2" style={{fontSize: '1.1rem', color: 'var(--text-light)'}}>We manage the <strong>entire</strong> bureaucratic process so you do not have to lift a finger. From the initial application to the money arriving in your bank, we handle it all.</p>
                  <div className="urgency-alert mt-2">
                    <div>
                      <strong className="urgency-title">APPLY NOW</strong><br/>
                      Do not miss this opportunity. Subsidy allocations are available only while funds last, so applying early gives you a better chance of securing your benefit.
                    </div>
                  </div>
                </div>
                <div className="hassle-list">
                  <div className="h-item">
                    <FileText className="text-primary mr-1" size={32} style={{flexShrink: 0}} />
                    <div>
                      <h3>1. Portal Registration</h3>
                      <p>We register and upload all your required documents directly to the National Portal.</p>
                    </div>
                  </div>
                  <div className="h-item">
                    <Settings className="text-primary mr-1" size={32} style={{flexShrink: 0}} />
                    <div>
                      <h3>2. APSPDCL Approvals</h3>
                      <p>We coordinate directly with local DISCOMs for feasibility and net-metering approvals.</p>
                    </div>
                  </div>
                  <div className="h-item">
                    <Wallet className="text-primary mr-1" size={32} style={{flexShrink: 0}} />
                    <div>
                      <h3>3. Claim Processing</h3>
                      <p>We submit the final commissioning report to trigger your direct bank transfer instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Finance Solar */}
      <section className="section bg-background">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">Why Finance Your Solar System?</h2>
          </Reveal>
          <div className="financing-benefits">
            <Reveal delay={0}>
              <Card className="fin-benefit-card" variant="elevated">
                <IndianRupee size={36} style={{ color: 'var(--primary)' }} />
                <h3>Zero Down Payment</h3>
                <p>Start your solar journey with no upfront investment through our banking partners.</p>
              </Card>
            </Reveal>
            <Reveal delay={150}>
              <Card className="fin-benefit-card" variant="elevated">
                <CreditCard size={36} style={{ color: 'var(--primary)' }} />
                <h3>EMI &lt; Electricity Bill</h3>
                <p>Your monthly EMI is typically lower than what you currently pay for electricity.</p>
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card className="fin-benefit-card" variant="elevated">
                <ShieldCheck size={36} style={{ color: 'var(--primary)' }} />
                <h3>Subsidy + Loan Combined</h3>
                <p>Get PM Surya Ghar subsidy AND finance the remaining amount — maximum savings.</p>
              </Card>
            </Reveal>
            <Reveal delay={450}>
              <Card className="fin-benefit-card" variant="elevated">
                <Clock size={36} style={{ color: 'var(--primary)' }} />
                <h3>ROI in 3-5 Years</h3>
                <p>Even with EMI, your system pays for itself within 3-5 years. Then it is pure savings for 20+ years.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Subsidy FAQs */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <h2 className="text-center mb-3">PM Surya Ghar FAQs</h2>
            <div className="faq-container">
              {subsidyFaqs.map((faq, index) => (
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

      {/* Final CTA */}
      <FinalCta
        title="Ready to Secure Your Solar Subsidy?"
        description="Start your PM Surya Ghar application with a free ELRIX ENERGY site survey."
        primaryHref="/contact"
        primaryLabel="Start My Application Today"
      />
    </div>
  );
};
export default Subsidy;

