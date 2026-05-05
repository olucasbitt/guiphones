import React, { useState, useEffect } from "react";
import { Smartphone, Menu, X, MessageCircle } from "lucide-react";

interface NavbarProps {
  onSimulateClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSimulateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 border-b border-white/10" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Smartphone className="text-black" size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Gui<span className="text-gold">phones</span>
          </span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/555181383681"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition text-sm"
          >
            <MessageCircle size={16} className="text-green-500" />
            WhatsApp
          </a>

          {/* CTA principal */}
          <button
            onClick={onSimulateClick}
            className="px-6 py-3 rounded-full gold-gradient text-black font-bold text-sm hover:scale-105 active:scale-95 transition shadow-lg shadow-yellow-500/10"
          >
            Simular agora
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="md:hidden glass border-b border-white/10 px-6 py-6">

          <div className="flex flex-col gap-4">

            <a
              href="https://wa.me/555181383681"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 flex items-center gap-2"
              onClick={() => setIsMobileOpen(false)}
            >
              <MessageCircle size={16} className="text-green-500" />
              Falar no WhatsApp
            </a>

            <button
              onClick={() => {
                onSimulateClick();
                setIsMobileOpen(false);
              }}
              className="w-full py-4 rounded-2xl gold-gradient text-black font-bold"
            >
              Simular agora
            </button>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;