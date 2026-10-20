import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { images, steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-28 bg-white" aria-labelledby="como-funciona-titulo">
      <div className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="space-y-10">
          <SectionHeading eyebrow="Processo" title="Como funciona" titleId="como-funciona-titulo">
            <p>
              A disponibilidade e a programação dependem de confirmação com a NorteVia. O contato pelo
              WhatsApp inicia o orçamento, mas não garante data de entrega.
            </p>
          </SectionHeading>

          <ol className="reveal-stagger step-line grid gap-0">
            {steps.map((step, index) => (
              <li key={step.title} className="reveal relative grid grid-cols-[3rem_1fr] gap-4 pb-8 last:pb-0">
                <span className="relative z-10 font-display text-2xl text-brand" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal relative">
          <div className="media-frame relative aspect-[4/5]">
            <Image
              src={images.transport.src}
              alt={images.transport.alt}
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
