"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, CONTACT, CITIES } from "@/app/lib/siteConfig";

type DropdownKey = "services" | "locations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    firstMobileLinkRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenDropdown(null);
      setIsOpen(false);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleDocumentKeyDown);
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const toggleDropdown = (dropdown: DropdownKey) => {
    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

  const handleDropdownKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    dropdown: DropdownKey
  ) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenDropdown(dropdown);
      const firstDropdownLink = event.currentTarget
        .nextElementSibling
        ?.querySelector<HTMLAnchorElement>("a");
      requestAnimationFrame(() => firstDropdownLink?.focus());
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled glass" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="brand">
          <Image
            src={BRAND.logoPath}
            alt={`${BRAND.name} Logo`}
            width={40}
            height={40}
            className="brand-logo"
          />
          <span className="brand-text">{BRAND.name}</span>
        </Link>

        <nav
          ref={navRef}
          id="primary-navigation"
          className={`nav-links ${isOpen ? "active bg-primary" : ""}`}
          aria-label="Primary navigation"
        >
          <Link ref={firstMobileLinkRef} href="/" className={pathname === "/" ? "active-link" : ""}>
            Home
          </Link>

          <div className="dropdown" data-open={openDropdown === "services"}>
            <button
              type="button"
              className={pathname.startsWith("/services") ? "active-link" : ""}
              aria-expanded={openDropdown === "services"}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => toggleDropdown("services")}
              onKeyDown={(event) => handleDropdownKeyDown(event, "services")}
            >
              Services
            </button>
            <div id="services-menu" className="dropdown-content glass" role="menu">
              <Link href="/services" role="menuitem">All Services</Link>
              <Link href="/services/residential" role="menuitem">Residential Solar</Link>
              <Link href="/services/commercial" role="menuitem">Commercial Solar</Link>
              <Link href="/services/industrial" role="menuitem">Industrial Solar</Link>
              <Link href="/services/maintenance" role="menuitem">Maintenance & Service</Link>
            </div>
          </div>

          <div className="dropdown" data-open={openDropdown === "locations"}>
            <button
              type="button"
              className={pathname.startsWith("/solar-company") ? "active-link" : ""}
              aria-expanded={openDropdown === "locations"}
              aria-haspopup="true"
              aria-controls="locations-menu"
              onClick={() => toggleDropdown("locations")}
              onKeyDown={(event) => handleDropdownKeyDown(event, "locations")}
            >
              Locations
            </button>
            <div id="locations-menu" className="dropdown-content glass" role="menu">
              {CITIES.map((city) => (
                <Link key={city.slug} href={city.path} role="menuitem">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projects" className={pathname === "/projects" ? "active-link" : ""}>
            Projects
          </Link>

          <Link href="/subsidy" className={pathname === "/subsidy" ? "active-link" : ""}>
            Subsidy & EMI
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>
            About
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""}>
            Contact
          </Link>

          <a
            href={`tel:${CONTACT.phone}`}
            className="btn btn-secondary nav-cta"
            data-analytics-location="navbar"
          >
            <Phone size={16} aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </nav>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
