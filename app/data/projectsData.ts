/**
 * Project case studies — edit here until Sanity CMS is connected.
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
  /** Path under /public — omit until site photos are available */
  image?: string;
  highlights: string[];
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "bv-nagar-nellore-3kw",
    slug: "bv-nagar-nellore-3kw",
    title: "3 kW On-Grid Residential — B V Nagar, Nellore",
    segment: "Residential",
    location: "B V Nagar, Nellore",
    capacity: "3 kW on-grid",
    summary:
      "On-grid rooftop solar for a home in B V Nagar, Nellore — Tier-1 panels, APSPDCL net metering, and PM Surya Ghar subsidy support handled end-to-end.",
    highlights: ["On-grid system", "PM Surya Ghar eligible", "APSPDCL net metering"],
  },
  {
    id: "buchireddypalem-nellore-5kw",
    slug: "buchireddypalem-nellore-5kw",
    title: "5 kW On-Grid Residential — Buchireddypalem, Nellore",
    segment: "Residential",
    location: "Buchireddypalem, Nellore",
    capacity: "5 kW on-grid",
    summary:
      "5 kW on-grid residential installation in Buchireddypalem with cyclone-rated mounting and full DISCOM paperwork completed by the ELRIX Nellore team.",
    highlights: ["5 kW on-grid", "Cyclone-rated mounting", "Full DISCOM paperwork"],
  },
  {
    id: "ak-nagar-nellore-5kw-industrial",
    slug: "ak-nagar-nellore-5kw-industrial",
    title: "5 kW On-Grid Industrial — AK Nagar, Nellore",
    segment: "Industrial",
    location: "AK Nagar, Nellore",
    capacity: "5 kW on-grid",
    summary:
      "5 kW on-grid industrial rooftop system in AK Nagar, Nellore — engineered for reliable daytime load offset and grid export through net metering.",
    highlights: ["Industrial on-grid", "Net metering", "Load-optimised design"],
  },
  {
    id: "kota-tirupati-3kw",
    slug: "kota-tirupati-3kw",
    title: "3 kW On-Grid Residential — Kota, Tirupati",
    segment: "Residential",
    location: "Kota, Tirupati",
    capacity: "3 kW on-grid",
    summary:
      "3 kW on-grid home installation in Kota, Tirupati — subsidy documentation, rooftop survey, and commissioning delivered by ELRIX ENERGY.",
    highlights: ["3 kW on-grid", "Tirupati installation", "Subsidy documentation"],
  },
  {
    id: "magunta-layout-nellore-6kw",
    slug: "magunta-layout-nellore-6kw",
    title: "6 kW On-Grid Residential — Magunta Layout, Nellore",
    segment: "Residential",
    location: "Magunta Layout, Nellore",
    capacity: "6 kW on-grid",
    summary:
      "6 kW on-grid residential system in Magunta Layout, Nellore — sized for higher household consumption with Tier-1 modules and APSPDCL integration.",
    highlights: ["6 kW on-grid", "Higher-load home", "Tier-1 modules"],
  },
  {
    id: "stonehousepeta-nellore-3kw",
    slug: "stonehousepeta-nellore-3kw",
    title: "3 kW On-Grid Residential — Stonehousepeta, Nellore",
    segment: "Residential",
    location: "Stonehousepeta, Nellore",
    capacity: "3 kW on-grid",
    summary:
      "3 kW on-grid rooftop solar in Stonehousepeta, Nellore — compact residential deployment with net metering and post-install support from ELRIX ENERGY.",
    highlights: ["3 kW on-grid", "Stonehousepeta, Nellore", "Post-install support"],
  },
];
