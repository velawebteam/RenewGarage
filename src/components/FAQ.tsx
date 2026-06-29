import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora um detalhe completo?",
    answer: "Depende do estado do veículo e do serviço escolhido. Um detalhe interior pode demorar 1 dia, enquanto uma correção de pintura total com proteção cerâmica pode necessitar de 3 a 5 dias para cura completa."
  },
  {
    question: "A Proteção Cerâmica substitui a lavagem?",
    answer: "Não, mas torna a lavagem muito mais fácil e rápida. A cerâmica repele a água e sujidade (efeito hidrofóbico), o que evita que os detritos se agarrem à pintura com tanta força."
  },
  {
    question: "Removem riscos profundos?",
    answer: "Removemos riscos que afetaram apenas o verniz. Se o risco chegou à tinta ou ao metal, será necessária pintura. No entanto, o nosso processo de polimento esbate significativamente a visibilidade de danos mais graves."
  },
  {
    question: "Onde estão localizados?",
    answer: "Estamos na Zona Empresarial de Tavira, Lote 117. Um espaço privado e seguro com ambiente controlado para a aplicação de produtos premium."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display italic">
            Dúvidas Comuns
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/5 bg-background">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-bold uppercase tracking-wide text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-primary" />
                ) : (
                  <Plus className="w-4 h-4 text-primary" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
