import { Shield, Droplets, Sparkles, Zap, Car, Thermometer, ChevronRight, ChevronLeft, MoveRight as DragHandle, Wrench, Disc, Battery, ClipboardCheck, MoreHorizontal } from "lucide-react";
import { motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

const servicePacks = [
  {
    category: "LAVAGENS (CARROS)",
    items: [
      {
        icon: Droplets,
        name: "LAVAGEM BASIC",
        features: ["Pré Lavagem", "Lavagem Manual", "Lavagem de jantes", "Secagem com toalha", "Aspiração simples de interior", "Limpeza simples de plásticos", "Limpeza de vidros", "Condicionador de Pneus"],
        price: "Desde 49€",
        time: "DURAÇÃO: 3 HORAS"
      },
      {
        icon: Zap,
        name: "LAVAGEM PREMIUM",
        features: ["Lavagem Exterior 3 Ph (2 pré lavagens + lavagem Manual)", "Lavagem de jantes", "Lavagem das molduras das portas", "Secagem a ar", "Aspiração detalhada do interior", "Lavagem de tapetes", "Lavagem detalhada dos plásticos e aplicação de proteção UV", "Limpeza de vidros", "Condicionador de pneus", "Aplicação de selante hidrofóbico na pintura"],
        price: "Desde 60€",
        time: "DURAÇÃO: 6 HORAS"
      }
    ]
  },
  {
    category: "HIGIENIZAÇÃO (CARROS)",
    items: [
      {
        icon: Sparkles,
        name: "HIGIENIZAÇÃO BASIC",
        features: ["Lavagem Exterior 3 Ph (2 pré lavagens + lavagem Manual)", "Lavagem de jantes", "Lavagem das molduras das portas", "Secagem a ar", "Aspiração detalhada do interior", "Lavagem de estofos", "Lavagem detalhada de plásticos interiores aplicação proteção UV", "Lavagem de tapetes", "Limpeza interna e externa de vidros", "Condicionador de pneus", "Aplicação de selante hidrofóbico na pintura"],
        price: "Desde 145€"
      },
      {
        icon: Shield,
        name: "HIGIENIZAÇÃO PREMIUM",
        features: ["Higienização Basic", "Remoção e Limpeza de Estofos", "Hidratação de Plásticos", "Descontaminação de Pintura", "Limpeza de Motor"],
        price: "Desde 225€"
      }
    ]
  },
  {
    category: "MANUTENÇÃO MENSAL (CARROS)",
    items: [
      {
        icon: Car,
        name: "MANUTENÇÃO – NÍVEL 1",
        features: ["Válido para viaturas que tenham realizado manutenção nos últimos 30 dias", "Serviço exclusivo para clientes que tenham anteriormente efetuado uma lavagem connosco"],
        price: "Desde 45€"
      },
      {
        icon: Car,
        name: "MANUTENÇÃO – NÍVEL 2",
        features: ["Aplicável quando o intervalo de manutenção é superior a 30 dias", "Processo mais detalhado", "Serviço sujeito a avaliação prévia do estado do veículo"],
        price: "Preço sob consulta"
      }
    ]
  },
  {
    category: "LAVAGENS (MOTAS)",
    items: [
      {
        icon: Droplets,
        name: "LAVAGEM BASIC",
        features: ["Lavagem Simples Exterior"],
        price: "Desde 35€",
        time: "DURAÇÃO: 2 HORAS"
      },
      {
        icon: Zap,
        name: "LAVAGEM PREMIUM",
        features: ["Lavagem Premium Exterior", "Aplicação de Selante de Pintura", "Condicionamento dos Plásticos"],
        price: "Desde 50€",
        time: "DURAÇÃO: 4 HORAS"
      }
    ]
  },
  {
    category: "POLIMENTOS",
    items: [
      {
        icon: Shield,
        name: "POLIMENTO BASIC",
        features: ["Remoção até 50% dos riscos e imperfeições da pintura", "Reavendo o brilho e aproximando a cor à sua tonalidade original"],
        price: "Desde 220€"
      },
      {
        icon: Shield,
        name: "POLIMENTO PREMIUM",
        features: ["Polimento de 3 etapas", "Remoção de até 90% das imperfeições da pintura", "A cor retoma o seu brilho e tonalidade naturais"],
        price: "Sob consulta"
      }
    ]
  },
  {
    category: "MECÂNICA",
    items: [
      {
        icon: Wrench,
        name: "MUDANÇA DE ÓLEO E FILTROS",
        features: [
          "Substituição de óleo lubrificante de alta qualidade adequado ao motor",
          "Substituição do respetivo filtro de óleo",
          "Verificação de níveis e reposição de fluidos essenciais",
          "Inspeção visual rápida de fugas no motor"
        ],
        price: "Sob orçamento"
      },
      {
        icon: Disc,
        name: "SUBSTITUIÇÃO DE TRAVÕES",
        features: [
          "Substituição de pastilhas de travão dianteiras e traseiras",
          "Substituição de discos de travão de alta durabilidade",
          "Limpeza e lubrificação técnica das pinças de travagem",
          "Verificação da qualidade e nível do líquido de travões"
        ],
        price: "Sob orçamento"
      },
      {
        icon: Battery,
        name: "TROCA DE BATERIA",
        features: [
          "Diagnóstico computorizado do estado da bateria atual",
          "Instalação de bateria nova premium recomendada para o veículo",
          "Verificação do sistema de carga e alternador",
          "Reciclagem ecológica e segura da bateria usada"
        ],
        price: "Sob orçamento"
      },
      {
        icon: ClipboardCheck,
        name: "REVISÕES GERAIS",
        features: [
          "Inspeção técnica detalhada de pontos de segurança cruciais",
          "Verificação de folgas de suspensão, direção e transmissão",
          "Diagnóstico eletrónico e leitura de códigos de avarias",
          "Recomendações e relatório do estado geral do veículo"
        ],
        price: "Sob orçamento"
      },
      {
        icon: MoreHorizontal,
        name: "ENTRE OUTROS SERVIÇOS",
        features: [
          "Reparações mecânicas diversas sob medida",
          "Diagnóstico de anomalias mecânicas ou elétricas",
          "Manutenção corretiva e preventiva personalizada",
          "Foco absoluto na segurança e máxima performance"
        ],
        price: "Sob orçamento"
      }
    ]
  }
];

const otherServices = [
  {
    category: "OUTROS SERVIÇOS",
    items: [
      {
        icon: Sparkles,
        name: "DESCONTAMINAÇÃO DA PINTURA",
        features: ["Lavagem Exterior 3 Ph (2 pré lavagens + lavagem Manual)", "Descontaminação química e mecânica da pintura", "Repelente de vidros"],
        price: "Desde 100€"
      },
      {
        icon: Droplets,
        name: "LAVAGEM DE ESTOFOS",
        subItems: [
          { label: "Frente/Trás", price: "30€" },
          { label: "Todos", price: "60€" }
        ]
      },
      {
        icon: Thermometer,
        name: "POLIMENTO DE FARÓIS",
        features: ["Lixagem do farol", "Polimento 3 etapas"],
        price: "50€",
        note: "OPCIONAIS: CERÂMICA / PPF"
      },
      {
        icon: Shield,
        name: "RESTAURO",
        subItems: [
          { label: "Couro", price: "Sob consulta" },
          { label: "Faróis", price: "60€" },
          { label: "Remoção de Riscos", price: "Sob consulta" },
          { label: "Remoção de lettering", price: "Desde 40€" },
          { label: "Pintura das pinças de travão", price: "Desde 150€" }
        ]
      }
    ]
  }
];

interface ServiceItem {
  icon?: any;
  name: string;
  features?: string[];
  price?: string;
  time?: string;
  note?: string;
  options?: string[];
  subItems?: { label: string; price: string }[];
}

interface Category {
  category: string;
  items: ServiceItem[];
}

const DraggableCategory: React.FC<{ category: Category }> = ({ category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const checkLayout = () => {
      const carousel = window.innerWidth < 1024 || category.items.length > 3;
      setIsCarousel(carousel);
      
      const max = window.innerWidth >= 1024 ? category.items.length - 3 : category.items.length - 1;
      setMaxIndex(Math.max(0, max));
    };
    
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => {
      window.removeEventListener('resize', checkLayout);
    };
  }, [category.items.length]);

  const handleScroll = () => {
    if (scrollRef.current && isCarousel) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardElement = scrollRef.current.firstElementChild?.firstElementChild as HTMLDivElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        if (cardWidth > 0) {
          const newIndex = Math.round(scrollLeft / cardWidth);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        }
      }
    }
  };

  const next = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.firstElementChild?.firstElementChild as HTMLDivElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const nextIndex = Math.min(activeIndex + 1, maxIndex);
        scrollRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
        setActiveIndex(nextIndex);
      }
    }
  };

  const prev = () => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.firstElementChild?.firstElementChild as HTMLDivElement;
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const prevIndex = Math.max(activeIndex - 1, 0);
        scrollRef.current.scrollTo({
          left: prevIndex * cardWidth,
          behavior: 'smooth'
        });
        setActiveIndex(prevIndex);
      }
    }
  };

  return (
    <div className="mb-24 last:mb-0">
      <h3 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase italic font-display mb-12 flex items-center justify-center gap-4 text-center">
        <span className="w-8 md:w-12 h-[2px] bg-primary"></span>
        {category.category}
        <span className="w-8 md:w-12 h-[2px] bg-primary"></span>
      </h3>

      <div className="relative">
        {/* Drag Hint */}
        <div className={`absolute -top-12 right-0 flex items-center gap-2 text-[10px] font-black tracking-widest text-primary/40 uppercase animate-pulse ${!isCarousel ? 'hidden' : ''}`}>
          <span>Deslize para ver mais</span>
          <DragHandle className="w-3 h-3" />
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className={`overflow-x-auto scroll-smooth snap-x snap-mandatory ${isCarousel ? 'scrollbar-none' : 'overflow-x-hidden'}`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div 
            className={`border-t border-l border-white/10 flex ${isCarousel ? 'w-max' : 'lg:flex-wrap lg:justify-center mx-auto w-fit max-w-full'}`}
          >
              {category.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${isCarousel ? 'w-[85vw] md:w-[400px] flex-shrink-0 snap-start' : 'w-full md:w-[400px] lg:flex-shrink-0'} p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-all group relative overflow-hidden flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-8">
                    {item.icon && <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />}
                    <span className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">0{index + 1}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-6 tracking-tight uppercase font-display">{item.name}</h4>
                  
                  <div className="flex-grow mb-8">
                    {item.features && (
                      <ul className="space-y-3">
                        {item.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-xs font-medium text-gray-500 leading-tight">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {'subItems' in item && item.subItems && (
                      <div className="space-y-4">
                        {item.subItems.map((sub, sIndex) => (
                          <div key={sIndex} className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{sub.label}</span>
                            <span className="text-primary font-black text-sm">{sub.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    {item.price && !('subItems' in item) && (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary">{item.price}</p>
                          {item.time && (
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-1">{item.time}</p>
                          )}
                        </div>
                        <a 
                          href="https://wa.me/351933503103" 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {item.note && (
                      <p className="text-[8px] leading-tight text-gray-600 mt-3 uppercase italic">{item.note}</p>
                    )}

                    {item.options && (
                      <div className="mt-3 flex gap-2">
                        {item.options.map((opt, oIndex) => (
                          <span key={oIndex} className="text-[8px] font-black tracking-widest text-[#2c3e50] bg-white/10 px-2 py-0.5 rounded text-white/50">{opt}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        {/* Navigation Arrows */}
        <div className={`mt-8 flex justify-center gap-4 ${!isCarousel ? 'hidden' : ''}`}>
          <button 
            onClick={prev}
            disabled={activeIndex === 0}
            className={`p-3 border border-white/10 rounded-lg transition-all ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary hover:border-primary text-white'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            disabled={activeIndex >= maxIndex}
            className={`p-3 border border-white/10 rounded-lg transition-all ${activeIndex >= maxIndex ? 'opacity-20 cursor-not-allowed' : 'hover:bg-primary hover:border-primary text-white'}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators removed as requested */}
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4">
          <div className="border-l-8 border-primary pl-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">OS NOSSOS <br /><span className="text-primary italic">SERVIÇOS</span></h2>
          </div>
          <p className="text-gray-400 max-w-sm uppercase font-bold text-sm tracking-widest leading-relaxed">Excelência técnica e dedicação absoluta em cada detalhe do seu veículo.</p>
        </div>

        {[...servicePacks, ...otherServices].map((category, catIndex) => (
          <DraggableCategory key={catIndex} category={category as any} />
        ))}

        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-relaxed">
            *AVISO: OS PREÇOS SÃO VARIÁVEIS DE ACORDO COM A SUJIDADE E DIMENSÃO DO VEÍCULO.<br />
            PARA MAIS DETALHES ENTRE EM CONTACTO.
          </p>
        </div>
      </div>
    </section>
  );
}
