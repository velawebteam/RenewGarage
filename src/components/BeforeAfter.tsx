import React, { useState } from "react";
import { motion } from "motion/react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="antes-depois" className="pt-12 pb-24 md:py-24 bg-white/5 border-y border-white/5 overflow-hidden">
      {/* Moving Text Marquee Grid */}
      <div className="relative mb-6 md:mb-8 select-none opacity-30 space-y-2">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex text-[15vw] md:text-[12vw] font-black tracking-tighter uppercase leading-none"
          >
            <span className="mr-12">RESULTADOS BRUTAIS</span>
            <span className="mr-12 text-primary">RESULTADOS BRUTAIS</span>
            <span className="mr-12">RESULTADOS BRUTAIS</span>
            <span className="mr-12 text-primary">RESULTADOS BRUTAIS</span>
          </motion.div>
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex text-[15vw] md:text-[12vw] font-black tracking-tighter uppercase leading-none"
          >
            <span className="mr-12">RESULTADOS BRUTAIS</span>
            <span className="mr-12 text-primary">RESULTADOS BRUTAIS</span>
            <span className="mr-12">RESULTADOS BRUTAIS</span>
            <span className="mr-12 text-primary">RESULTADOS BRUTAIS</span>
          </motion.div>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex text-[15vw] md:text-[12vw] font-black tracking-tighter uppercase leading-none outline-text text-transparent border-white/50"
          >
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
          </motion.div>
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex text-[15vw] md:text-[12vw] font-black tracking-tighter uppercase leading-none outline-text text-transparent"
          >
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
            <span className="mr-12" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>RESULTADOS BRUTAIS</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-8 md:-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <p className="text-gray-500 uppercase font-black text-[10px] tracking-[0.3em] border-l-4 border-primary pl-4">OS resultados que pode esperar no seu veículo</p>
          </div>

          <div 
            className="relative aspect-video overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <img
              src="https://drive.google.com/thumbnail?id=1-vYlY91Iv8D7g1MA0bVb6GOTQ45F2c_3&sz=w1200"
              alt="After Detail"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* After Label */}
            <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Depois</div>
            
            {/* Before Image with Clip Path */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="https://drive.google.com/thumbnail?id=1_cgOH6rh09mR5p6j6hivYfbqiQPSBa85&sz=w1200"
                alt="Before Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-black border border-white/20 text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Antes</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center border-4 border-black">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-black" />
                  <div className="w-1 h-3 bg-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
