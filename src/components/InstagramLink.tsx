import type { ReactNode } from "react";
import { site } from "@/lib/site";

type InstagramLinkProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function InstagramLink({
  children,
  className,
  "aria-label": ariaLabel,
}: InstagramLinkProps) {
  return (
    <a
      href={site.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" focusable="false">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.15" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.15" cy="6.85" r="1.15" fill="currentColor" />
    </svg>
  );
}
