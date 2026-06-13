import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { BRAND, CONTACT, SOCIAL } from "@/app/lib/siteConfig";
import CertificationBadges from "@/app/components/sections/CertificationBadges";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-brand">
              <Image
                src={BRAND.logoPath}
                alt={`${BRAND.name} Logo`}
                width={60}
                height={60}
                className="footer-brand-logo"
              />
              <span className="footer-brand-text">{BRAND.name}</span>
            </Link>
            <p className="footer-desc">
              Your trusted Solar EPC company in Nellore, delivering end-to-end premium solar
              solutions for residential, commercial, and industrial needs.
            </p>
            <div className="social-links">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Instagram />
              </a>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our location on Google Maps"
              >
                <MapPin />
              </a>
            </div>
          </div>

          <nav className="footer-col links-col" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/"><ArrowRight size={16} aria-hidden="true" /> Home</Link></li>
              <li><Link href="/#calculator"><ArrowRight size={16} aria-hidden="true" /> Solar Calculator</Link></li>
              <li><Link href="/about"><ArrowRight size={16} aria-hidden="true" /> About Us</Link></li>
              <li><Link href="/blog"><ArrowRight size={16} aria-hidden="true" /> Resources</Link></li>
              <li><Link href="/contact"><ArrowRight size={16} aria-hidden="true" /> Contact Us</Link></li>
            </ul>
          </nav>

          <nav className="footer-col links-col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              <li><Link href="/services/residential"><ArrowRight size={16} aria-hidden="true" /> Residential Solar</Link></li>
              <li><Link href="/services/commercial"><ArrowRight size={16} aria-hidden="true" /> Commercial Solar</Link></li>
              <li><Link href="/services/industrial"><ArrowRight size={16} aria-hidden="true" /> Industrial Solar</Link></li>
              <li><Link href="/subsidy"><ArrowRight size={16} aria-hidden="true" /> PM Surya Ghar Subsidy</Link></li>
              <li><Link href="/subsidy#emi-calculator"><ArrowRight size={16} aria-hidden="true" /> EMI Calculator</Link></li>
            </ul>
          </nav>

          <nav className="footer-col links-col" aria-label="Service areas">
            <h3>Service Areas</h3>
            <ul>
              <li><Link href="/solar-company-nellore"><ArrowRight size={16} aria-hidden="true" /> Nellore</Link></li>
              <li><Link href="/solar-company-tirupati"><ArrowRight size={16} aria-hidden="true" /> Tirupati</Link></li>
              <li><Link href="/solar-company-kadapa"><ArrowRight size={16} aria-hidden="true" /> Kadapa</Link></li>
              <li><Link href="/solar-company-ongole"><ArrowRight size={16} aria-hidden="true" /> Ongole</Link></li>
            </ul>
          </nav>

          <div className="footer-col contact-col">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <MapPin size={20} className="contact-icon" aria-hidden="true" />
                <span>
                  <strong>Head Office:</strong> {CONTACT.address}
                </span>
              </li>
              <li>
                <Phone size={20} className="contact-icon" aria-hidden="true" />
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={20} className="contact-icon" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom__tagline">
            {BRAND.name} is a premium Tier-1 Solar EPC Company headquartered in Nellore. We
            proudly deploy residential rooftop panels, commercial solar integrations, and PM Surya
            Ghar subsidies across Tirupati, Kadapa, Ongole, and all surrounding Andhra Pradesh
            districts.
          </p>
          <CertificationBadges />
          <nav className="footer-legal" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </nav>
          <p>&copy; 2026 {BRAND.legalName}. All rights reserved.</p>
          <p>
            Made by <strong>Bhaswanth Vommena</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
