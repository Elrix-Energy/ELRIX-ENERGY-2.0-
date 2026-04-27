"use client";
import React, { useState } from 'react';
import { CreditCard, IndianRupee, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../common/Reveal';

const pricingData = [
  { kw: '3 kW', cost: 170000, subsidy: 78000 },
  { kw: '4 kW', cost: 220000, subsidy: 78000 },
  { kw: '5 kW', cost: 270000, subsidy: 78000 },
  { kw: '10 kW', cost: 500000, subsidy: 78000 },
];

const Financing = () => {
  const [systemCost, setSystemCost] = useState('');
  const [subsidyAmount, setSubsidyAmount] = useState('');
  const [tenure, setTenure] = useState('60');
  const [rate, setRate] = useState('9');
  const [emiResult, setEmiResult] = useState(null);

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
    <div className="financing-page">
      <header className="page-header">
        <div className="container">
          <h1>EMI & Financing Support</h1>
          <p>Making solar accessible for everyone with flexible payment options.</p>
        </div>
      </header>



      {/* EMI Calculator */}
      <section className="section bg-background">
        <div className="container">
          <div className="financing-section">
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

            <Reveal>
              <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/contact" className="btn btn-primary">Get Financial Consultation</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Financing;
