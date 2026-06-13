import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "elevated" | "outlined" | "glass" | "accent" | "result";
type CardPadding = "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
}

export default function Card({
  children,
  className = "",
  variant = "elevated",
  padding = "md",
  ...props
}: CardProps) {
  return (
    <div
      className={`ui-card ui-card--${variant} ui-card--pad-${padding} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
