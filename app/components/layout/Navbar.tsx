"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToServiceSection = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);

    const scrollNow = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (pathname === "/services") {
      scrollNow();
      return;
    }

    router.push(`/services#${sectionId}`);
    setTimeout(scrollNow, 250);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled glass" : ""}`}>
      <div className="container nav-container">
        <Link
          href="/"
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
        >
          <Image src="/logo.png" alt="ELRIX ENERGY Logo" width={40} height={40} style={{ height: "40px", width: "auto" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.5px", color: "var(--text-dark)" }}>
            ELRIX ENERGY
          </span>
        </Link>
        <nav className={`nav-links ${isOpen ? "active bg-primary" : ""}`}>
          <Link href="/" className={pathname === "/" ? "active-link" : ""}>Home</Link>
          <div className="dropdown">
            <Link href="/services" className={pathname.startsWith("/services") ? "active-link" : ""}>Services</Link>
            <div className="dropdown-content glass">
              <Link href="/services#residential" onClick={scrollToServiceSection("residential")}>Residential Solar</Link>
              <Link href="/services#commercial" onClick={scrollToServiceSection("commercial")}>Commercial Solar</Link>
              <Link href="/services#industrial" onClick={scrollToServiceSection("industrial")}>Industrial Solar</Link>
              <Link href="/services#maintenance" onClick={scrollToServiceSection("maintenance")}>Maintenance & Service</Link>
            </div>
          </div>
          <Link href="/subsidy" className={pathname === "/subsidy" ? "active-link" : ""}>Subsidy & EMI</Link>
          <Link href="/projects" className={pathname === "/projects" ? "active-link" : ""}>Projects</Link>
          <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>About</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""}>Contact</Link>
          <Link href="/contact" className="btn btn-secondary nav-cta">Get Free Quote</Link>
        </nav>
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
