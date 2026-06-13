/**
 * ELRIX ENERGY — Single source of truth for site-wide constants.
 * Import from here instead of hardcoding values in components.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://elrixenergy.com';

export const CONTACT = {
  phone: '+919640484677',
  phoneDisplay: '+91 96404 84677',
  email: 'elrixenergy@gmail.com',
  address: 'Vedayapalem, Nellore - 524004, Andhra Pradesh',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Elrix+Energy+Solar+Solutions+Nellore',
  mapsEmbed:
    'https://maps.google.com/maps?q=Elrix%20Energy%20Solar%20Solutions%20Nellore&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const;

/** FormSubmit AJAX endpoint — inquiries delivered to CONTACT.email */
export const FORM_SUBMIT = {
  ajaxUrl: `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`,
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/profile.php?id=61588416327126',
  instagram: 'https://www.instagram.com/elrix_energy/',
} as const;

export const WHATSAPP = {
  number: '919640484677',
  defaultMessage:
    "Hi ELRIX ENERGY, I'm interested in a solar solution.",
  /** Build a pre-filled WhatsApp URL with a custom message */
  url: (message: string) =>
    `https://wa.me/919640484677?text=${encodeURIComponent(message)}`,
} as const;

export const CITIES = [
  { name: 'Nellore',  slug: 'nellore',  path: '/solar-company-nellore' },
  { name: 'Tirupati', slug: 'tirupati', path: '/solar-company-tirupati' },
  { name: 'Kadapa',   slug: 'kadapa',   path: '/solar-company-kadapa' },
  { name: 'Ongole',   slug: 'ongole',   path: '/solar-company-ongole' },
] as const;

export type CitySlug = (typeof CITIES)[number]['slug'];

/** @deprecated Prefer GA_MEASUREMENT_ID from app/lib/analytics.ts */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";

export const BRAND = {
  name: 'ELRIX ENERGY',
  legalName: 'ELRIX ENERGY SOLAR SOLUTIONS',
  tagline: 'Premium Solar EPC in Andhra Pradesh',
  logoPath: '/logo.webp',
  ogImagePath: '/og-image.jpg',
} as const;

/** Certification badges — WebP logos in /public/certifications/ */
export const CERTIFICATIONS = [
  { id: 'mnre', label: 'MNRE Govt. of India Approved', iconSrc: '/certifications/mnre.webp' },
  { id: 'apspdcl', label: 'APSPDCL Empanelled', iconSrc: '/certifications/apspdcl.webp' },
  { id: 'iso', label: 'ISO 9001:2015', iconSrc: '/certifications/iso.webp' },
  { id: 'msme', label: 'MSME Registered', iconSrc: '/certifications/msme.webp' },
] as const;

/** Verified static assets in /public (see Phase 11 inventory). */
export const PUBLIC_ASSETS = {
  logo: '/logo.webp',
  founderPhoto: '/md-photo.webp',
  heroBackground: '/hero-bg.avif',
  ogImage: '/og-image.jpg',
  services: {
    residential: '/residential_solar.webp',
    commercial: '/commercial_solar.webp',
    industrial: '/industrial_solar.webp',
    maintenance: '/solar_maintenance.webp',
  },
} as const;
