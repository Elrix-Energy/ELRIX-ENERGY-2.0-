"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return false;

      const element = document.getElementById(hash.replace("#", ""));
      if (!element) return false;

      const behavior = prefersReducedMotion() ? "auto" : "smooth";

      setTimeout(() => {
        element.scrollIntoView({ behavior, block: "start" });
      }, 100);
      return true;
    };

    if (!scrollToHash()) window.scrollTo(0, 0);

    const onHashChange = () => {
      scrollToHash();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
