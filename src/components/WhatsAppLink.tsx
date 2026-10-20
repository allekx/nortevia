import type { ReactNode } from "react";
import { site, whatsappUrl } from "@/lib/site";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message?: string;
};

export function WhatsAppLink({
  children,
  className,
  message = site.whatsappMessage,
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
