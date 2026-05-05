import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative pt-32 pb-24 text-center overflow-hidden bg-black text-white">

      {/* glow de fundo suave */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Seu novo celular com{" "}
          <span className="text-yellow-500">aprovação rápida</span>
        </h1>

        <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Sem cartão de crédito. Sem burocracia. Você paga no boleto e recebe seu aparelho com segurança.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button
            onClick={onStart}
            className="
              px-8 py-4 md:px-10 md:py-5
              rounded-2xl
              bg-gradient-to-r from-yellow-400 to-yellow-600
              text-black font-bold text-lg
              flex items-center gap-2
              shadow-xl hover:scale-[1.03] transition
            "
          >
            Solicitar aprovação
            <ArrowRight />
          </button>

          <a
            href="https://wa.me/555181383681"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 md:px-10 md:py-5
              rounded-2xl
              border border-white/15
              text-white/90
              flex items-center gap-2
              hover:bg-white/5 transition
            "
          >
            <MessageCircle />
            Falar no WhatsApp
          </a>

        </div>

        {/* destaque de oferta */}
        <div className="mt-10 flex justify-center">
          <div className="px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium">
            Até 18x no boleto sem cartão de crédito
          </div>
        </div>

        {/* micro prova social */}
        <p className="mt-6 text-white/40 text-sm">
          Aprovação rápida • Atendimento humano • Retirada segura
        </p>

      </div>

    </section>
  );
};

export default Hero;