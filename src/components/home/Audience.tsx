import { SectionHeading } from "@/components/SectionHeading";
import { audiences } from "@/lib/site";

export function Audience() {
  return (
    <section id="publico" className="scroll-mt-28 bg-canvas" aria-labelledby="publico-titulo">
      <div className="section-shell space-y-12 py-16 sm:py-20 lg:py-24">
        <SectionHeading eyebrow="Público" title="Para quem é o serviço" titleId="publico-titulo">
          <p>
            A locação atende pessoas físicas e jurídicas. A aceitação depende da compatibilidade dos
            resíduos e da confirmação das condições de atendimento.
          </p>
        </SectionHeading>

        <div className="reveal-stagger grid gap-0 border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="reveal border-b border-ink/10 px-0 py-7 sm:px-6 sm:first:pl-0 sm:odd:pl-0 lg:border-b-0 lg:px-7 lg:py-8 lg:first:pl-0"
            >
              <p className="font-display text-sm tracking-[0.18em] text-brand">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-4 text-xl leading-tight tracking-tight">{audience.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{audience.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
