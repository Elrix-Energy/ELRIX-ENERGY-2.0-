/**
 * Project case studies — placeholder entries until final photos/copy are supplied.
 * Planned CMS: Sanity (see app/data/README.md).
 */

export type ProjectSegment = "Residential" | "Commercial" | "Industrial" | "Maintenance";

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  segment: ProjectSegment;
  location: string;
  capacity: string;
  summary: string;
  /** Path under /public — placeholder imagery until site photos are added */
  image: string;
  highlights: string[];
  /** When true, UI shows a “case study coming soon” badge */
  isPlaceholder: boolean;
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "nellore-residential-5kw",
    slug: "nellore-residential-5kw",
    title: "5 kW Rooftop Home — Nellore",
    segment: "Residential",
    location: "Nellore, Andhra Pradesh",
    capacity: "5 kW on-grid",
    summary:
      "Placeholder case study: Tier-1 DCR panels, PM Surya Ghar subsidy filing, and APSPDCL net metering for a high-consumption home in Nellore.",
    image: "/residential_solar.webp",
    highlights: ["PM Surya Ghar subsidy", "Net metering", "Cyclone-rated mounting"],
    isPlaceholder: true,
  },
  {
    id: "nellore-commercial-50kw",
    slug: "nellore-commercial-50kw",
    title: "50 kW Commercial Rooftop — Nellore",
    segment: "Commercial",
    location: "Nellore, Andhra Pradesh",
    capacity: "50 kW",
    summary:
      "Placeholder case study: OPEX reduction and accelerated depreciation planning for a commercial facility in Nellore district.",
    image: "/commercial_solar.webp",
    highlights: ["40% accelerated depreciation", "Load analysis", "Remote monitoring ready"],
    isPlaceholder: true,
  },
  {
    id: "kadapa-industrial-200kw",
    slug: "kadapa-industrial-200kw",
    title: "200 kW Industrial Plant — Kadapa",
    segment: "Industrial",
    location: "Kadapa, Andhra Pradesh",
    capacity: "200 kW",
    summary:
      "Placeholder case study: Industrial rooftop EPC with grid synchronization and zero-downtime commissioning protocol.",
    image: "/industrial_solar.webp",
    highlights: ["HT/LT integration", "SCADA-ready", "Heavy-duty structures"],
    isPlaceholder: true,
  },
  {
    id: "tirupati-residential-3kw",
    slug: "tirupati-residential-3kw",
    title: "3 kW PM Surya Ghar Home — Tirupati",
    segment: "Residential",
    location: "Tirupati, Andhra Pradesh",
    capacity: "3 kW",
    summary:
      "Placeholder case study: Maximum ₹78,000 subsidy tier with full DISCOM paperwork handled by ELRIX ENERGY.",
    image: "/residential_solar.webp",
    highlights: ["₹78,000 subsidy tier", "7-day install target", "Tier-1 ALMM modules"],
    isPlaceholder: true,
  },
  {
    id: "ongole-commercial-30kw",
    slug: "ongole-commercial-30kw",
    title: "30 kW Coastal Commercial — Ongole",
    segment: "Commercial",
    location: "Ongole, Andhra Pradesh",
    capacity: "30 kW",
    summary:
      "Placeholder case study: Coastal wind-load structural design for a commercial rooftop near the Prakasam coast.",
    image: "/commercial_solar.webp",
    highlights: ["180 km/h structure rating", "Salt-mist resilient BOS", "Export metering"],
    isPlaceholder: true,
  },
  {
    id: "nellore-amc-portfolio",
    slug: "nellore-amc-portfolio",
    title: "Annual Maintenance Portfolio — Nellore",
    segment: "Maintenance",
    location: "Nellore, Andhra Pradesh",
    capacity: "Multi-site AMC",
    summary:
      "Placeholder case study: Panel cleaning, inverter health checks, and performance reporting for installed systems across Nellore.",
    image: "/solar_maintenance.webp",
    highlights: ["Scheduled O&M", "Thermal imaging (annual)", "24/7 monitoring option"],
    isPlaceholder: true,
  },
];
