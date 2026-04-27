"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If we're on the contact page or user previously dismissed it, never show
    if (pathname === '/contact' || sessionStorage.getItem('stickyCTADismissed')) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      // Calculate scroll percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      
      // Show when scrolled past 60%
      setVisible(scrollPercent > 60);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial position too
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('stickyCTADismissed', 'true');
    setVisible(false);
  };

  // Completely unrender if dismissed or on contact page
  if (dismissed || pathname === '/contact') return null;

  return (
    <div className={`sticky-cta-bar ${visible ? 'visible' : ''}`}>
      <div className="sticky-cta-content container">
        <p>Ready for solar? Get your free quote today.</p>
        <Link href="/contact" className="btn btn-hero-primary btn-sm">Get Free Quote</Link>
        <button onClick={dismiss} className="sticky-cta-close" aria-label="Dismiss">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
