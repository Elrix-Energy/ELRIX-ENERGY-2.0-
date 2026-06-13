import { ImageResponse } from "next/og";
import { BRAND } from "./siteConfig";

export const OG_SIZE = { width: 1200, height: 630 } as const;

type OgVariant = "home" | "city";

interface OgImageOptions {
  variant: OgVariant;
  city?: string;
  tagline?: string;
}

/** Branded 1200×630 Open Graph image (home + city landing pages). */
export function createOgImage({ variant, city, tagline }: OgImageOptions) {
  const title =
    variant === "home"
      ? BRAND.name
      : `Solar Company in ${city}`;

  const subtitle =
    variant === "home"
      ? "Premium Solar EPC · Nellore · Tirupati · Kadapa · Ongole"
      : (tagline ?? "MNRE Certified · PM Surya Ghar Subsidy up to ₹78,000");

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
          <div style={{ fontSize: variant === "home" ? "64px" : "56px", fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: "28px", color: "#E2E8F0", lineHeight: 1.4 }}>{subtitle}</div>
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
    OG_SIZE
  );
}

export function cityOgImagePath(slug: string): string {
  return `/solar-company-${slug}/opengraph-image`;
}

export const HOME_OG_IMAGE_PATH = "/opengraph-image";
