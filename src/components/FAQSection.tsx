import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona com o clima do Pará?",
    answer: "Sim, os projetos são dimensionados para as variações climáticas da região. O Pará possui excelente incidência solar durante todo o ano, tornando a energia solar uma solução extremamente eficiente aqui.",
  },
  {
    question: "Qual o tempo de retorno do investimento?",
    answer: "Em média, o investimento se paga entre 3 a 5 anos, com benefícios por décadas. Após o retorno, toda a economia gerada é lucro direto para você.",
  },
  {
    question: "Como é feita a manutenção?",
    answer: "Oferecemos suporte técnico local completo para garantir a eficiência contínua do seu sistema. A manutenção é simples e periódica, com nossa equipe sempre à disposição.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-card-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
