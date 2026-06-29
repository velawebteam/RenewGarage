import { motion } from "motion/react";
import { Car, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end pb-6 md:pb-12 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        >
          <source src="/carro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="w-full pl-4 md:pl-10 pr-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-none w-full"
        >
          <span className="block text-[10px] md:text-xs font-black tracking-[0.4em] text-white/50 mb-4 uppercase">
            A sua Garagem de Detailing em Tavira
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[8vw] lg:text-[6.5vw] font-bold mb-8 tracking-tighter leading-[0.85] md:leading-[0.75] uppercase font-display max-w-[90%] md:max-w-none">
            RENOVE O BRILHO DO SEU CARRO
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-0">
            <a 
              href="https://wa.me/351933503103" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest transition-all text-xs flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Agendar Agora
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#galeria"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest transition-all text-xs border-y border-r border-white/10 w-full sm:w-auto justify-center flex"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
