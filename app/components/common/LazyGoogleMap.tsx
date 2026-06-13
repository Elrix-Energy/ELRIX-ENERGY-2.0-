"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/app/lib/siteConfig";
import styles from "./LazyGoogleMap.module.css";

interface LazyGoogleMapProps {
  className?: string;
  title?: string;
}

export default function LazyGoogleMap({
  className = "",
  title = "ELRIX Energy Location",
}: LazyGoogleMapProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`${styles.wrap} ${className}`.trim()}>
      {!shouldLoad && <div className={styles.placeholder} aria-hidden="true" />}
      {shouldLoad ? (
        <iframe
          title={title}
          src={CONTACT.mapsEmbed}
          className={styles.frame}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : null}
    </div>
  );
}
