import React from "react";
import { Shield, Smartphone, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-black">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Por que confiar na Guiphones?
            </h2>

            <p className="text-white/60 mb-6">
              Somos uma loja física especializada em smartphones com foco em aprovação facilitada no boleto.
            </p>

            <div className="space-y-4 text-white/70">

              <div className="flex items-center gap-3">
                <Shield className="text-gold" />
                Loja física com atendimento real
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="text-gold" />
                Especialistas em celulares e aprovação
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-gold" />
                Retirada ou entrega com segurança
              </div>

            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative">

            <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-3xl"></div>

            <img
              src="/img/loja.png"
              className="rounded-3xl border border-white/10 relative z-10"
              alt="Loja Guiphones"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;