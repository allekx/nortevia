import Image from "next/image";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { images, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="overflow-hidden bg-ink text-white" aria-labelledby="hero-titulo">
      <div className="lg:grid lg:min-h-[36rem] lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] xl:min-h-[42rem]">
        <div className="section-shell relative z-20 flex flex-col justify-center py-14 sm:py-16 lg:py-24">
          <div className="hero-copy min-w-0 max-w-2xl space-y-7">
            <p className="eyebrow">{site.name}</p>
            <h1
              id="hero-titulo"
              className="font-display text-[2.15rem] leading-[1.05] tracking-tight sm:text-6xl sm:leading-[0.95] lg:text-[4.35rem]"
            >
              {site.hero.headline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">{site.hero.lead}</p>
            <p className="max-w-xl text-sm leading-relaxed text-white/60">{site.service.audience}</p>
            <div className="flex flex-wrap gap-2">
              <span className="spec-mark">Caixa {site.service.capacity}</span>
              <span className="spec-mark">{site.location.reference}</span>
            </div>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <WhatsAppLink className="btn btn-primary">Solicitar orçamento</WhatsAppLink>
              <a href="#como-funciona" className="btn btn-secondary">
                Como funciona
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media relative aspect-[4/5] overflow-hidden lg:-ml-40 lg:aspect-auto lg:min-h-full xl:-ml-52">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover object-[68%_80%]"
            sizes="(max-width: 1024px) 100vw, 62vw"
            priority
          />
          <div className="hero-edge" />
        </div>
      </div>
    </section>
  );
}
