"use client";
import { CreditCard, IndianRupee, ShieldCheck, Clock } from 'lucide-react';
import Reveal from '../common/Reveal';
import { EmiCalculator, FinalCta, PageHeader } from '../sections';
import { Card } from '../ui';

const Financing = () => {
  return (
    <div className="financing-page">
      <PageHeader
        title="EMI & Financing Support"
        subtitle="Making solar accessible for everyone with flexible payment options."
      />



      {/* EMI Calculator */}
      <section className="section bg-background">
        <div className="container">
          <div className="financing-section">
            <Reveal delay={150}>
              <EmiCalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Finance Solar */}
      <section className="section bg-white">
        <div className="container">
          <div className="financing-section">
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

            <Reveal>
              <FinalCta
                title="Want a Solar EMI Plan That Fits Your Bill?"
                description="Get a free financial consultation and understand your subsidy, loan amount, and expected monthly EMI."
                primaryHref="/contact"
                primaryLabel="Get Financial Consultation"
                className="ui-final-cta--embedded"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Financing;
