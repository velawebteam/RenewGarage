import { Car, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="mb-8 block">
              <img 
                src="/logo.png" 
                alt="Renew Garage Logo" 
                className="h-16 w-auto brightness-0 invert mx-auto md:mx-0" 
              />
            </Link>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-xs">
              PRECISÃO. PERFORMANCE. PROTEÇÃO. <br />TAVIRA, ALGARVE.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div className="text-left md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white">Navegação</h4>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#antes-depois" className="hover:text-primary transition-colors">Resultados</a></li>
                <li><a href="#workshop-gallery" className="hover:text-primary transition-colors">Portfólio</a></li>
                <li><a href="#contacto" className="hover:text-primary transition-colors">Pedidos</a></li>
              </ul>
            </div>

            <div className="text-right md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white">Legal</h4>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link to="/termos" className="hover:text-primary transition-colors">Termos</Link></li>
                <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
                <li><a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Livro de Reclamações</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white">Localização</h4>
            <div className="flex items-start gap-4 text-gray-500 text-[10px] font-black uppercase tracking-[0.15em] justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <p className="leading-relaxed">ZONA EMPRESARIAL DE TAVIRA, <br />LOTE 117</p>
            </div>
            <div className="flex gap-6 mt-10 justify-center md:justify-start text-gray-500">
               <a href="https://www.instagram.com/renewgarage/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                 <Instagram className="w-5 h-5 cursor-pointer" />
               </a>
               <a href="https://www.facebook.com/profile.php?id=61566866773083&locale=pt_PT" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                 <Facebook className="w-5 h-5 cursor-pointer" />
               </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-[8px] font-black uppercase tracking-[0.4em] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span>&copy; {new Date().getFullYear()} Renew Garage // Unidade de Detalhe Automóvel</span>
            <span>Website Desenvolvido por <a href="https://agencia-vela.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">Agência Vela</a></span>
          </div>
          
          <div className="flex justify-center gap-6 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
            <a href="https://www.consumidor.pt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="text-[6px] tracking-widest uppercase">RAL - RESOLUÇÃO ALTERNATIVA DE LITÍGIOS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
