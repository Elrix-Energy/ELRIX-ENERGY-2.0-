import type { HTMLAttributes, ReactNode } from "react";

type SectionBg = "white" | "background" | "light" | "brand";
type SectionPadding = "sm" | "md" | "lg";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  bg?: SectionBg;
  padding?: SectionPadding;
  contained?: boolean;
}

export default function Section({
  children,
  className = "",
  bg = "white",
  padding = "lg",
  contained = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={`ui-section ui-section--${bg} ui-section--${padding} ${className}`.trim()}
      {...props}
    >
      {contained ? <div className="container">{children}</div> : children}
    </section>
  );
}
