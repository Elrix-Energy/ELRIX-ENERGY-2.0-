"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Settings, Wallet, ArrowRight, CreditCard, IndianRupee, ShieldCheck, Clock } from 'lucide-react';
import Reveal from '../common/Reveal';

const pricingData = [
  { kw: '3 kW', cost: 170000, subsidy: 78000 },
  { kw: '4 kW', cost: 220000, subsidy: 78000 },
  { kw: '5 kW', cost: 270000, subsidy: 78000 },
  { kw: '10 kW', cost: 500000, subsidy: 78000 },
];

const Subsidy = () => {
  const [systemCost, setSystemCost] = useState('');
  const [subsidyAmount, setSubsidyAmount] = useState('');
  const [tenure, setTenure] = useState('60');
  const [rate, setRate] = useState('9');
  const [emiResult, setEmiResult] = useState(null);

  // Eligibility Checker State
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    const principal = parseFloat(systemCost) - parseFloat(subsidyAmount || '0');
    if (!principal || principal <= 0) return;

    const r = parseFloat(rate) / 12 / 100;
    const n = parseInt(tenure);
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - principal;

    setEmiResult({
      emi: Math.round(emi),
      principal: Math.round(principal),
      totalPayable: Math.round(totalPayable),
      totalInterest: Math.round(totalInterest),
    });
  };

  const formatINR = (num) => num.toLocaleString('en-IN');

  return (
    <div className="subsidy-page">
      {/* Hero */}
      <section className="page-header subsidy-hero">
        <div className="container">
          <h1>PM Surya Ghar: Muft Bijli Yojana</h1>
          <p className="subsidy-subtitle">Government Subsidy up to <strong>₹78,000</strong> + Flexible EMI Financing in Andhra Pradesh</p>
        </div>
      </section>

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
            <Reveal delay={0}>
              <div className="slab-card line-bottom">
                <div className="slab-capacity">1 kW System</div>
                <div className="slab-amount text-secondary">₹ 30,000</div>
                <p className="slab-desc text-text-light mt-1">Perfect for small homes</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="slab-card line-bottom">
                <div className="slab-capacity">2 kW System</div>
                <div className="slab-amount text-secondary">₹ 60,000</div>
                <p className="slab-desc text-text-light mt-1">Ideal for average usage</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="slab-card line-bottom highlighted-slab">
                <div className="slab-badge">MAXIMUM CAP</div>
                <div className="slab-capacity text-white">3 kW & Above</div>
                <div className="slab-amount text-white">₹ 78,000</div>
                <p className="slab-desc text-white mt-1">For high energy demands</p>
              </div>
            </Reveal>
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
          <Reveal>
            <h2 className="text-center mb-2">EMI Calculator</h2>
            <p className="text-center mb-3" style={{ color: 'var(--text-light)' }}>Calculate your monthly EMI for a solar installation. Your EMI is often less than your current electricity bill!</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="emi-calculator-box">
              <form onSubmit={calculateEMI}>
                <div className="emi-form">
                  <div className="form-group">
                    <label htmlFor="systemCost">Total System Cost (₹)</label>
                    <input type="number" id="systemCost" value={systemCost} onChange={(e) => setSystemCost(e.target.value)} placeholder="e.g. 170000" required min="10000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subsidyAmt">Subsidy Amount (₹)</label>
                    <input type="number" id="subsidyAmt" value={subsidyAmount} onChange={(e) => setSubsidyAmount(e.target.value)} placeholder="e.g. 78000" min="0" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tenure">Loan Tenure</label>
                    <select id="tenure" value={tenure} onChange={(e) => setTenure(e.target.value)}>
                      <option value="12">1 Year</option>
                      <option value="24">2 Years</option>
                      <option value="36">3 Years</option>
                      <option value="48">4 Years</option>
                      <option value="60">5 Years</option>
                      <option value="72">6 Years</option>
                      <option value="84">7 Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rate">Interest Rate (% p.a.)</label>
                    <input type="number" id="rate" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 9" required min="0" step="0.1" max="30" />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Calculate EMI</button>
                </div>
              </form>

              {emiResult && (
                <div className="emi-results">
                  <div className="emi-result-card">
                    <h4>Monthly EMI</h4>
                    <p className="emi-result-value">₹ {formatINR(emiResult.emi)}</p>
                  </div>
                  <div className="emi-result-card">
                    <h4>Loan Amount</h4>
                    <p className="emi-result-value">₹ {formatINR(emiResult.principal)}</p>
                  </div>
                  <div className="emi-result-card">
                    <h4>Total Interest</h4>
                    <p className="emi-result-value">₹ {formatINR(emiResult.totalInterest)}</p>
                  </div>
                  <div className="emi-result-card">
                    <h4>Total Payable</h4>
                    <p className="emi-result-value">₹ {formatINR(emiResult.totalPayable)}</p>
                  </div>
                </div>
              )}
            </div>
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
                      <h4>1. Portal Registration</h4>
                      <p>We register and upload all your required documents directly to the National Portal.</p>
                    </div>
                  </div>
                  <div className="h-item">
                    <Settings className="text-primary mr-1" size={32} style={{flexShrink: 0}} />
                    <div>
                      <h4>2. APSPDCL Approvals</h4>
                      <p>We coordinate directly with local DISCOMs for feasibility and net-metering approvals.</p>
                    </div>
                  </div>
                  <div className="h-item">
                    <Wallet className="text-primary mr-1" size={32} style={{flexShrink: 0}} />
                    <div>
                      <h4>3. Claim Processing</h4>
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
              <div className="fin-benefit-card">
                <IndianRupee size={36} style={{ color: 'var(--primary)' }} />
                <h4>Zero Down Payment</h4>
                <p>Start your solar journey with no upfront investment through our banking partners.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="fin-benefit-card">
                <CreditCard size={36} style={{ color: 'var(--primary)' }} />
                <h4>EMI &lt; Electricity Bill</h4>
                <p>Your monthly EMI is typically lower than what you currently pay for electricity.</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="fin-benefit-card">
                <ShieldCheck size={36} style={{ color: 'var(--primary)' }} />
                <h4>Subsidy + Loan Combined</h4>
                <p>Get PM Surya Ghar subsidy AND finance the remaining amount — maximum savings.</p>
              </div>
            </Reveal>
            <Reveal delay={450}>
              <div className="fin-benefit-card">
                <Clock size={36} style={{ color: 'var(--primary)' }} />
                <h4>ROI in 3-5 Years</h4>
                <p>Even with EMI, your system pays for itself within 3-5 years. Then it is pure savings for 20+ years.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center">
            <Link href="/contact" className="btn btn-secondary btn-large">Start My Application Today <ArrowRight style={{marginLeft:'10px'}}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Subsidy;
