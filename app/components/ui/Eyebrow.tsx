import type { HTMLAttributes, ReactNode } from "react";

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export default function Eyebrow({ children, className = "", ...props }: EyebrowProps) {
  return (
    <p className={`ui-eyebrow ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
