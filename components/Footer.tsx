import React from "react";
import { Smartphone, MessageCircle, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">

      <div className="container mx-auto px-6">

      

        {/* INFO REDUZIDA (CONFORTO / CONFIANÇA) */}
        <div className="grid md:grid-cols-3 gap-10 text-sm text-white/50 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="text-gold" size={18} />
              <span className="text-white font-bold">Guiphones</span>
            </div>

            <p>
              Loja física especializada em smartphones com aprovação facilitada no boleto.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Contato</h4>

            <p className="flex items-center gap-2">
              <Phone size={14} /> (51) 98138-3681
            </p>

            <p className="flex items-center gap-2 mt-2">
              <MapPin size={14} /> Viamão - RS
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Atendimento</h4>
            <p>Segunda a Sexta: 09h às 18h</p>
            <p>Sábado: 09h às 14h</p>
          </div>

        </div>

        {/* FINAL LIMPO */}
        <div className="border-t border-white/5 pt-6 text-xs text-white/20 flex flex-col md:flex-row justify-between gap-4">

          <p>© 2024 Guiphones</p>

          <p className="text-gold">
            Aprovação rápida • Boleto facilitado • Loja física
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;