import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="pt-32 pb-20 text-center relative overflow-hidden">
      
      <div className="container mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Seu novo celular com <span className="text-gold">aprovação rápida</span>
        </h1>

        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
          Sem cartão de crédito. Sem burocracia. Você paga no boleto e recebe seu aparelho.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={onStart}
            className="px-10 py-5 rounded-2xl gold-gradient text-black font-bold text-lg flex items-center justify-center gap-2"
          >
            Solicitar aprovação
            <ArrowRight />
          </button>

          <a
            href="https://wa.me/555181383681"
            className="px-10 py-5 rounded-2xl border border-white/10 text-white flex items-center justify-center gap-2"
          >
            <MessageCircle />
            Falar no WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;