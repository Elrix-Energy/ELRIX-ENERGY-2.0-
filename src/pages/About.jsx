import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1>About ELRIX ENERGY</h1>
          <p>Rooted in Trust, Driven by Innovation.</p>
        </div>
      </header>
      
      <section className="section bg-white">
        <div className="container">
          <div className="md-message-grid">
            <div className="md-photo-container">
              {/* Note: User must drop MD photo into src/assets/ or public/ directory. Using a placeholder for now */}
              <img src="/md-photo.png" alt="Managing Director" className="md-photo" />
            </div>
            <div className="md-message-content">
              <h2>Message from the <span className="text-primary">Managing Director</span></h2>
              <div className="quote-mark">"</div>
              <p className="lead">
                For over 16 years, I have had the privilege to serve the wonderful people of Nellore through Hari Car Decors. Throughout that journey, one core principle has driven everything we do: <strong>Trust</strong>.
              </p>
              <p>
                Now, as we expand into the solar industry with ELRIX ENERGY, we carry forward that same massive commitment to quality. As our operations aggressively scale directly from our Nellore headquarters out to serving the incredible communities of Tirupati, Kadapa, and Ongole, we formally promise that our absolute standard for long-term reliability will never drop.
              </p>
              <p>
                Transitioning to clean energy is a major step. Whether you are installing panels on a residential rooftop in Kadapa or a heavy manufacturing plant in Ongole, ELRIX ensures the transition is effortlessly smooth, transparent, mathematically profitable, and structurally built to last generations.
              </p>
              <p className="signature" style={{ textAlign: 'right', marginTop: '2rem' }}>
                <strong>- Haranath Vommena</strong><br/>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Managing Director</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="certifications text-center">
            <h2 className="mb-3">Why Choose ELRIX?</h2>
            <div className="cert-grid">
              <div className="cert-card">
                <h3>MNRE Certified</h3>
              </div>
              <div className="cert-card">
                <h3>APSPDCL Empanelled</h3>
              </div>
              <div className="cert-card">
                <h3>ISO & IEC Compliant</h3>
              </div>
              <div className="cert-card">
                <h3>MSME Registered</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
