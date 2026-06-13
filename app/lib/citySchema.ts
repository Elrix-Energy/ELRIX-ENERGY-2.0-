import { BRAND, CONTACT, SITE_URL } from "./siteConfig";
import { buildCanonical, buildOrganizationSchema } from "./seoConfig";
import type { CityFaq } from "./cityData";

const HQ_GEO = { latitude: 14.4286, longitude: 79.9825 };

/** Nellore HQ — full LocalBusiness with postal address. */
export function buildNelloreLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${buildCanonical("/solar-company-nellore")}#localbusiness`,
    name: `${BRAND.legalName} – Nellore`,
    description:
      "MNRE-certified solar EPC company headquartered in Nellore offering residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
    url: buildCanonical("/solar-company-nellore"),
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_URL}${BRAND.logoPath}`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vedayapalem",
      addressLocality: "Nellore",
      addressRegion: "Andhra Pradesh",
      postalCode: "524004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HQ_GEO.latitude,
      longitude: HQ_GEO.longitude,
    },
    areaServed: { "@type": "City", name: "Nellore" },
    parentOrganization: buildOrganizationSchema(),
  };
}

/** Satellite cities — area served only; office remains Nellore HQ. */
export function buildAreaServedLocalBusinessSchema(
  city: string,
  path: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${buildCanonical(path)}#areaserved`,
    name: `${BRAND.legalName} – ${city}`,
    description,
    url: buildCanonical(path),
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_URL}${BRAND.logoPath}`,
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Andhra Pradesh",
      },
    },
    parentOrganization: buildOrganizationSchema(),
  };
}

export function buildFaqPageSchema(faqs: CityFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    provider: buildOrganizationSchema(),
    areaServed: [
      { "@type": "City", name: "Nellore" },
      { "@type": "City", name: "Tirupati" },
      { "@type": "City", name: "Kadapa" },
      { "@type": "City", name: "Ongole" },
    ],
    url: buildCanonical(options.path),
  };
}
