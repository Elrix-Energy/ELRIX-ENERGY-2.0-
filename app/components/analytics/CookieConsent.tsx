"use client";

import Link from "next/link";
import styles from "./CookieConsent.module.css";

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

export default function CookieConsent({ onAccept, onReject }: CookieConsentProps) {
  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <p id="cookie-consent-title" className={styles.title}>
        Cookie preferences
      </p>
      <p id="cookie-consent-desc" className={styles.text}>
        We use cookies and similar technologies through Google Analytics and Meta Pixel to
        understand how visitors use our site and measure ad performance. You can accept or
        decline optional analytics cookies. Essential site functions work either way.{" "}
        <Link href="/privacy" className={styles.privacyLink}>
          Privacy Policy
        </Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className="btn btn-outline btn-sm" onClick={onReject}>
          Decline
        </button>
        <button type="button" className="btn btn-primary btn-sm" onClick={onAccept}>
          Accept analytics
        </button>
      </div>
    </div>
  );
}
