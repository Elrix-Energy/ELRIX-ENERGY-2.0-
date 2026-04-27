import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingCalculator from "./components/common/FloatingCalculator";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import StickyCTA from "./components/common/StickyCTA";
import ScrollManager from "./components/common/ScrollManager";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elrixenergy.in"),
  title: "Solar Company in Nellore, Tirupati, Kadapa & Ongole | ELRIX ENERGY",
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ELRIX ENERGY | Premium Solar Solutions",
    description: "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations.",
    url: "https://elrixenergy.in",
    siteName: "ELRIX ENERGY",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELRIX ENERGY | Premium Solar Solutions",
    description: "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations.",
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ELRIX ENERGY SOLAR SOLUTIONS",
    "image": "https://elrixenergy.in/logo.png",
    "description": "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vedayapalem",
      "addressLocality": "Nellore",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "524004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.4286,
      "longitude": 79.9825
    },
    "url": "https://elrixenergy.in",
    "telephone": "+919640484677",
    "priceRange": "₹₹",
    "areaServed": ["Nellore", "Tirupati", "Kadapa", "Ongole"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`}>
        <div className="app-wrapper">
          <ScrollManager />
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
          <FloatingCalculator />
          <FloatingWhatsApp />
          <StickyCTA />
        </div>
      </body>
    </html>
  );
}

