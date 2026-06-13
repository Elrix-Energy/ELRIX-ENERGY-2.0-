/**
 * Privacy Policy & Terms content for ELRIX ENERGY.
 * Review with legal counsel before relying on this text for compliance.
 */

export const LEGAL_LAST_UPDATED = "22 May 2026";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "ELRIX ENERGY SOLAR SOLUTIONS (“ELRIX ENERGY”, “we”, “us”, or “our”) operates the website at elrixenergy.com (the “Site”). This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit the Site, use our calculators, submit an inquiry, or otherwise interact with us.",
      "By using the Site, you agree to the practices described here. If you do not agree, please do not use the Site.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information we collect",
    paragraphs: ["We may collect the following categories of information:"],
    listItems: [
      "Contact and inquiry details you submit through our contact form (such as name, phone number, location, monthly electricity bill, system requirements, and calculator prefill data).",
      "Technical and usage data when you use the Site, including IP address, browser type, device information, pages viewed, and referral source.",
      "Analytics and advertising data if you accept optional cookies (see Section 6).",
      "Communications you send us by phone, email, WhatsApp, or in person during sales and project delivery.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use your information",
    paragraphs: ["We use personal information to:"],
    listItems: [
      "Respond to quote requests, site surveys, and customer support.",
      "Provide solar design, installation, subsidy documentation, and after-sales service.",
      "Improve the Site, calculators, and marketing effectiveness.",
      "Comply with law, prevent fraud, and protect our rights.",
      "Send service-related updates where you have asked us to contact you.",
    ],
  },
  {
    id: "sharing",
    title: "4. How we share information",
    paragraphs: [
      "We do not sell your personal information. We may share it only as needed with:",
    ],
    listItems: [
      "Service providers that help us operate the Site or deliver services (for example, form delivery via FormSubmit, email hosting, analytics, and advertising platforms).",
      "DISCOMs, banks, subsidy portals, and government agencies when required for net metering, PM Surya Ghar, or financing you request.",
      "Installers, suppliers, and professional advisers involved in your project.",
      "Authorities when required by applicable law or to protect safety and legal rights.",
    ],
  },
  {
    id: "retention",
    title: "5. Data retention",
    paragraphs: [
      "We retain inquiry and customer records for as long as needed to fulfil the purposes above, manage warranties and AMC, resolve disputes, and meet legal or tax obligations. When data is no longer required, we delete or anonymise it where reasonably possible.",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and analytics",
    paragraphs: [
      "The Site uses essential functionality without requiring analytics cookies. If you click “Accept analytics” on our cookie banner, we may load Google Analytics 4 and Meta Pixel to measure traffic and campaign performance. You can decline optional cookies and still use the Site.",
      "You can change your choice by clearing site data in your browser or contacting us. For more on browser controls, see your browser’s help documentation.",
    ],
  },
  {
    id: "rights",
    title: "7. Your rights",
    paragraphs: [
      "Depending on applicable law (including India’s Digital Personal Data Protection Act, 2023, where it applies), you may have rights to access, correct, erase, or restrict certain processing of your personal data, and to withdraw consent where processing is consent-based.",
      "To exercise these rights, contact us using the details below. We may need to verify your identity before responding.",
    ],
  },
  {
    id: "security",
    title: "8. Security",
    paragraphs: [
      "We use reasonable administrative and technical measures to protect personal information. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.",
    ],
  },
  {
    id: "children",
    title: "9. Children",
    paragraphs: [
      "The Site is not directed at children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us data, please contact us so we can delete it.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the Site after changes means you accept the revised policy.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    title: "1. Agreement",
    paragraphs: [
      "These Terms and Conditions (“Terms”) govern your access to and use of the ELRIX ENERGY website and any information, tools, or materials provided on it. The Site is operated by ELRIX ENERGY SOLAR SOLUTIONS, headquartered in Nellore, Andhra Pradesh, India.",
      "Separate written agreements, quotations, and work orders govern actual solar design, supply, and installation. If there is a conflict between these Terms and a signed customer contract, the signed contract prevails for that project.",
    ],
  },
  {
    id: "use-of-site",
    title: "2. Use of the website",
    paragraphs: ["You agree to use the Site only for lawful purposes. You must not:"],
    listItems: [
      "Attempt to gain unauthorised access to our systems or data.",
      "Submit false, misleading, or abusive inquiries.",
      "Scrape, copy, or republish Site content without our written permission.",
      "Use the Site in any way that could harm ELRIX ENERGY, other users, or third parties.",
    ],
  },
  {
    id: "quotes-calculators",
    title: "3. Quotes, calculators, and information",
    paragraphs: [
      "Savings figures, system sizes, subsidy amounts, EMI estimates, and pricing shown on the Site or calculators are indicative only. Actual generation depends on roof space, shading, equipment selection, DISCOM rules, and consumption patterns.",
      "Government subsidy schemes, tariffs, and regulations may change without notice. Final eligibility and amounts are determined by the relevant authorities.",
      "A binding offer is created only when we issue a formal quotation or agreement accepted by you in writing (including email confirmation where stated).",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual property",
    paragraphs: [
      "All content on the Site—including text, logos, images, layouts, and software—is owned by ELRIX ENERGY or its licensors and protected by applicable intellectual property laws. You may view and print pages for personal, non-commercial reference only.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-party links and services",
    paragraphs: [
      "The Site may link to third-party websites (for example, maps, social media, or government portals). We are not responsible for their content or privacy practices. Your use of third-party services is at your own risk.",
    ],
  },
  {
    id: "disclaimer",
    title: "6. Disclaimers",
    paragraphs: [
      "The Site and its content are provided “as is” without warranties of any kind, whether express or implied, including fitness for a particular purpose or non-infringement, to the fullest extent permitted by law.",
      "We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    id: "liability",
    title: "7. Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, ELRIX ENERGY and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on Site content.",
      "Our total liability for claims relating to the Site (excluding liability that cannot be excluded under law) shall not exceed the amount you paid us, if any, for services in the twelve months before the claim, or INR 5,000, whichever is greater.",
    ],
  },
  {
    id: "indemnity",
    title: "8. Indemnity",
    paragraphs: [
      "You agree to indemnify and hold harmless ELRIX ENERGY against claims, losses, and expenses arising from your breach of these Terms or misuse of the Site, except where caused by our wilful misconduct.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing law and disputes",
    paragraphs: [
      "These Terms are governed by the laws of India. Courts at Nellore, Andhra Pradesh, shall have exclusive jurisdiction over disputes arising from the Site, subject to any mandatory consumer protections that apply to you.",
      "We encourage you to contact us first to resolve concerns amicably before pursuing formal proceedings.",
    ],
  },
  {
    id: "changes-terms",
    title: "10. Changes",
    paragraphs: [
      "We may revise these Terms at any time by posting an updated version on the Site. Your continued use after the effective date constitutes acceptance of the revised Terms.",
    ],
  },
];
