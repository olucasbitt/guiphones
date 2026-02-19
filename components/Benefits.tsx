
import React from 'react';
import { CreditCard, Zap, ShieldCheck, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: <CreditCard className="text-gold" size={32} />,
    title: "Sem Cartão de Crédito",
    description: "Compre via boleto bancário sem comprometer seu limite. Parcelas fixas até o fim."
  },
  {
    icon: <Zap className="text-gold" size={32} />,
    title: "Aprovação Facilitada",
    description: "Sistema ágil focado em acessibilidade. Mesmo sem score alto, você tem chance."
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Assistência Inclusa",
    description: "Todos os nossos aparelhos contam com garantia e suporte técnico especializado."
  },
  {
    icon: <MapPin className="text-gold" size={32} />,
    title: "Loja Física Própria",
    description: "Segurança de saber onde estamos. Venha retirar seu aparelho ou enviamos para você."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2rem] bg-graphite border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
