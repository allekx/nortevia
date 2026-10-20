import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { images, uses } from "@/lib/site";

export function Service() {
  return (
    <section id="servico" className="scroll-mt-28 bg-canvas" aria-labelledby="servico-titulo">
      <div className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="space-y-10 lg:order-2">
          <SectionHeading eyebrow="Serviço" title="Para que serve a caixa estacionária" titleId="servico-titulo">
            <p>
              A caixa fica no local combinado para receber, de forma temporária, os resíduos gerados pelo
              serviço. Nem todos os materiais são aceitos. Confirme previamente com a NorteVia os resíduos
              permitidos.
            </p>
          </SectionHeading>

          <div className="reveal-stagger divide-y divide-line border-y border-line">
            {uses.map((use) => (
              <article key={use.title} className="reveal py-5">
                <h3 className="font-display text-xl tracking-tight">{use.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{use.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal relative lg:order-1">
          <div className="media-offset" aria-hidden="true" />
          <div className="media-frame relative aspect-[4/5]">
            <Image
              src={images.service.src}
              alt={images.service.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
