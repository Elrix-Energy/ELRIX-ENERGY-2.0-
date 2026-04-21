import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Settings, Wallet, ArrowRight } from 'lucide-react';
import './Subsidy.css';

const Subsidy = () => {
  return (
    <div className="subsidy-page">
      {/* Graphical Hero */}
      <section className="page-header subsidy-hero">
        <div className="container">
          <h1>PM Surya Ghar: Muft Bijli Yojana</h1>
          <p className="subsidy-subtitle">Direct Government Subsidy up to <strong>₹78,000</strong> in Andhra Pradesh</p>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          
          {/* What is it block */}
          <div className="info-ribbon glass text-center mb-4">
            <h2 className="mb-1 text-primary-dark">What is the Subsidy?</h2>
            <p>A flagship Central Government scheme providing <strong>Direct Benefit Transfers (DBT)</strong> straight to your bank account to cover the cost of your rooftop solar installation, making clean energy highly affordable.</p>
          </div>

          {/* Slabs (Graphical) - Like a PPT Slide */}
          <h2 className="text-center mb-3">Clear-Cut Subsidy Structure</h2>
          <div className="slab-grid mb-4">
            <div className="slab-card line-bottom">
              <div className="slab-capacity">1 kW System</div>
              <div className="slab-amount text-secondary">₹ 30,000</div>
              <p className="slab-desc text-text-light mt-1">Perfect for small homes</p>
            </div>
            <div className="slab-card line-bottom">
              <div className="slab-capacity">2 kW System</div>
              <div className="slab-amount text-secondary">₹ 60,000</div>
              <p className="slab-desc text-text-light mt-1">Ideal for average usage</p>
            </div>
            <div className="slab-card line-bottom highlighted-slab">
              <div className="slab-badge">MAXIMUM CAP</div>
              <div className="slab-capacity text-white">3 kW & Above</div>
              <div className="slab-amount text-white">₹ 78,000</div>
              <p className="slab-desc text-white mt-1">For high energy demands</p>
            </div>
          </div>

          {/* How ELRIX Helps (No Hassle) */}
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

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn btn-secondary btn-large">Start My Application Today <ArrowRight style={{marginLeft:'10px'}}/></Link>
          </div>

        </div>
      </section>
    </div>
  );
};
export default Subsidy;
