import { Star, Quote, MoveRight as DragHandle } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "André Alves",
    role: "Profissional do Setor",
    content: "Serviço de elevado profissionalismo. Trabalho minucioso, com verdadeira atenção ao detalhe, tanto no interior como no exterior dos veículos. O acabamento é irrepreensível e nota-se o rigor em cada intervenção. Como profissional do setor automóvel, valorizo muito parceiros que trabalham com este nível de qualidade e responsabilidade. Recomendo a 100%",
    stars: 5
  },
  {
    name: "Tiago Guerreiro",
    role: "Cliente",
    content: "Como novo! Esta é mesmo a melhor descrição para este serviço! O meu carro ficou mesmo como novo. Óptima limpeza. Simpatia e profissionalismo. Recomendo vivamente!",
    stars: 5
  },
  {
    name: "Eugenia Ferreira",
    role: "Cliente",
    content: "Excelente trabalho. O carro ficou como novo, higienização perfeita, com lavagem de estofos. Recomendo muito.",
    stars: 5
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
 
  useEffect(() => {
    const checkLayout = () => {
      setIsCarousel(window.innerWidth < 1024);
    };
    checkLayout();
    window.addEventListener('resize', checkLayout);
 
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const innerWidth = testimonials.length * (window.innerWidth < 768 ? window.innerWidth * 0.85 : 400);
      setConstraints({ left: containerWidth - innerWidth, right: 0 });
    }
 
    return () => window.removeEventListener('resize', checkLayout);
  }, [testimonials.length]);
 
  const handleDragEnd = (_: any, info: any) => {
    if (!isCarousel) return;
    
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;
 
    if (velocity < -threshold || offset < -threshold) {
      if (activeIndex < testimonials.length - 1) {
        setActiveIndex(prev => prev + 1);
      }
    } else if (velocity > threshold || offset > threshold) {
      if (activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      }
    }
  };
 
  return (
    <section className="pt-24 pb-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-8 border-primary pl-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">RENEW <br /><span className="text-primary italic">FEEDBACK</span></h2>
          </div>
          <div className="flex gap-1 text-primary">
            {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-6 h-6" />)}
          </div>
        </div>
 
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Drag Hint */}
          <div className={`absolute top-0 right-0 z-20 flex md:hidden items-center gap-2 text-[10px] font-black tracking-widest text-primary/40 uppercase animate-pulse ${!isCarousel ? 'hidden' : ''}`}>
            <span>Arraste para ler mais</span>
            <DragHandle className="w-3 h-3" />
          </div>
 
          <div className="overflow-hidden">
            <motion.div 
              className={isCarousel ? "cursor-grab active:cursor-grabbing" : "cursor-default"}
              whileTap={isCarousel ? { cursor: "grabbing" } : {}}
            >
              <motion.div 
                drag={isCarousel ? "x" : false}
                dragConstraints={isCarousel ? constraints : { left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                animate={{ x: isCarousel ? -activeIndex * (window.innerWidth < 768 ? window.innerWidth * 0.85 : 400) : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                className={`flex border-l border-t border-white/10 ${!isCarousel ? 'lg:grid lg:grid-cols-3' : 'w-fit'}`}
              >
                {testimonials.map((t, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-[85vw] md:w-[400px] lg:w-full flex-shrink-0 p-10 border-r border-b border-white/10 relative"
                  >
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-primary opacity-10" />
                    <p className="text-gray-400 font-medium mb-8 leading-relaxed italic text-sm">"{t.content}"</p>
                    <div>
                      <h4 className="font-black text-white text-lg tracking-tight">{t.name}</h4>
                      <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className={`flex justify-center gap-2 mt-8 ${!isCarousel ? 'hidden' : ''}`}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-primary w-6' : 'bg-white/20'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
