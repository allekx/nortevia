import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, InstagramLink } from "@/components/InstagramLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { images, mailtoUrl, site } from "@/lib/site";
import "./BioPage.css";

export function BioPage() {
  return (
    <div className="bio-shell">
      <div className="h-0.5 bg-brand" />
      <main id="conteudo" className="bio-page">
        <header className="bio-brand">
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={237}
            height={82}
            className="h-12 w-auto"
            priority
          />
          <h1 className="mt-6 font-display text-[1.65rem] leading-tight tracking-tight">
            {site.service.title}
          </h1>
          <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-white/70">
            {site.service.audience}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="spec-mark">Caixa {site.service.capacity}</span>
            <span className="spec-mark">{site.location.reference}</span>
          </div>
        </header>

        <nav className="bio-links" aria-label="Contato da NorteVia">
          <WhatsAppLink className="bio-link bio-link-primary">
            <span className="bio-link-icon">
              <WhatsAppIcon />
            </span>
            <span className="bio-link-copy">
              <strong>Pedir orçamento</strong>
              <span>WhatsApp {site.whatsapp.display}</span>
            </span>
          </WhatsAppLink>

          <InstagramLink className="bio-link bio-link-secondary">
            <span className="bio-link-icon">
              <InstagramIcon />
            </span>
            <span className="bio-link-copy">
              <strong>Instagram</strong>
              <span>{site.instagram.handle}</span>
            </span>
          </InstagramLink>

          <a href={mailtoUrl()} className="bio-link bio-link-secondary">
            <span className="bio-link-icon">
              <MailIcon />
            </span>
            <span className="bio-link-copy">
              <strong>E-mail</strong>
              <span>{site.email}</span>
            </span>
          </a>

          <Link href="/" className="bio-link bio-link-secondary">
            <span className="bio-link-icon">
              <SiteIcon />
            </span>
            <span className="bio-link-copy">
              <strong>Ver o site</strong>
              <span>Como funciona a locação</span>
            </span>
          </Link>
        </nav>

        <footer className="bio-foot">
          <p className="eyebrow">{site.name}</p>
          <p>CNPJ {site.cnpj}</p>
          <p>{site.location.full}</p>
        </footer>
      </main>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.18 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.1-.22-.16-.47-.29z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4.2 7.2 7.05 5.05a1.4 1.4 0 0 0 1.5 0L19.8 7.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SiteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3.8c2.1 2.3 3.2 5.1 3.2 8.2s-1.1 5.9-3.2 8.2c-2.1-2.3-3.2-5.1-3.2-8.2s1.1-5.9 3.2-8.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M4.2 12h15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
