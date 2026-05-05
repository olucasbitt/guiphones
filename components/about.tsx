import React from "react";
import { Shield, Smartphone, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXTO */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Por que confiar na Guiphones?
            </h2>

            <p className="text-white/60 text-lg mb-8 max-w-md">
              Somos uma loja física especializada em smartphones com foco em aprovação facilitada no boleto.
            </p>

            <div className="space-y-5 text-white/80">

              <div className="flex items-start gap-3">
                <Shield className="text-yellow-500 mt-1" />
                <span>Loja física com atendimento real e suporte humano</span>
              </div>

              <div className="flex items-start gap-3">
                <Smartphone className="text-yellow-500 mt-1" />
                <span>Especialistas em celulares e aprovação de crédito</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-500 mt-1" />
                <span>Retirada ou entrega com segurança e rastreio</span>
              </div>

            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative flex justify-center">

            {/* glow de fundo mais suave e controlado */}
            <div className="absolute w-[90%] h-[90%] bg-yellow-500/10 blur-[120px] rounded-3xl"></div>

            <img
              src="/img/loja.png"
              alt="Loja Guiphones"
              className="
                relative z-10
                rounded-3xl
                border border-white/10
                shadow-2xl
                w-full max-w-md
                object-cover
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;