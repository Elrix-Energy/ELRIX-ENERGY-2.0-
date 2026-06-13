import {
  buildAreaServedLocalBusinessSchema,
  buildNelloreLocalBusinessSchema,
} from "./citySchema";

export interface CityFaq {
  q: string;
  a: string;
}

export interface UniquePoint {
  iconName: string;
  title: string;
  desc: string;
}

export interface CityService {
  title: string;
  desc: string;
  link: string;
}

/** Structured “why” copy — no HTML strings. */
export interface WhySectionContent {
  parts: Array<{ text: string; strong?: boolean }>;
}

export interface CityPageData {
  slug: string;
  path: string;
  city: string;
  state: string;
  tagline: string;
  intro: string;
  whySection: WhySectionContent;
  uniquePoints: UniquePoint[];
  services: CityService[];
  faqs: CityFaq[];
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  localBusinessSchema: object;
}

const nellore: CityPageData = {
  slug: "nellore",
  path: "/solar-company-nellore",
  city: "Nellore",
  state: "Andhra Pradesh",
  tagline: "Headquartered Here. Built for Nellore's Climate.",
  intro:
    "With over 300 sunny days per year and Nellore's unique coastal climate, ELRIX ENERGY delivers cyclone-proof, Tier-1 solar installations tailored specifically for Nellore homes, businesses, and industries. Our team is local, response is within 24 hours, and we handle every step — from APSPDCL approvals to the PM Surya Ghar subsidy transfer.",
  whySection: {
    parts: [
      { text: "ELRIX ENERGY is headquartered in Nellore's Vedayapalem. We are not a distant company promising visits — we are " },
      { text: "your neighbours", strong: true },
      {
        text: ", with a local team that understands Nellore's grid, knows the APSPDCL inspectors, and has engineered structures to withstand the coastal winds that hit our district every monsoon season.",
      },
    ],
  },
  uniquePoints: [
    {
      iconName: "Sun",
      title: "300+ Sunny Days",
      desc: "Nellore's exceptional solar irradiance makes it one of India's best districts for PV yield — your panels work harder, your ROI comes faster.",
    },
    {
      iconName: "ShieldCheck",
      title: "APSPDCL Empanelled",
      desc: "Our official empanelment with the local DISCOM means faster net metering approvals, fewer complications, and guaranteed subsidy processing.",
    },
    {
      iconName: "IndianRupee",
      title: "Full Subsidy Management",
      desc: "We handle all PM Surya Ghar portal paperwork so you receive the full ₹78,000 Direct Benefit Transfer without lifting a finger.",
    },
    {
      iconName: "Wrench",
      title: "Cyclone-Proof Structures",
      desc: "Our HDGI mounting systems are certified for 180 km/h winds — essential for Nellore's coastal location and annual cyclone risk.",
    },
  ],
  services: [
    {
      title: "Residential Solar in Nellore",
      desc: "1kW to 10kW rooftop systems for Nellore homes. Includes subsidy application, net metering, and 25-year panel warranty.",
      link: "/services/residential",
    },
    {
      title: "Commercial Solar in Nellore",
      desc: "10kW to 500kW+ systems for offices, hospitals, hotels, and commercial complexes across Nellore district.",
      link: "/services/commercial",
    },
    {
      title: "Industrial Solar EPC",
      desc: "Megawatt-scale solar plants for factories and industrial campuses in and around Nellore's industrial zones.",
      link: "/services/industrial",
    },
    {
      title: "Solar Maintenance & AMC",
      desc: "Annual maintenance contracts for peak performance. Panel cleaning, inverter checkups, and 24/7 digital monitoring.",
      link: "/services/maintenance",
    },
  ],
  faqs: [
    {
      q: "Is ELRIX ENERGY based in Nellore?",
      a: "Yes. ELRIX ENERGY is headquartered at Vedayapalem, Nellore — 524004. We are a local company with a permanent presence in Nellore, not an out-of-state company claiming local presence.",
    },
    {
      q: "How long does solar installation take in Nellore?",
      a: "Our rapid deployment teams complete most residential installations in Nellore within 5–7 working days from site survey to grid connection, subject to APSPDCL inspection scheduling.",
    },
    {
      q: "Will my system survive Nellore's cyclone season?",
      a: "Absolutely. All our mounting structures use heavy-duty HDGI steel certified to withstand wind speeds of 180 km/h — far exceeding the typical cyclone loadings experienced in Nellore's coastal region.",
    },
    {
      q: "Can I get the PM Surya Ghar subsidy in Nellore?",
      a: "Yes. ELRIX ENERGY is APSPDCL-empanelled and handles the entire subsidy application process on your behalf. Eligible Nellore homeowners can receive up to ₹78,000 directly to their bank account.",
    },
  ],
  meta: {
    title: "Solar Company in Nellore | Best Solar EPC",
    description:
      "ELRIX ENERGY is Nellore's #1 MNRE-certified, APSPDCL-empanelled solar EPC company. Residential, commercial & industrial solar with PM Surya Ghar subsidy up to ₹78,000. Free site survey. Call +91 96404 84677.",
    ogTitle: "Solar Company in Nellore | ELRIX ENERGY – MNRE Certified",
    ogDescription:
      "Nellore's most trusted solar installer. PM Surya Ghar subsidy up to ₹78,000. Free site survey within 24 hours.",
  },
  localBusinessSchema: buildNelloreLocalBusinessSchema(),
};

