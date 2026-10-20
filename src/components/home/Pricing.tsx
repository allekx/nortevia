import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export function Pricing() {
  return (
    <section id="preco" className="scroll-mt-28 bg-graphite text-white" aria-labelledby="preco-titulo">
      <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="reveal price-panel">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Valor informado</p>
          <p className="font-display mt-5 text-6xl leading-none tracking-tight sm:text-7xl">{site.service.price}</p>
          <p className="mt-4 text-lg text-white/80">{site.service.priceUnit}</p>
          <p className="mt-6 max-w-sm leading-relaxed text-white/60">{site.service.priceNote}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="spec-mark">{site.service.capacity}</span>
            <span className="spec-mark">5 dias habituais</span>
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Condições"
            title="Preço e permanência da locação"
            titleId="preco-titulo"
            tone="dark"
          >
            <p>{site.service.stay}</p>
          </SectionHeading>

          <ul className="reveal space-y-4 leading-relaxed text-white/75">
            <li className="border-l border-white/20 pl-4">{site.service.stayNote}</li>
            <li className="border-l border-white/20 pl-4">
              O endereço em Manaus, a disponibilidade e as condições finais devem ser confirmados com a
              empresa.
            </li>
            <li className="border-l border-white/20 pl-4">
              O valor apresentado não é diária, mensalidade nem taxa por volume.
            </li>
          </ul>

          <WhatsAppLink className="btn btn-primary">Consulte a disponibilidade para seu endereço</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
