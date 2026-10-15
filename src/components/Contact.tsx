import { Send, Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contacto" className="pt-12 pb-24 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center"
          >
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">AGENDAR <span className="text-primary italic font-display">SERVIÇOS</span></h2>
            </div>
            
            <p className="text-gray-500 mb-12 max-w-lg font-medium uppercase text-xs tracking-[0.2em] leading-relaxed">
              Respostas rápidas. Excelência técnica garantida em Tavira. Clique no botão abaixo para agendar via WhatsApp.
            </p>

            <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href="https://wa.me/351933503103" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-1/2 py-6 bg-white hover:bg-primary text-black hover:text-white font-black uppercase tracking-[0.25em] text-xs transition-all flex items-center justify-center gap-3 group"
              >
                AGENDAR SERVIÇO
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://www.google.com/maps/dir//Renew+Garage,+Parque+empresarial+de+tavira-+lote+117,+8800-218+Tavira/@37.1381989,-7.6746362,17z/data=!4m16!1m7!3m6!1s0xd100569b2d522e1:0xc38723f4c039838b!2sRenew+Garage!8m2!3d37.1381947!4d-7.6720613!16s%2Fg%2F11yzdtp466!4m7!1m0!1m5!1m1!1s0xd100569b2d522e1:0xc38723f4c039838b!2m2!1d-7.6720613!2d37.1381947?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-1/2 py-6 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white font-black uppercase tracking-[0.25em] text-xs transition-all flex items-center justify-center gap-3 group"
              >
                <MapPin className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                ENCONTRE-NOS
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full pt-16 border-t border-white/10">
              <div className="flex flex-col items-center gap-4">
                <Phone className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Ligue-nos</p>
                  <p className="text-xl font-black tracking-tight">+351 933 503 103</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Mail className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Email</p>
                  <p className="text-xl font-black tracking-tight italic">INFO.RENEWGARAGE@GMAIL.COM</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Renew+Garage,+Parque+empresarial+de+tavira-+lote+117,+8800-218+Tavira/@37.1381989,-7.6746362,17z/data=!4m16!1m7!3m6!1s0xd100569b2d522e1:0xc38723f4c039838b!2sRenew+Garage!8m2!3d37.1381947!4d-7.6720613!16s%2Fg%2F11yzdtp466!4m7!1m0!1m5!1m1!1s0xd100569b2d522e1:0xc38723f4c039838b!2m2!1d-7.6720613!2d37.1381947?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-4 group/map hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-8 h-8 text-primary group-hover/map:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Workshop</p>
                  <p className="text-xl font-black tracking-tight uppercase group-hover/map:text-primary transition-colors">Zona Empresarial de Tavira Lote 117</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