const tirupati: CityPageData = {
  slug: "tirupati",
  path: "/solar-company-tirupati",
  city: "Tirupati",
  state: "Andhra Pradesh",
  tagline: "Powering the Pilgrim City with Clean Solar Energy.",
  intro:
    "Tirupati is one of Andhra Pradesh's fastest growing commercial and residential hubs. With high electricity demand from hotels, businesses, and residential colonies, solar is the smartest investment for Tirupati property owners. ELRIX ENERGY serves Tirupati with the same MNRE-certified, APSPDCL-empanelled expertise that powers Nellore — with 24-hour site survey response.",
  whySection: {
    parts: [
      {
        text: "Tirupati's unique combination of intense summer heat, a booming hospitality sector, and a rapidly growing residential population makes it one of the highest-potential solar markets in Andhra Pradesh. ",
      },
      { text: "ELRIX ENERGY", strong: true },
      {
        text: " brings its full end-to-end EPC capability to Tirupati, handling APSPDCL approvals, PM Surya Ghar subsidy applications, and premium Tier-1 installations from a single point of contact.",
      },
    ],
  },
  uniquePoints: [
    {
      iconName: "Sun",
      title: "High Solar Yield",
      desc: "Tirupati's semi-arid climate and consistent sunlight deliver excellent solar generation rates year-round, ensuring faster ROI for every installation.",
    },
    {
      iconName: "ShieldCheck",
      title: "APSPDCL Empanelled",
      desc: "We coordinate directly with the Tirupati APSPDCL zone for net metering approvals, ensuring no delays in your grid connection.",
    },
    {
      iconName: "IndianRupee",
      title: "₹78,000 Subsidy Support",
      desc: "Our team handles every step of the PM Surya Ghar application for Tirupati homeowners — from portal registration to your bank credit.",
    },
    {
      iconName: "Wrench",
      title: "Commercial Expertise",
      desc: "From hotels near Tirumala to large apartment complexes, we design and execute commercial solar systems that maximise OPEX savings.",
    },
  ],
  services: [
    {
      title: "Residential Solar in Tirupati",
      desc: "1kW to 10kW rooftop systems for Tirupati homes. Full PM Surya Ghar subsidy and net metering assistance included.",
      link: "/services/residential",
    },
    {
      title: "Commercial Solar in Tirupati",
      desc: "10kW to 500kW+ solar for Tirupati's hotels, hospitals, colleges, and commercial establishments. Accelerated depreciation benefits available.",
      link: "/services/commercial",
    },
    {
      title: "Industrial Solar EPC",
      desc: "Large-scale industrial solar for manufacturing facilities and warehouses in and around the Tirupati industrial corridor.",
      link: "/services/industrial",
    },
    {
      title: "Solar O&M Services",
      desc: "Comprehensive maintenance for existing solar systems in Tirupati. Panel cleaning, inverter health checks, and monitoring.",
      link: "/services/maintenance",
    },
  ],
  faqs: [
    {
      q: "Does ELRIX ENERGY serve Tirupati?",
      a: "Yes. ELRIX ENERGY actively installs and maintains solar systems across Tirupati. Our team can be at your site within 24 hours of your inquiry.",
    },
    {
      q: "Can hotels and dharamshalas in Tirupati benefit from solar?",
      a: "Absolutely. Commercial establishments in Tirupati can claim 40% Accelerated Depreciation in Year 1, drastically reducing their tax liability while cutting operational energy costs by 60–80%.",
    },
    {
      q: "How is the PM Surya Ghar subsidy processed in Tirupati?",
      a: "ELRIX ENERGY registers your application on the national PM Surya Ghar portal, coordinates with the Tirupati APSPDCL division for inspection, and files the commissioning report to trigger your Direct Benefit Transfer.",
    },
    {
      q: "What is the ROI for solar in Tirupati?",
      a: "Given Tirupati's solar irradiance and APSPDCL tariff rates, most residential systems achieve full ROI within 3 to 4 years. Commercial systems typically see ROI within 2–3 years due to depreciation benefits.",
    },
  ],
  meta: {
    title: "Solar Company in Tirupati | MNRE Certified Solar EPC",
    description:
      "ELRIX ENERGY is Tirupati's most trusted solar EPC company. Residential and commercial solar installations with PM Surya Ghar subsidy up to ₹78,000. APSPDCL empanelled.",
    ogTitle: "Solar Company in Tirupati | ELRIX ENERGY – MNRE Certified",
    ogDescription:
      "Tirupati's trusted solar installer. PM Surya Ghar subsidy support + free site survey within 24 hours.",
  },
  localBusinessSchema: buildAreaServedLocalBusinessSchema(
    "Tirupati",
    "/solar-company-tirupati",
    "MNRE-certified solar EPC serving Tirupati with residential and commercial solar installations and PM Surya Ghar subsidy management."
  ),
};

