import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, InstagramLink } from "@/components/InstagramLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { images, pageNav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite/95 backdrop-blur">
      <div className="h-0.5 bg-brand" />
      <div className="section-shell flex items-center justify-between gap-6 py-3.5">
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${site.name} — página inicial`}>
          <Image
            src={images.logo.src}
            alt={images.logo.alt}
            width={237}
            height={82}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Seções da página">
          {pageNav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <InstagramLink
            className="inline-flex size-10 items-center justify-center text-[#f4f4f4] transition-colors hover:text-brand"
            aria-label="Instagram da NorteVia"
          >
            <InstagramIcon />
          </InstagramLink>
          <WhatsAppLink className="btn btn-primary whitespace-nowrap px-3 text-sm sm:px-5">
            Pedir orçamento
          </WhatsAppLink>
        </div>
      </div>
    </header>
  );
}
