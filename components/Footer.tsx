
import React from 'react';
import { Smartphone, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <Smartphone className="text-black" size={20} />
              </div>
              <span className="text-xl font-bold">
                Gui<span className="text-gold">phones</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Especialistas em tornar o acesso à tecnologia mais fácil para todos os brasileiros através de parcelamento inteligente no boleto.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Links Úteis</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-gold transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Como Funciona o Boleto</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contato</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                Rua Julieta Pinto César, 87 , Centro - Viamão, RS
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                (51) 98138-3681
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                contato@guiphones.com.br
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Horário de Atendimento</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <p className="text-sm text-white/60 mb-2">Segunda a Sexta:</p>
              <p className="text-sm font-bold text-white mb-4">09:00 às 18:00</p>
              <p className="text-sm text-white/60 mb-2">Sábado:</p>
              <p className="text-sm font-bold text-white">09:00 às 14:00</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20">
          <p>© 2024 Guiphones - Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="flex gap-8">
            <p>Privacidade</p>
            <p>Segurança</p>
            <p>Selo Loja Confiável 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
