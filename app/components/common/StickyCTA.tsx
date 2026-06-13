"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const STORAGE_KEY = "stickyCTADismissed";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  useEffect(() => {
    if (!mounted || pathname === "/contact" || dismissed) {
      setVisible(false);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
        setVisible(scrollPercent > 60);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, dismissed, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const isActive = visible && !dismissed && pathname !== "/contact";
    document.body.classList.toggle("sticky-cta-visible", isActive);

    return () => {
      document.body.classList.remove("sticky-cta-visible");
    };
  }, [visible, dismissed, pathname, mounted]);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!mounted || dismissed || pathname === "/contact") return null;

  return (
    <div className={`sticky-cta-bar ${visible ? "visible" : ""}`} role="region" aria-label="Call to action">
      <div className="sticky-cta-content container">
        <p>Ready for solar? Get your free quote today.</p>
        <Link
          href="/contact"
          className="btn btn-hero-primary btn-sm"
          data-analytics-location="sticky_cta"
          data-analytics-label="Get Free Quote"
        >
          Get Free Quote
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="sticky-cta-close"
          aria-label="Dismiss"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
