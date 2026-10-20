import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="orcamento"
      className="scroll-mt-28 border-t-4 border-brand bg-ink text-white"
      aria-labelledby="orcamento-titulo"
    >
      <div className="section-shell flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="reveal max-w-2xl space-y-5">
          <p className="eyebrow">Orçamento</p>
          <h2 id="orcamento-titulo" className="font-display text-3xl leading-[1.05] tracking-tight sm:text-5xl">
            Solicite a locação da caixa de {site.service.capacity}
          </h2>
          <p className="max-w-xl leading-relaxed text-white/70">
            Informe o endereço em Manaus e o tipo de serviço no WhatsApp para confirmar disponibilidade e
            condições. A cotação final é definida com a NorteVia.
          </p>
        </div>

        <WhatsAppLink className="btn btn-primary">Falar no WhatsApp</WhatsAppLink>
      </div>
    </section>
  );
}
