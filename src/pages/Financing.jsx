import React from 'react';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Financing = () => {
  return (
    <div className="financing-page">
      <header className="page-header">
        <div className="container">
          <h1>EMI & Financing Support</h1>
          <p>Making solar accessible for everyone with flexible payment options.</p>
        </div>
      </header>
      <section className="section bg-white">
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
             <CreditCard size={64} className="text-secondary mb-3" style={{display: 'inline-block'}} />
             <h2 className="mb-3">Easy EMI Facilities</h2>
             <p className="mb-3 text-left" style={{lineHeight: '1.8'}}>We have partnered with leading banks and NBFCs to provide zero down payment and low-interest EMI options. Do not let upfront costs stop you from transitioning to clean energy.</p>
             <p className="mb-3 text-left" style={{lineHeight: '1.8'}}>The EMI you pay is often less than your current electricity bill, meaning the system pays for itself!</p>
             <Link to="/contact" className="btn btn-primary mt-1">Get Financial Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Financing;
