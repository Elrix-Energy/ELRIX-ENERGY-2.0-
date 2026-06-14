import { ImageResponse } from "next/og";
import { BRAND } from "./siteConfig";

export const OG_SIZE = { width: 1200, height: 630 } as const;

type OgVariant = "home" | "city" | "page";

interface OgImageOptions {
  variant: OgVariant;
  city?: string;
  tagline?: string;
  title?: string;
  subtitle?: string;
}

/** Branded 1200×630 Open Graph image (home, city, and inner routes). */
export function createOgImage({ variant, city, tagline, title, subtitle }: OgImageOptions) {
  const displayTitle =
    variant === "home"
      ? BRAND.name
      : variant === "city"
        ? `Solar Company in ${city}`
        : (title ?? BRAND.name);

  const displaySubtitle =
    variant === "home"
      ? "Premium Solar EPC · Nellore · Tirupati · Kadapa · Ongole"
      : variant === "city"
        ? (tagline ?? "MNRE Certified · PM Surya Ghar Subsidy up to Rs. 78,000")
        : (subtitle ?? "MNRE Certified · APSPDCL Empanelled · Andhra Pradesh");

  const titleSize = variant === "page" ? "52px" : variant === "home" ? "64px" : "56px";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0B1F3A 0%, #102A50 55%, #0B1F3A 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#F5B400",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "#0B1F3A",
            }}
          >
            E
          </div>
          <span style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            {BRAND.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div style={{ fontSize: titleSize, fontWeight: 800, lineHeight: 1.1 }}>
            {displayTitle}
          </div>
          <div style={{ fontSize: "28px", color: "#E2E8F0", lineHeight: 1.4 }}>
            {displaySubtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "22px",
            color: "#F5B400",
            fontWeight: 600,
          }}
        >
          <span>MNRE Certified</span>
          <span>APSPDCL Empanelled</span>
          <span>PM Surya Ghar</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export function createPageOgImage(title: string, subtitle: string) {
  return createOgImage({ variant: "page", title, subtitle });
}

export function cityOgImagePath(slug: string): string {
  return `/solar-company-${slug}/opengraph-image`;
}

export function routeOgImagePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${normalized}/opengraph-image`;
}

export const HOME_OG_IMAGE_PATH = "/opengraph-image";
