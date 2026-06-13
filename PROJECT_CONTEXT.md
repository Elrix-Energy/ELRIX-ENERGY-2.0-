# ELRIX ENERGY - Project Context

## Overview
ELRIX ENERGY is a premium Solar EPC (Engineering, Procurement, and Construction) platform serving the Andhra Pradesh region (specifically Nellore, Kadapa, Tirupati, and Ongole). The primary objective of the web application is to drive lead generation and provide authoritative information regarding residential, commercial, and industrial solar installations, heavily emphasizing the **PM Surya Ghar Government Subsidy**.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript / React
- **Styling:** Vanilla CSS with CSS Variables (No Tailwind)
- **Icons:** `lucide-react`
- **Deployment:** Vercel

## Architecture & Directory Structure
- **`app/`**: Next.js App Router root.
  - **`components/`**: Reusable React components.
    - **`layout/`**: `Navbar.tsx`, `Footer.tsx`.
    - **`pages/`**: Main page templates (`Home.tsx`, `CityLanding.tsx`, `Subsidy.tsx`, `About.tsx`).
    - **`common/`**: Shared utilities like `Reveal.tsx` (for scroll animations).
  - **`styles/`**: Vanilla CSS files. Each major component or page has its own dedicated stylesheet (e.g., `Home.css`, `CityLanding.css`, `Navbar.css`), all of which are imported into `globals.css` or component files.
  - **`services/`**: Next.js route directory for individual service offerings.
  - **`blog/`**: Next.js route directory for SEO-targeted articles.

## Design System & Styling Rules
- **Color Palette & Variables:** Managed centrally in `app/styles/index.css` via CSS custom properties (`--primary`, `--primary-dark`, `--secondary`, `--text-dark`, `--text-light`, `--background`, `--white`).
- **Typography:**
  - Standardized Primary Hero Headers (`h1`): `3.5rem` on desktop, `2.2rem` on mobile.
  - Standardized Secondary/Inner Page Headers (`h1`): `3rem` on desktop, `2rem` on mobile.
  - Standardized Hero Subtext (`p`): `1.2rem` with `1.8` line-height.
- **Layouts:** 
  - Standard global container (`.container` in `index.css`) dictates the `max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;` structure.
  - Flexbox is used heavily, but hero background sections use `display: block` with inner flex-centering to prevent viewport scale rendering bugs.

## SEO & Accessibility Principles
- **Dynamic Routing:** City landing pages (e.g., `/solar-company-nellore`) are distinct routes mapped to the `CityLanding.tsx` component to maximize local SEO capture.
- **Accessibility (a11y):**
  - Interactive elements without text (e.g., hamburger menus, social icons) utilize `aria-label`.
  - Expanding sections (like FAQs) are built as true interactive elements (`role="button"`, `tabIndex={0}`, `aria-expanded`, and `onKeyDown` listeners for keyboard navigation).
  - Minimum WCAG AA Contrast passed (e.g., `--text-light` uses `#4b5563`).
  - Strict semantic heading hierarchy (`h1` -> `h2` -> `h3`) is maintained per page without skipping levels.

## Key Developer Workflows & Notes
1. **Adding a New Location:** Create a new route folder mapping to `CityLanding.tsx` and supply it with tailored content and local business schema JSON-LD.
2. **CSS Modularity:** Do not use Tailwind. If creating a new component, create a `.css` file in `app/styles/` and link it accordingly.
3. **Images:** Always use `.avif` or `.webp` for large assets like Hero Backgrounds to ensure optimal Lighthouse performance scores. 
4. **Build Process:** Use `npm run build` frequently. Next.js 15 App Router strictly enforces syntax checks. Ensure all React tags are properly closed to avoid Webpack compilation failures.
