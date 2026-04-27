"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return false;

      const element = document.getElementById(hash.replace("#", ""));
      if (!element) return false;

      // Let layout settle (Navbar height/route paint) before scrolling.
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
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
