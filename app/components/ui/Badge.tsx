import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "success" | "brand";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

export default function Badge({
  children,
  className = "",
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span className={`ui-badge ui-badge--${variant} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
