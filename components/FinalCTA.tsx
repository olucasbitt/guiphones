
import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-yellow-500/5 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-8 border border-red-500/20">
            <Clock size={14} />
            Ofertas por tempo limitado
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Pronto para o seu <span className="text-gold">novo celular?</span>
          </h2>
          
          <p className="text-white/60 mb-12 text-lg">
            Não espere ter o dinheiro todo na mão ou limite no cartão. Comece a pagar hoje e receba seu aparelho em tempo recorde.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/555181383681"
              className="px-10 py-6 rounded-2xl gold-gradient text-black font-black text-xl hover:scale-105 transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3"
            >
              <MessageCircle size={28} />
              Fazer simulação agora
            </a>
          </div>
          
          <p className="mt-8 text-white/30 text-sm">
            *Sujeito a análise de crédito. Aprovação facilitada para novos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
