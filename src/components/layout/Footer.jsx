import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', textDecoration: 'none' }}>
              <img src="/logo.png" alt="ELRIX ENERGY Logo" style={{ height: '60px' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-1px', color: 'var(--text-dark)', lineHeight: 1.1, whiteSpace: 'nowrap' }}>ELRIX ENERGY</span>
            </Link>
            <p className="footer-desc">
              Your trusted Solar EPC company in Nellore, delivering end-to-end premium solar solutions for residential, commercial, and industrial needs.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61588416327126" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="https://www.instagram.com/elrix_energy/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://share.google/6HO0CKPaNiAYbMPwF" target="_blank" rel="noopener noreferrer"><MapPin /></a>
            </div>
          </div>
          
          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/"><ArrowRight size={16}/> Home</Link></li>
              <li><Link to="/#calculator"><ArrowRight size={16}/> Solar Calculator</Link></li>
              <li><Link to="/about"><ArrowRight size={16}/> About Us</Link></li>
              <li><Link to="/projects"><ArrowRight size={16}/> Projects</Link></li>
              <li><Link to="/blog"><ArrowRight size={16}/> Resources</Link></li>
              <li><Link to="/contact"><ArrowRight size={16}/> Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col links-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/residential"><ArrowRight size={16}/> Residential Solar</Link></li>
              <li><Link to="/services/commercial"><ArrowRight size={16}/> Commercial Solar</Link></li>
              <li><Link to="/services/industrial"><ArrowRight size={16}/> Industrial Solar</Link></li>
              <li><Link to="/subsidy"><ArrowRight size={16}/> PM Surya Ghar Subsidy</Link></li>
              <li><Link to="/financing"><ArrowRight size={16}/> EMI & Financing</Link></li>
            </ul>
          </div>
          
          <div className="footer-col links-col">
            <h3>Service Areas</h3>
            <ul>
              <li><Link to="/contact"><ArrowRight size={16}/> Nellore</Link></li>
              <li><Link to="/contact"><ArrowRight size={16}/> Tirupati</Link></li>
              <li><Link to="/contact"><ArrowRight size={16}/> Kadapa</Link></li>
              <li><Link to="/contact"><ArrowRight size={16}/> Ongole</Link></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3>Contact Info</h3>
            <ul>
              <li><MapPin size={20} className="contact-icon"/> <span><strong>Head Office:</strong> Vedayapalem, Nellore - 524004</span></li>
              <li><Phone size={20} className="contact-icon"/> <a href="tel:+919640484677">+91 9640484677</a></li>
              <li><Mail size={20} className="contact-icon"/> <a href="mailto:elrixenergy@gmail.com">elrixenergy@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.85rem', opacity: 0.6, textAlign: 'center', maxWidth: '800px', lineHeight: '1.6' }}>
            ELRIX ENERGY is a premium Tier-1 Solar EPC Company headquartered in Nellore. We proudly deploy residential rooftop panels, commercial solar integrations, and PM Surya Ghar subsidies across Tirupati, Kadapa, Ongole, and all surrounding Andhra Pradesh districts.
          </p>
          <p>&copy; 2026 ELRIX ENERGY SOLAR SOLUTIONS. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            Made in INDIA with <span style={{ fontSize: '1.2rem', display: 'inline-block', transform: 'translateY(-2px)' }}>❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
