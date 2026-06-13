"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ANALYTICS_ENABLED,
  getStoredConsent,
  setStoredConsent,
  trackCtaClick,
  trackPhoneClick,
  trackWhatsAppClick,
  type ConsentStatus,
} from "@/app/lib/analytics";
import AnalyticsScripts from "./AnalyticsScripts";
import CookieConsent from "./CookieConsent";

interface AnalyticsProviderProps {
  children: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [consent, setConsent] = useState<ConsentStatus | null | "loading">("loading");

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  const accept = useCallback(() => {
    setStoredConsent("accepted");
    setConsent("accepted");
  }, []);

  const reject = useCallback(() => {
    setStoredConsent("rejected");
    setConsent("rejected");
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const location =
        anchor.getAttribute("data-analytics-location") ??
        anchor.closest("[data-analytics-location]")?.getAttribute("data-analytics-location") ??
        "page";

      if (href.startsWith("tel:")) {
        trackPhoneClick(location);
        return;
      }

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackWhatsAppClick(location);
        return;
      }

      if (href === "/contact" || href.startsWith("/contact?")) {
        const label =
          anchor.getAttribute("data-analytics-label") ??
          anchor.textContent?.trim().slice(0, 80) ??
          "contact";
        trackCtaClick(location, label, href);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [consent]);

  const showBanner = ANALYTICS_ENABLED && consent === null;

  return (
    <>
      {children}
      {consent === "accepted" ? <AnalyticsScripts /> : null}
      {showBanner ? <CookieConsent onAccept={accept} onReject={reject} /> : null}
    </>
  );
}
