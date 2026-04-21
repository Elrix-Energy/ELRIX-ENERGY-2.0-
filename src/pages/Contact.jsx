import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/elrixenergy@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to go solar? Get in touch for a free site survey and quote.</p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="mb-3">We guarantee prioritized site surveys and respond to all complex commercial and residential inquiries within 24 hours.</p>
              
              <div className="info-item">
                <div className="icon-wrapper"><MapPin size={24} /></div>
                <div>
                  <h4>Head Office</h4>
                  <p>Vedayapalem, Nellore - 524004, Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper"><Phone size={24} /></div>
                <div>
                  <h4>Phone Number</h4>
                  <p><a href="tel:+919640484677">+91 9640484677</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper"><Mail size={24} /></div>
                <div>
                  <h4>Email Address</h4>
                  <p><a href="mailto:elrixenergy@gmail.com">elrixenergy@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="contact-form-container glass">
              <form onSubmit={handleSubmit} className="contact-form">
                <input type="hidden" name="_subject" value="New lead from ELRIX ENERGY Website!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+91 xxxxx xxxxx" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Required Location</label>
                  <select id="location" name="location" required>
                    <option value="">Select a city</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Kadapa">Kadapa</option>
                    <option value="Ongole">Ongole</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="requirement">Your Requirement (e.g., 3kW Residential, 50kW Commercial)</label>
                  <textarea id="requirement" name="requirement" rows="4" required placeholder="Describe your energy needs..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>

                {submitStatus === 'success' && (
                  <p className="form-message form-message-success">
                    Thank you. Your inquiry has been sent successfully. Our team will get back to you soon.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="form-message form-message-error">
                    Something went wrong while sending your inquiry. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <a
          className="map-open-button"
          href="https://www.google.com/maps/search/?api=1&query=Elrix+Energy+Solar+Solutions+Nellore"
          target="_blank"
          rel="noreferrer"
          aria-label="Open ELRIX Energy location in Google Maps"
        >
          <span>Open in Maps</span>
          <ExternalLink size={16} />
        </a>
        <iframe 
          title="ELRIX Energy Location"
          src="https://maps.google.com/maps?q=Elrix%20Energy%20Solar%20Solutions%20Nellore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;
