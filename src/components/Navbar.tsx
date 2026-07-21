import React, { useState, useEffect } from "react";
import { Car, Menu, X } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state to avoid re-scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Resultados", href: "#antes-depois" },
    { name: "Galeria", href: "#workshop-gallery" },
    { name: "FAQs", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 py-3 border-b border-white/10" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={(e) => {
          if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }} className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Renew Garage Logo" 
            className="h-8 md:h-12 w-auto brightness-0 invert" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors py-2 font-display"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/351933503103" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white hover:bg-primary hover:text-white px-8 py-3 text-black text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Agendar
          </a>
        </div>

        {/* Desktop Links (Tablet) */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[10px] font-black uppercase tracking-[0.1em] hover:text-primary transition-colors py-2 font-display"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/351933503103" 
            target="_blank" 
            rel="noreferrer"
            className="bg-white hover:bg-primary hover:text-white px-4 py-3 text-black text-[10px] font-black uppercase tracking-[0.1em] transition-all"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-white/10 p-6 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold uppercase tracking-widest"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/351933503103" 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-primary py-4 rounded-xl text-white font-bold flex items-center justify-center"
          >
            Agendar Agora
          </a>
        </div>
      )}
    </nav>
  );
}
