import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "./components/analytics/AnalyticsProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingCalculator from "./components/common/FloatingCalculator";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import StickyCTA from "./components/common/StickyCTA";
import ScrollManager from "./components/common/ScrollManager";
import { BRAND, CONTACT, SITE_URL, SOCIAL } from "./lib/siteConfig";
import {
  buildAlternates,
  buildOrganizationSchema,
  DEFAULT_OG_IMAGE,
  PAGE_TITLE_TEMPLATE,
  ROOT_METADATA,
} from "./lib/seoConfig";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-var",
  display: "swap",
});

export const metadata: Metadata = {
  ...ROOT_METADATA,
  metadataBase: new URL(SITE_URL),
  title: {
    template: PAGE_TITLE_TEMPLATE,
    default: "Solar Company in Nellore, Tirupati, Kadapa & Ongole",
  },
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
  alternates: buildAlternates("/"),
  openGraph: {
    ...ROOT_METADATA.openGraph,
    title: `${BRAND.name} | Premium Solar Solutions in Andhra Pradesh`,
    description:
      "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations in Nellore, Tirupati, Kadapa & Ongole.",
    url: SITE_URL,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Premium Solar Solutions in Andhra Pradesh`,
    description:
      "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  verification: {
    google: "KJt0OtAfT_EBq7M5sH0fYKwaF7j4tp5H8cbm4802e5M",
  },
  appleWebApp: {
    capable: true,
    title: BRAND.name,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: BRAND.legalName,
        image: `${SITE_URL}${BRAND.logoPath}`,
        description:
          "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
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
          latitude: 14.4286,
          longitude: 79.9825,
        },
        url: SITE_URL,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        priceRange: "₹₹",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        areaServed: [
          { "@type": "City", name: "Nellore" },
          { "@type": "City", name: "Tirupati" },
          { "@type": "City", name: "Kadapa" },
          { "@type": "City", name: "Ongole" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Solar EPC Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Solar Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Solar Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Solar EPC" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Maintenance & AMC" } },
          ],
        },
        sameAs: [SOCIAL.facebook, SOCIAL.instagram],
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
        <AnalyticsProvider>
          <div className="app-wrapper">
            <ScrollManager />
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
            <FloatingCalculator />
            <FloatingWhatsApp />
            <StickyCTA />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
