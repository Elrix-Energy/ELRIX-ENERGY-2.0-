"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Calculator } from "lucide-react";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function FloatingCalculator() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const behavior = prefersReducedMotion() ? "auto" : "smooth";

    if (pathname === "/") {
      const calculator = document.getElementById("calculator");
      if (calculator) {
        calculator.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }

    router.push("/#calculator");
  };

  return (
    <Link
      href="/#calculator"
      onClick={handleClick}
      className="floating-calc-btn"
      aria-label="Open Solar Calculator"
    >
      <Calculator size={28} aria-hidden="true" />
      <span className="tooltip">Calculate Savings</span>
    </Link>
  );
}
