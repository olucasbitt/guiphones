import React from "react";
import { MessageCircle } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 text-center bg-black">

      <div className="container mx-auto px-6 max-w-3xl">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Seu novo celular pode ser aprovado hoje
        </h2>

        <p className="text-white/50 mb-10">
          Sem cartão de crédito. Sem complicação. Você só precisa falar com a gente.
        </p>

        <a
          href="https://wa.me/555181383681"
          className="inline-flex items-center gap-3 px-10 py-5 gold-gradient text-black font-bold rounded-2xl hover:scale-105 transition"
        >
          <MessageCircle />
          Iniciar aprovação no WhatsApp
        </a>

      </div>

    </section>
  );
};

export default FinalCTA;