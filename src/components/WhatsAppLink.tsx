import type { ReactNode } from "react";
import { site, whatsappUrl } from "@/lib/site";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message?: string;
  "aria-label"?: string;
};

export function WhatsAppLink({
  children,
  className,
  message = site.whatsappMessage,
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
