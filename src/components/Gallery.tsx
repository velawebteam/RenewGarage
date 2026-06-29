import { motion } from "motion/react";
import { Instagram, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    category: "Exterior",
    url: "https://drive.google.com/thumbnail?id=1B262ccne6sqPP5pZQEXhTrRDIffAWoTw&sz=w1200",
    title: "Correção de Pintura"
  },
  {
    id: 2,
    category: "Ceramic",
    url: "https://drive.google.com/thumbnail?id=19zL_uTGfOd-Zph9eno6Dz1WfXWDdnqNi&sz=w1200",
    title: "Proteção Cerâmica"
  },
  {
    id: 3,
    category: "Interior",
    url: "https://drive.google.com/thumbnail?id=17NaBph34puGEvmXtTUN81mDYU0DDTHP4&sz=w1200",
    title: "Limpeza de Interiores"
  },
  {
    id: 4,
    category: "Exterior",
    url: "https://drive.google.com/thumbnail?id=1Z2t9r0ZWerzkGrgXL7Mk2EgQDM3loyTO&sz=w1200",
    title: "Projecto Completo"
  },
  {
    id: 5,
    category: "Ceramic",
    url: "https://drive.google.com/thumbnail?id=1iSC7ZlLUIK4FViGXvw-B-S7YaOgTUV9-&sz=w1200",
    title: "Blindagem de Pintura"
  },
  {
    id: 6,
    category: "Interior",
    url: "https://drive.google.com/thumbnail?id=1sipd1T3p9LtPlXwS8vFhjAME45xoQrFa&sz=w1200",
    title: "Restauração de Estofos"
  }
];

export default function Gallery() {
  return (
    <section id="workshop-gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-8 border-white pl-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">WORKSHOP <br /><span className="text-primary italic">GALLERY</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              key={img.id}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a 
            href="https://www.instagram.com/renewgarage.pt" 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col md:flex-row items-center gap-6 border-b-2 border-white/10 pb-8 hover:border-primary transition-all"
          >
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-black tracking-tight mb-1">SIGA-NOS PARA NÃO PERDER NOVOS TRABALHOS</h4>
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-black uppercase text-[10px] tracking-[0.3em]">
                INSTAGRAM @RENEWGARAGE.PT
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
