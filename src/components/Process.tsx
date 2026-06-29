import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Avaliação Detalhada",
    description: "Analisamos o estado da pintura, interiores e jantes para criar um plano de trabalho personalizado."
  },
  {
    number: "02",
    title: "Descontaminação",
    description: "Remoção profunda de impurezas férricas e contaminação industrial que a lavagem comum não retira."
  },
  {
    number: "03",
    title: "Transformação",
    description: "Execução técnica do serviço escolhido, com foco na perfeição e restauração de cada material."
  },
  {
    number: "04",
    title: "Entrega Premium",
    description: "Verificação final sob luzes específicas e entrega do veículo com conselhos de manutenção."
  }
];

export default function Process() {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
              O Nosso Método
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-display italic">
              A Jornada da Transformação
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm">
            Transparência total em cada passo. O seu carro é tratado como se fosse nosso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 border-t border-white/5 last:border-b ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 text-center md:text-left">
                <span className="text-primary font-black text-6xl opacity-20 block mb-4 font-display italic">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-1 w-full max-w-sm aspect-video bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-12 h-px bg-primary/30 group-hover:w-24 transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
