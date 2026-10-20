import Image from "next/image";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { images, mailtoUrl, pageNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="reveal-stagger section-shell grid gap-12 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="reveal space-y-5">
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={237}
            height={82}
            className="h-10 w-auto"
          />
          <p className="max-w-md text-sm leading-relaxed text-white/65">
            {site.service.title}. {site.service.summary}
          </p>
        </div>

        <nav className="reveal" aria-label="Seções da página">
          <p className="eyebrow">Nesta página</p>
          <ul className="mt-5 space-y-3 text-sm">
            {pageNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="reveal space-y-3 text-sm">
          <h2 className="eyebrow">Contato</h2>
          <div className="mt-5 space-y-3 text-white/70">
            <p>
              WhatsApp:{" "}
              <WhatsAppLink className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {site.whatsapp.display}
              </WhatsAppLink>
            </p>
            <p>
              E-mail:{" "}
              <a
                href={mailtoUrl()}
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {site.email}
              </a>
            </p>
            <p>CNPJ: {site.cnpj}</p>
            <p>Área de atendimento: {site.location.full}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
