import { SectionHeading } from "@/components/SectionHeading";
import { benefits, site } from "@/lib/site";

export function Benefits() {
  return (
    <section id="capacidade" className="scroll-mt-28 bg-white" aria-labelledby="capacidade-titulo">
      <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
        <SectionHeading
          eyebrow="Capacidade"
          title={`Caixa estacionária de ${site.service.capacity}`}
          titleId="capacidade-titulo"
        >
          <p>
            A NorteVia atende em Manaus. Informe o endereço do serviço para combinar a entrega e a
            retirada após a confirmação da disponibilidade.
          </p>
        </SectionHeading>

        <div className="reveal-stagger grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className="reveal border-t border-line pt-5">
              <p className="font-display text-sm tracking-[0.18em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