const kadapa: CityPageData = {
  slug: "kadapa",
  path: "/solar-company-kadapa",
  city: "Kadapa",
  state: "Andhra Pradesh",
  tagline: "Harnessing Kadapa's Intense Solar Potential.",
  intro:
    "Kadapa is one of Andhra Pradesh's hottest districts — making it one of the best locations in India for solar energy generation. High ambient temperatures drive electricity bills sky-high in Kadapa, while also delivering exceptional solar panel output. ELRIX ENERGY brings premium Tier-1 solar installations to Kadapa homes and industries with full PM Surya Ghar subsidy management and APSPDCL empanelment.",
  whySection: {
    parts: [
      {
        text: "Kadapa's extreme heat and abundant sunlight translate to some of the highest solar generation rates in Andhra Pradesh. With AC loads running for 8–10 months a year, ",
      },
      { text: "Kadapa homeowners typically see the fastest ROI", strong: true },
      {
        text: " among all four districts we serve — often recovering their investment in under 36 months after subsidy. ELRIX ENERGY's heat-tolerant, ALMM-certified panels are specifically selected for high-temperature performance.",
      },
    ],
  },
  uniquePoints: [
    {
      iconName: "Sun",
      title: "Peak Solar Performance",
      desc: "Kadapa's high Global Horizontal Irradiance (GHI) means your solar panels generate significantly more power per kW than the national average.",
    },
    {
      iconName: "ShieldCheck",
      title: "Heat-Resistant Components",
      desc: "We exclusively use ALMM-listed Tier-1 panels with low temperature coefficients — rated to perform efficiently even at Kadapa's peak summer temperatures.",
    },
    {
      iconName: "IndianRupee",
      title: "Maximum Subsidy Guaranteed",
      desc: "Our dedicated subsidy team ensures every eligible Kadapa homeowner receives the full ₹78,000 PM Surya Ghar benefit directly to their account.",
    },
    {
      iconName: "Wrench",
      title: "Mining & Industrial EPC",
      desc: "Kadapa's quarrying and mining sector has significant power needs. We deliver industrial solar EPC solutions that slash operational costs permanently.",
    },
  ],
  services: [
    {
      title: "Residential Solar in Kadapa",
      desc: "1kW to 10kW rooftop solar for Kadapa homes with full PM Surya Ghar subsidy and net metering assistance.",
      link: "/services/residential",
    },
    {
      title: "Commercial Solar in Kadapa",
      desc: "Solar for offices, shopping complexes, and educational institutions across Kadapa district with accelerated depreciation benefits.",
      link: "/services/commercial",
    },
    {
      title: "Industrial Solar EPC in Kadapa",
      desc: "Large-scale solar for Kadapa's mining, quarrying, and manufacturing facilities. Megawatt-capable design and execution.",
      link: "/services/industrial",
    },
    {
      title: "O&M & Maintenance",
      desc: "Regular maintenance and performance monitoring for existing solar systems in Kadapa to maintain peak output through hot summers.",
      link: "/services/maintenance",
    },
  ],
  faqs: [
    {
      q: "Does extreme heat affect solar panels in Kadapa?",
      a: "All panels experience some efficiency reduction at very high temperatures, which is why ELRIX ENERGY exclusively uses ALMM-listed Tier-1 panels with industry-leading low temperature coefficients — specifically chosen for Kadapa's climate.",
    },
    {
      q: "Is Kadapa a good location for solar?",
      a: "Yes — Kadapa is one of the best locations in AP for solar. High solar irradiance combined with long summer seasons means exceptional energy yield and among the fastest ROI timelines in the state.",
    },
    {
      q: "Can I get the subsidy in Kadapa?",
      a: "Yes. ELRIX ENERGY is APSPDCL-empanelled and handles the complete PM Surya Ghar subsidy application for Kadapa homeowners. You can receive up to ₹78,000 directly to your bank account.",
    },
    {
      q: "How quickly can ELRIX install solar in Kadapa?",
      a: "Our teams can reach Kadapa within 24 hours for a site survey. Installation typically completes within 7–10 working days, including APSPDCL coordination.",
    },
  ],
  meta: {
    title: "Solar Company in Kadapa | MNRE Certified Solar EPC",
    description:
      "ELRIX ENERGY installs premium solar systems in Kadapa, Andhra Pradesh. PM Surya Ghar subsidy up to ₹78,000 for residential customers. Industrial and commercial solar EPC. APSPDCL empanelled.",
    ogTitle: "Solar Company in Kadapa | ELRIX ENERGY – MNRE Certified",
    ogDescription: "Kadapa's trusted solar EPC. PM Surya Ghar subsidy + free site survey within 24 hours.",
  },
  localBusinessSchema: buildAreaServedLocalBusinessSchema(
    "Kadapa",
    "/solar-company-kadapa",
    "MNRE-certified solar EPC company serving Kadapa with residential, commercial and industrial solar installations."
  ),
};

