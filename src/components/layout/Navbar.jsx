import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleQuoteClick = (event) => {
    if (location.pathname === '/contact') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="ELRIX ENERGY Logo" style={{ height: '40px' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.6rem', letterSpacing: '-0.5px', color: 'var(--text-dark)' }}>ELRIX ENERGY</span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'active bg-primary' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
          <div className="dropdown">
            <Link to="/services" className={location.pathname.startsWith('/services') ? 'active-link' : ''}>Services</Link>
            <div className="dropdown-content glass">
              <Link to="/services#residential">Residential Solar</Link>
              <Link to="/services#commercial">Commercial Solar</Link>
              <Link to="/services#industrial">Industrial Solar</Link>
              <Link to="/services#maintenance">Maintenance & Service</Link>
            </div>
          </div>
          <Link to="/subsidy" className={location.pathname === '/subsidy' ? 'active-link' : ''}>PM Surya Ghar</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
          
          <Link to="/contact" className="btn btn-secondary nav-cta" onClick={handleQuoteClick}>
             Get Quote
          </Link>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
