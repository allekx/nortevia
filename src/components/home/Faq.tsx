import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 bg-white" aria-labelledby="faq-titulo">
      <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-24">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" titleId="faq-titulo">
          <p>Se a sua dúvida não estiver aqui, fale com a NorteVia pelo WhatsApp.</p>
        </SectionHeading>

        <div className="reveal border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>
                {faq.answer}
                {"cta" in faq && faq.cta ? (
                  <>
                    {" "}
                    <WhatsAppLink className="font-semibold text-brand underline underline-offset-4">
                      Abrir WhatsApp
                    </WhatsAppLink>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
