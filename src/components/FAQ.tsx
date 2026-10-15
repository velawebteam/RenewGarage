import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Onde fazer uma limpeza detalhada ao meu carro/mota?",
    answer: "Na Renew Garage, localizada na Zona Empresarial de Tavira (Lote 117), no Algarve. Dispomos de um espaço seguro e ambiente controlado, equipado com produtos e ferramentas de topo para serviços especializados de detalhe automóvel e lavagens detalhadas tanto para carros como para motas."
  },
  {
    question: "Qual a diferença entre car detailing e uma lavagem simples?",
    answer: "Uma lavagem simples/convencional apenas remove a sujidade visível e recorre frequentemente a métodos rápidos que criam riscos na pintura. O car detailing é um tratamento técnico minucioso: utiliza lavagens em várias fases (com pré-lavagem e método dos dois baldes), descontaminação de pintura, limpeza e higienização detalhada de estofos e plásticos com proteção UV, e aplicação de selantes ou cerâmicas para proteger o veículo a longo prazo."
  },
  {
    question: "O polimento remove riscos?",
    answer: "Sim, o polimento técnico elimina riscos, marcas circulares (swirls) e imperfeições que afetam a camada de verniz, restaurando a cor e o brilho originais da pintura (com remoção de até 50% no Polimento Basic e até 90% no Polimento Premium). Danos muito profundos que tenham chegado à chapa ou tinta requerem repintura, mas o polimento minimiza drasticamente a sua visibilidade."
  },
  {
    question: "Quanto custa um detailing na RenewGarage?",
    answer: "O valor depende do tipo de viatura, tamanho e do nível de tratamento pretendido. As lavagens detalhadas começam nos 49€ (carros) e 35€ (motas), as higienizações de interior a partir de 145€ e os serviços de polimento a partir de 220€. Também dispomos de planos de manutenção mensal desde 45€ e elaboramos orçamentos à medida após avaliação do seu veículo."
  },
  {
    question: "Também fazem mecânica simples na Renew?",
    answer: "Sim! Para além dos serviços de detalhe e estética automóvel, realizamos intervenções de mecânica rápida e preventiva, incluindo mudanças de óleo e filtros, substituição de pastilhas e discos de travão, troca e diagnóstico de baterias, e revisões gerais para garantir a máxima segurança da sua viatura."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white/[0.01]">
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
