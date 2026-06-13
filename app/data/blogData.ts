/**
 * Blog posts — keep in TypeScript until Sanity CMS is connected (see app/data/README.md).
 */

export interface BlogArticle {
  /** URL slug — used as the dynamic route segment `/blog/[id]` */
  id: string;
  slug: string;
  title: string;
  /** Shorter browser/social title (template adds brand suffix). */
  seoTitle: string;
  /** Long-form display date shown in the UI */
  date: string;
  /** ISO 8601 publish date — used in JSON-LD and OG `publishedTime` */
  publishedDate: string;
  /** ISO 8601 last-updated date for JSON-LD `dateModified` */
  modifiedDate: string;
  author: string;
  /** Unsplash (or other) credit line shown under the hero image */
  imageCredit?: string;
  /** Short summary shown on the blog listing card */
  summary: string;
  /** SEO meta description (≤ 160 chars) */
  description: string;
  /** Path to the article-specific OG image. Falls back to site default if absent. */
  image: string;
  /** Keyword phrases for `<meta keywords>` and JSON-LD */
  keywords: string[];
  /** Full article HTML body */
  content: string;
  ctaText: string;
  ctaSubtext: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'nellore-solar-capital',
    slug: 'nellore-solar-capital',
    title: 'Why Nellore and Ongole Are Becoming Andhra Pradesh\'s Solar Capitals in 2026',
    seoTitle: 'Nellore & Ongole Solar Capitals in 2026',
    date: 'February 12, 2026',
    publishedDate: '2026-02-12T00:00:00+05:30',
    modifiedDate: '2026-02-12T00:00:00+05:30',
    author: 'ELRIX ENERGY Editorial',
    summary: 'With over 300 sunny days a year, Nellore and Ongole are perfectly positioned to lead the state in renewable energy. Discover why local homeowners are switching faster than ever.',
    description: 'Why Nellore and Ongole lead Andhra Pradesh in solar adoption — 300 sunny days, local EPC advantage, and fast net metering approvals. Learn how ELRIX ENERGY powers this shift.',
    image: '/blog/nellore-solar-capital.webp',
    imageCredit: 'Photo: Andreas Gücklund / Unsplash',
    keywords: ['solar company Nellore', 'solar company Ongole', 'rooftop solar Nellore', 'solar panels Andhra Pradesh', 'net metering Nellore', 'ELRIX ENERGY Nellore'],
    content: `
      <h2>The Clear Advantage of Nellore's Climate</h2>
      <p>When it comes to solar energy yield, geography is everything. <strong>Nellore</strong> and <strong>Ongole</strong> are geographically blessed with over 300 days of uninterrupted direct sunlight annually. This puts the coastal and inland districts of Andhra Pradesh in the absolute top percentile for optimal solar photovoltaic (PV) generation in India.</p>
      <h2>Why Local Matters in Ongole and Nellore</h2>
      <p>As out-of-state mega-corporations try to force entry into the Andhra Pradesh market, thousands of residents are quickly learning the value of choosing a local EPC (Engineering, Procurement, and Construction) provider. At <strong>ELRIX ENERGY</strong>, we dispatch our elite local engineers directly to your site in Nellore and Ongole within 24 hours. Because we operate natively in this grid layout, our approval times for Net Metering are a fraction of what external companies promise.</p>
      <h2>The Timeline for ROI</h2>
      <p>If your monthly electricity bill in Nellore exceeds ₹2,000, installing a premium grid-tied solar system typically pays for itself completely in under 3 to 4 years. From that point onward, the energy generated for the remaining 20+ years of the panel's lifespan is entirely free. As grid prices inevitably rise over the next decade, early adopters in our local districts will see mathematically compounding monthly savings.</p>
    `,
    ctaText: 'Ready to Switch to Solar in Nellore & Ongole?',
    ctaSubtext: 'Get priority local installation from our expert engineers within 24 hours.',
  },
  {
    id: 'pm-surya-ghar-tirupati-kadapa',
    slug: 'pm-surya-ghar-tirupati-kadapa',
    title: 'The Complete Guide to PM Surya Ghar Subsidy for Tirupati & Kadapa',
    seoTitle: 'PM Surya Ghar Guide for Tirupati & Kadapa',
    date: 'March 05, 2026',
    publishedDate: '2026-03-05T00:00:00+05:30',
    modifiedDate: '2026-03-05T00:00:00+05:30',
    author: 'ELRIX ENERGY Editorial',
    summary: 'Confused by the PM Surya Ghar scheme? We break down exactly how much subsidy you are owed and how ELRIX ENERGY secures it for you across Kadapa and Tirupati.',
    description: 'Complete guide to the PM Surya Ghar Muft Bijli Yojana subsidy for Tirupati and Kadapa residents — subsidy tiers, eligibility, and how ELRIX ENERGY handles 100% of the paperwork.',
    image: '/blog/pm-surya-ghar-tirupati-kadapa.webp',
    imageCredit: 'Photo: R ARCHITECTURE / Unsplash',
    keywords: ['PM Surya Ghar subsidy Tirupati', 'PM Surya Ghar Kadapa', 'solar subsidy Andhra Pradesh 2026', 'ELRIX ENERGY Tirupati', 'rooftop solar subsidy India', '₹78000 solar subsidy'],
    content: `
      <h2>Demystifying the Subsidy</h2>
      <p>The <strong>PM Surya Ghar Muft Bijli Yojana</strong> is revolutionizing the speed of solar adoption across India, but navigating the bureaucratic paperwork in specific districts like <strong>Tirupati</strong> and <strong>Kadapa</strong> can be incredibly intimidating for the average homeowner.</p>
      <h2>Exactly How Much Money Do You Get?</h2>
      <p>The central government clearly defines the subsidy tiers for residential installations. For a 1kW system, the subsidy is ₹30,000. It increases to ₹60,000 for a 2kW system, and hits a maximum cap of ₹78,000 for systems 3kW and larger. For high-energy residential homes in the hotter climates of Kadapa, a 3kW to 5kW system is universally recommended by structural engineers.</p>
      <h2>How ELRIX ENERGY Destroys the Hassle</h2>
      <p>Instead of manually submitting applications, tracking state board portals, and fighting for grid inspection dates in the Tirupati electrical zones, <strong>ELRIX ENERGY</strong> acts as your total proxy. We are professionally empaneled and natively integrated with local discoms. When you contract us, we automatically file your PM Surya Ghar application, manage the site inspections, and ensure the ₹78,000 goes straight to you without a single headache.</p>
    `,
    ctaText: 'Claim Your ₹78,000 PM Surya Ghar Subsidy Today',
    ctaSubtext: 'Let us handle 100% of the paperwork and discom approvals for your Tirupati or Kadapa home.',
  },
  {
    id: 'commercial-solar-epc-nellore',
    slug: 'commercial-solar-epc-nellore',
    title: 'How Heavy Industries in Nellore Slash Operational Costs with Solar',
    seoTitle: 'Industrial Solar Savings in Nellore',
    date: 'April 10, 2026',
    publishedDate: '2026-04-10T00:00:00+05:30',
    modifiedDate: '2026-04-10T00:00:00+05:30',
    author: 'ELRIX ENERGY Editorial',
    summary: 'For MSMEs and massive industrial complexes in Nellore, energy overhead is the biggest threat to margins. See how commercial PV arrays drive instant profitability.',
    description: 'How commercial and industrial businesses in Nellore cut energy costs by 60–80% with rooftop solar — including the 40% accelerated depreciation tax benefit under Section 32.',
    image: '/blog/commercial-solar-epc-nellore.webp',
    imageCredit: 'Photo: Science in HD / Unsplash',
    keywords: ['commercial solar Nellore', 'industrial solar EPC Andhra Pradesh', 'accelerated depreciation solar', 'Section 32 solar India', 'MSME solar Nellore', 'solar ROI commercial India'],
    content: `
      <h2>The MSME Energy Crisis</h2>
      <p>Operating a medium-to-large scale industrial facility in the <strong>Nellore</strong> commercial sector requires massive, continuous power draw. For years, fluctuating industrial electricity tariffs have squeezed the profit margins out of local manufacturing, cold storage, and processing plants.</p>
      <h2>The Accelerated Depreciation Loophole</h2>
      <p>Most commercial buyers solely look at the monthly bill reduction. However, installing a commercial solar array unlocks an incredible tax weapon for Indian businesses: <strong>Accelerated Depreciation (AD)</strong>. Commercial entities can claim up to 40% depreciation on the solar asset exactly within the first year of installation. This significantly reduces the company's taxable income, drastically pulling the ultimate Return on Investment (ROI) timeline down to just 2 to 3 years.</p>
      <h2>Our Commercial EPC Framework</h2>
      <p>Heavy-duty energy requires heavy-duty engineering. At <strong>ELRIX ENERGY</strong>, we design tier-1 megawatt-capable arrays for empty factory rooftops and vast industrial complexes across Nellore and surrounding districts. We handle the heavy lifting: specialized grid synchronization, transformer loading, high-durability mounting structures securely tracking heavy wind loads, and zero-downtime integration.</p>
    `,
    ctaText: 'Slash Your Industry\'s Energy Costs & Claim 40% Depreciation',
    ctaSubtext: 'Get a custom megawatt-capable commercial EPC consultation for your Nellore facility.',
  },
  {
    id: 'solar-panel-cost-andhra-pradesh-2026',
    slug: 'solar-panel-cost-andhra-pradesh-2026',
    title: 'Solar Panel Cost in Andhra Pradesh 2026: Full Price Breakdown with Subsidy',
    seoTitle: 'Solar Panel Cost in AP 2026 (With Subsidy)',
    date: 'May 01, 2026',
    publishedDate: '2026-05-01T00:00:00+05:30',
    modifiedDate: '2026-05-01T00:00:00+05:30',
    author: 'ELRIX ENERGY Editorial',
    summary: 'Wondering how much solar costs in Andhra Pradesh in 2026? We break down residential system prices before and after PM Surya Ghar subsidy, inverter costs, and real ROI figures for Nellore, Tirupati, Kadapa and Ongole.',
    description: 'Solar panel cost in Andhra Pradesh 2026: complete price table for 1kW–10kW systems before and after PM Surya Ghar subsidy, with real ROI timelines for Nellore, Tirupati, Kadapa and Ongole.',
    image: '/blog/solar-panel-cost-andhra-pradesh-2026.webp',
    imageCredit: 'Photo: American Public Power Association / Unsplash',
    keywords: ['solar panel cost Andhra Pradesh 2026', 'solar price Nellore', 'solar cost Tirupati', '1kW solar cost India 2026', '3kW solar cost after subsidy', 'solar ROI Andhra Pradesh'],
    content: `
      <h2>What Does a Solar System Actually Cost in AP?</h2>
      <p>One of the biggest myths in the solar industry is that rooftop solar is too expensive. In <strong>Andhra Pradesh</strong> in 2026, a complete Tier-1 residential solar system costs approximately <strong>₹55,000–₹65,000 per kW</strong> before subsidy. After applying the PM Surya Ghar government subsidy, your net cost drops dramatically.</p>
      <h2>Realistic Price Table (After Subsidy)</h2>
      <p>Here is a clear breakdown for common residential system sizes in Nellore, Tirupati, Kadapa, and Ongole:</p>
      <ul>
        <li><strong>1 kW system:</strong> Gross ₹65,000 → Subsidy ₹30,000 → Net cost ≈ ₹35,000</li>
        <li><strong>2 kW system:</strong> Gross ₹1,30,000 → Subsidy ₹60,000 → Net cost ≈ ₹70,000</li>
        <li><strong>3 kW system:</strong> Gross ₹1,70,000 → Subsidy ₹78,000 → Net cost ≈ ₹92,000</li>
        <li><strong>5 kW system:</strong> Gross ₹2,70,000 → Subsidy ₹78,000 → Net cost ≈ ₹1,92,000</li>
      </ul>
      <h2>What Is Included in the Price?</h2>
      <p>A complete EPC package from <strong>ELRIX ENERGY</strong> includes ALMM-listed Tier-1 solar panels, a premium string inverter, heavy-duty HDGI mounting structure (cyclone-rated for coastal AP), all wiring, DC protection, AC distribution board, installation labour, and net metering application fees.</p>
      <h2>ROI: When Does Solar Pay for Itself?</h2>
      <p>Based on current APSPDCL tariffs in Nellore (approximately ₹6–₹8 per unit), a 3 kW system generating around 360 units per month saves approximately ₹2,500–₹3,000 per month. At that rate, a net investment of ₹92,000 (after subsidy) pays off fully in approximately <strong>30–37 months</strong> — after which your electricity is free for 22+ more years.</p>
    `,
    ctaText: 'Get an Exact Quote for Your Home in AP',
    ctaSubtext: 'Free roof analysis and detailed BOQ within 24 hours for Nellore, Tirupati, Kadapa & Ongole.',
  },
  {
    id: 'on-grid-vs-hybrid-solar-andhra-pradesh',
    slug: 'on-grid-vs-hybrid-solar-andhra-pradesh',
    title: 'On-Grid vs Hybrid Solar: Which System Is Right for Andhra Pradesh Homes?',
    seoTitle: 'On-Grid vs Hybrid Solar for AP Homes',
    date: 'May 12, 2026',
    publishedDate: '2026-05-12T00:00:00+05:30',
    modifiedDate: '2026-05-12T00:00:00+05:30',
    author: 'ELRIX ENERGY Editorial',
    summary: 'Should you install a standard on-grid system or invest in a hybrid system with batteries? We compare costs, benefits, and the right choice for homes in Nellore, Tirupati, Kadapa and Ongole based on local grid reliability.',
    description: 'On-grid vs hybrid solar system comparison for Andhra Pradesh homes — costs, battery backup benefits, net metering, and the right choice for Nellore, Tirupati, Kadapa and Ongole based on local grid conditions.',
    image: '/blog/on-grid-vs-hybrid-solar-andhra-pradesh.webp',
    imageCredit: 'Photo: Vivint Solar / Unsplash',
    keywords: ['on-grid vs hybrid solar India', 'hybrid solar system Andhra Pradesh', 'solar with battery backup Nellore', 'net metering vs hybrid', 'best solar system Tirupati', 'grid-tied solar Kadapa Ongole'],
    content: `
      <h2>Understanding On-Grid Solar Systems</h2>
      <p>An <strong>on-grid (grid-tied) solar system</strong> is directly connected to the APSPDCL distribution grid. During the day, your panels generate power that runs your home first. Any excess is exported to the grid and credited to you via <strong>Net Metering</strong> — a powerful mechanism that effectively uses the grid as a free battery. These systems are the most cost-effective option and are the standard recommendation for most Nellore and Tirupati homeowners.</p>
      <h2>The Catch: Power Cuts</h2>
      <p>Standard on-grid systems shut down automatically during a grid power outage. This is mandatory for the safety of DISCOM linesmen. In areas of <strong>Kadapa</strong> and parts of <strong>Ongole</strong> that experience frequent load-shedding, this is a critical consideration.</p>
      <h2>Hybrid Systems: The Best of Both Worlds</h2>
      <p>A <strong>hybrid solar system</strong> includes a battery storage unit — typically a lithium-ion battery bank. This allows the system to continue powering your home during grid outages. The solar panels charge the batteries during the day, and the inverter automatically switches to battery power during blackouts. Hybrid systems are ideal for homes with sensitive electronics, home offices, or medical equipment.</p>
      <h2>Cost Comparison for AP Homeowners</h2>
      <p>For a 3 kW residential system in Nellore:</p>
      <ul>
        <li><strong>On-Grid:</strong> Net cost after subsidy ≈ ₹92,000. ROI in 30–37 months.</li>
        <li><strong>Hybrid (with 5 kWh battery):</strong> Net cost ≈ ₹1,80,000–₹2,20,000. ROI in 48–60 months but provides full energy independence.</li>
      </ul>
      <h2>Our Recommendation</h2>
      <p>For most homeowners in <strong>Nellore and Tirupati</strong> where the grid is relatively stable, an on-grid system provides the fastest ROI. For areas with frequent power cuts in <strong>Kadapa and Ongole</strong>, or for customers who want complete energy independence, <strong>ELRIX ENERGY</strong> recommends a hybrid system with a lithium-ion battery bank.</p>
    `,
    ctaText: 'Not Sure Which System is Right for You?',
    ctaSubtext: 'Our engineers will assess your local grid conditions and energy needs and recommend the perfect solution for free.',
  },
];
