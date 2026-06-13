import type { Metadata } from "next";
import Home from "./components/views/Home";
import { BRAND } from "./lib/siteConfig";
import { buildPageMetadata } from "./lib/seoConfig";
import { HOME_OG_IMAGE_PATH } from "./lib/ogImage";

export const metadata: Metadata = buildPageMetadata({
  title: "Solar Company in Nellore, Tirupati, Kadapa & Ongole",
  description:
    "Top-rated solar EPC company in Nellore serving Tirupati, Kadapa and Ongole. Residential, commercial and industrial solar with PM Surya Ghar subsidy up to ₹78,000. Free site survey.",
  path: "/",
  ogTitle: `${BRAND.name} | Premium Solar Solutions in Andhra Pradesh`,
  ogDescription:
    "South India's most trusted solar EPC. Cyclone-proof solar installations in Nellore, Tirupati, Kadapa & Ongole.",
  images: [
    {
      url: HOME_OG_IMAGE_PATH,
      width: 1200,
      height: 630,
      alt: `${BRAND.name} – Premium Solar EPC in Andhra Pradesh`,
    },
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does solar work in the rainy season?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While peak efficiency occurs on clear days, solar panels still generate electricity during the monsoon. Thanks to Net Metering, excess power generated in summer essentially banks credits to offset lower generation during cloudy months.",
      },
    },
    {
      "@type": "Question",
      name: "Will my electricity bill be absolutely zero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practically, yes. All actual energy usage charges can be completely offset to zero. However, you will still receive a minimal monthly bill from your DISCOM covering basic fixed grid-connection charges.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle solar loan processing and financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. ELRIX ENERGY has direct partnerships with leading banks to provide seamless EMI support. Our team guides you through the entire documentation process.",
      },
    },
    {
      "@type": "Question",
      name: "Is ELRIX ENERGY an officially empanelled vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ELRIX ENERGY is an officially registered and APSPDCL-empanelled vendor. This guarantees all installations meet strict government standards and ensures full eligibility for the PM Surya Ghar subsidy scheme.",
      },
    },
    {
      "@type": "Question",
      name: "What is the expected Return on Investment (ROI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential setups typically see full ROI within 36 to 60 months. Commercial and industrial installations often achieve ROI in 24 to 48 months due to accelerated depreciation tax benefits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between DCR and Non-DCR panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DCR (Domestic Content Requirement) panels are manufactured entirely in India and are mandatory to claim residential government subsidies. Non-DCR panels are used in commercial projects where subsidies do not apply.",
      },
    },
    {
      "@type": "Question",
      name: "Can commercial business owners get the government subsidy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, PM Surya Ghar subsidies are exclusively for residential homeowners. Commercial clients benefit from 40% accelerated depreciation under Section 32 of the Income Tax Act.",
      },
    },
    {
      "@type": "Question",
      name: "What is Net Metering and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Net metering is a grid-connected billing mechanism. If your panels produce more power than your property uses, the excess is exported to the DISCOM and you are financially credited for it on your next billing cycle.",
      },
    },
    {
      "@type": "Question",
      name: "How much maintenance do solar panels require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very minimal. Tier-1 solar panels have no moving parts. The only regular maintenance required is occasionally washing the surface with clean water to remove dust. ELRIX also offers dedicated automated maintenance packages.",
      },
    },
    {
      "@type": "Question",
      name: "Do on-grid solar systems work during a grid power outage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard on-grid systems will automatically shut down during a blackout for safety. If backup power is needed, ELRIX ENERGY offers Hybrid systems integrated with battery storage.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Home />
    </>
  );
}
