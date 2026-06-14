/**
 * Home page FAQs — single source for visible content and FAQPage JSON-LD.
 */

export interface HomeFaq {
  q: string;
  a: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    q: "Does solar work in the rainy season?",
    a: "Yes. While peak efficiency occurs on clear days, solar panels still generate electricity during the monsoon. Thanks to Net Metering, excess power generated in summer banks credits to offset lower generation during cloudy months.",
  },
  {
    q: "Will my electricity bill be absolutely zero?",
    a: "Practically, yes. All actual energy usage charges can be completely offset to zero. However, you will still receive a minimal monthly bill from your DISCOM covering basic fixed grid-connection charges.",
  },
  {
    q: "Do you handle solar loan processing and financing?",
    a: "Absolutely. ELRIX ENERGY has direct partnerships with leading banks to provide seamless EMI support. Our team guides you through the entire documentation process.",
  },
  {
    q: "Is ELRIX ENERGY an officially empanelled vendor?",
    a: "Yes. ELRIX ENERGY is an officially registered and APSPDCL-empanelled vendor. This guarantees all installations meet strict government standards and ensures full eligibility for the PM Surya Ghar subsidy scheme.",
  },
  {
    q: "What is the expected Return on Investment (ROI)?",
    a: "Residential setups typically see full ROI within 36 to 60 months. Commercial and industrial installations often achieve ROI in 24 to 48 months due to accelerated depreciation tax benefits.",
  },
  {
    q: "What is the difference between DCR and Non-DCR panels?",
    a: "DCR (Domestic Content Requirement) panels are manufactured entirely in India and are mandatory to claim residential government subsidies. Non-DCR panels are used in commercial projects where subsidies do not apply.",
  },
  {
    q: "Can commercial business owners get the government subsidy?",
    a: "No, PM Surya Ghar subsidies are exclusively for residential homeowners. Commercial clients benefit from 40% accelerated depreciation under Section 32 of the Income Tax Act.",
  },
  {
    q: "What is Net Metering and how does it work?",
    a: "Net metering is a grid-connected billing mechanism. If your panels produce more power than your property uses, the excess is exported to the DISCOM and you are financially credited for it on your next billing cycle.",
  },
  {
    q: "How much maintenance do solar panels require?",
    a: "Very minimal. Tier-1 solar panels have no moving parts. The only regular maintenance required is occasionally washing the surface with clean water to remove dust. ELRIX also offers dedicated automated maintenance packages.",
  },
  {
    q: "Do on-grid solar systems work during a grid power outage?",
    a: "Standard on-grid systems will automatically shut down during a blackout for safety. If backup power is needed, ELRIX ENERGY offers Hybrid systems integrated with battery storage.",
  },
];
