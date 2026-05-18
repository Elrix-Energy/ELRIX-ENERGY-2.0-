import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
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
  metadataBase: new URL("https://elrixenergy.com"),
  title: "Solar Company in Nellore, Tirupati, Kadapa & Ongole | ELRIX ENERGY",
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar installations with PM Surya Ghar subsidy support.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ELRIX ENERGY | Premium Solar Solutions",
    description: "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations.",
    url: "https://elrixenergy.com",
    siteName: "ELRIX ENERGY",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELRIX ENERGY | Premium Solar Solutions",
    description: "South India's most trusted solar EPC. Eliminate your power bill with cyclone-proof solar installations.",
  },
  verification: {
    google: "KJt0OtAfT_EBq7M5sH0fYKwaF7j4tp5H8cbm4802e5M",
  },
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ELRIX ENERGY SOLAR SOLUTIONS",
    "image": "https://elrixenergy.com/logo.png",
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
    "url": "https://elrixenergy.com",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0M16EF2N02"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0M16EF2N02');
          `}
        </Script>
        <div className="app-wrapper">
          <ScrollManager />
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
          <FloatingCalculator />
          <FloatingWhatsApp />
          <StickyCTA />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
