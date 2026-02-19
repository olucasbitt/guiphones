
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSimulateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSimulateClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Estoque renovado
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Compre seu celular no boleto em até <span className="text-gold">18x</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0">
              Sem cartão de crédito, aprovação facilitada e parcelas que cabem no seu bolso. Entradas a partir de <span className="text-white font-bold">R$100</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onSimulateClick}
                className="w-full sm:w-auto px-8 py-5 rounded-2xl gold-gradient text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-yellow-500/20 flex items-center justify-center gap-2 group"
              >
                Simular Parcelas
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <a 
                href="https://wa.me/555181383681" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl glass text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={24} className="text-green-500" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-sm font-semibold">APROVAÇÃO EM 15 MIN</span>
              <span className="text-sm font-semibold">SEM CARTÃO</span>
              <span className="text-sm font-semibold">GARANTIA TOTAL</span>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none">
            <div className="relative z-10 animate-float">
              {/* Product Glow */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] -z-10 rounded-full"></div>
              <img 
                src="/img/galaxyA07.jpeg" 
                alt="Smartphone High-end" 
                className="w-full h-auto rounded-[3rem] shadow-[0_0_100px_rgba(230,184,0,0.15)] border border-white/10"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-3xl shadow-2xl border border-white/20 animate-pulse z-20">
              <div className="text-sm text-white/60 mb-1">Parcelas a partir de</div>
              <div className="text-3xl font-bold text-gold">R$ 89,90</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