const ongole: CityPageData = {
  slug: "ongole",
  path: "/solar-company-ongole",
  city: "Ongole",
  state: "Andhra Pradesh",
  tagline: "Cyclone-Proof Solar for Ongole's Coastal Climate.",
  intro:
    "Ongole sits on the coastal belt of Prakasam district — a region blessed with exceptional solar radiation from its position near the Bay of Bengal, but also exposed to coastal winds and cyclones. ELRIX ENERGY specifically engineers every Ongole installation with HDGI mounting structures certified for 180 km/h winds, ensuring your solar investment is permanently safe regardless of the season.",
  whySection: {
    parts: [
      {
        text: "Most solar companies use standard mounting structures that are not built for coastal wind loads. ",
      },
      { text: "ELRIX ENERGY uses heavy-duty HDGI steel structures", strong: true },
      {
        text: " — the same grade used in cyclone shelters — specifically engineered for Ongole's coastal exposure. Combined with our APSPDCL empanelment, PM Surya Ghar expertise, and local dispatch capability, we are the only EPC partner you need in Ongole.",
      },
    ],
  },
  uniquePoints: [
    {
      iconName: "Sun",
      title: "Coastal Solar Advantage",
      desc: "Ongole's coastal location provides excellent GHI values with consistent year-round sunlight, delivering strong solar generation even during monsoon months.",
    },
    {
      iconName: "Wrench",
      title: "180 km/h Cyclone Rating",
      desc: "Every ELRIX installation in Ongole uses HDGI mounting structures specifically designed and tested for the high wind speeds of the Prakasam coastal belt.",
    },
    {
      iconName: "ShieldCheck",
      title: "APSPDCL Empanelled",
      desc: "Our official empanelment with the Southern APSPDCL region ensures streamlined net metering and subsidy approvals for Ongole customers.",
    },
    {
      iconName: "IndianRupee",
      title: "Full Subsidy Processing",
      desc: "We manage 100% of your PM Surya Ghar application from registration to the ₹78,000 Direct Benefit Transfer reaching your account.",
    },
  ],
  services: [
    {
      title: "Residential Solar in Ongole",
      desc: "Cyclone-proof 1kW–10kW rooftop solar for Ongole homes. Includes PM Surya Ghar subsidy, net metering, and 25-year warranty.",
      link: "/services/residential",
    },
    {
      title: "Commercial Solar in Ongole",
      desc: "10kW to 500kW+ commercial systems for Ongole's aquaculture, hospitality, and commercial sectors with accelerated depreciation benefits.",
      link: "/services/commercial",
    },
    {
      title: "Industrial Solar EPC",
      desc: "Megawatt-scale industrial solar for Ongole's processing facilities, cold storage units, and manufacturing plants.",
      link: "/services/industrial",
    },
    {
      title: "AMC & O&M Services",
      desc: "Scheduled maintenance and performance monitoring — particularly important in Ongole's salt-air coastal environment.",
      link: "/services/maintenance",
    },
  ],
  faqs: [
    {
      q: "Will solar panels survive cyclones in Ongole?",
      a: "Yes. ELRIX ENERGY uses HDGI (Hot-Dip Galvanized Iron) mounting structures rated for 180 km/h wind speeds — well above the Category 3 cyclone benchmark relevant to Ongole's coastal zone. The panels themselves are also IEC 61215 certified for high mechanical load.",
    },
    {
      q: "Does salt air from the coast damage solar panels?",
      a: "Tier-1 panels use tempered, anti-reflective glass and robust aluminium frames that are corrosion-resistant. ELRIX ENERGY additionally uses marine-grade fasteners and coatings for all Ongole installations in coastal proximity.",
    },
    {
      q: "Is Ongole eligible for PM Surya Ghar subsidy?",
      a: "Yes. Ongole falls under the APSPDCL service area and is fully eligible for the PM Surya Ghar subsidy scheme. Residential homeowners can receive up to ₹78,000 directly to their bank account.",
    },
    {
      q: "How quickly can you install solar in Ongole?",
      a: "We can dispatch a survey team to Ongole within 24 hours. Full installation, including APSPDCL inspection and net metering application, is typically completed within 7–10 working days.",
    },
  ],
  meta: {
    title: "Solar Company in Ongole | MNRE Certified Solar EPC",
    description:
      "ELRIX ENERGY installs cyclone-proof, Tier-1 solar systems in Ongole, Andhra Pradesh. PM Surya Ghar subsidy up to ₹78,000. Residential and commercial EPC with APSPDCL empanelment.",
    ogTitle: "Solar Company in Ongole | ELRIX ENERGY – Cyclone-Proof Solar",
    ogDescription:
      "Ongole's trusted solar installer. Cyclone-rated structures + PM Surya Ghar subsidy + 24-hour site survey.",
  },
  localBusinessSchema: buildAreaServedLocalBusinessSchema(
    "Ongole",
    "/solar-company-ongole",
    "MNRE-certified solar EPC serving Ongole with cyclone-proof residential and commercial solar installations."
  ),
};

export const cityPages: Record<string, CityPageData> = {
  nellore,
  tirupati,
  kadapa,
  ongole,
};

export function getCityPageData(slug: string): CityPageData {
  const data = cityPages[slug];
  if (!data) throw new Error(`Unknown city slug: ${slug}`);
  return data;
}

/** Other cities for internal linking (excludes current). */
export function getOtherCities(currentSlug: string) {
  return Object.values(cityPages).filter((c) => c.slug !== currentSlug);
}
