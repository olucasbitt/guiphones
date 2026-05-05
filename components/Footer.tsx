import React from "react";
import { Smartphone, MessageCircle, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-20 pb-10">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="text-yellow-500" size={20} />
              <span className="text-white font-bold text-lg">Guiphones</span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Loja física especializada em smartphones com aprovação facilitada no boleto e atendimento humano.
            </p>

          </div>

          {/* CONTATO */}
          <div>

            <h4 className="text-white font-semibold mb-4">Contato</h4>

            <div className="space-y-3 text-white/60 text-sm">

              <a
                href="tel:+5551981383681"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={14} />
                (51) 98138-3681
              </a>

              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Viamão - RS
              </div>

              <a
                href="https://wa.me/555181383681"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition mt-2"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>

            </div>

          </div>

          {/* ATENDIMENTO */}
          <div>

            <h4 className="text-white font-semibold mb-4">Atendimento</h4>

            <div className="text-white/60 text-sm space-y-2">

              <p>Segunda a Sexta: 09h às 18h</p>
              <p>Sábado: 09h às 14h</p>

              <div className="mt-4 text-white/40">
                Resposta rápida via WhatsApp durante o horário comercial
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/30">

          <p>© {new Date().getFullYear()} Guiphones. Todos os direitos reservados.</p>

          <p className="text-yellow-500 font-medium">
            Aprovação rápida • Boleto facilitado • Loja física
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;