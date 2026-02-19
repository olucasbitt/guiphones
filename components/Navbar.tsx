
import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSimulateClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSimulateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
            <Smartphone className="text-black" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Gui<span className="text-gold">phones</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onSimulateClick}
            className="px-6 py-2.5 rounded-full gold-gradient text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-500/10"
          >
            Simular Parcelas
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-8 px-6 border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onSimulateClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 rounded-2xl gold-gradient text-black font-bold text-center shadow-xl shadow-yellow-500/10"
            >
              Simular Parcelas
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
