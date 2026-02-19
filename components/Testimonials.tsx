
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Cliente desde 2023",
    text: "Consegui comprar meu iPhone 15 Pro Max sem ter limite no cartão. O atendimento foi super rápido e a aprovação do boleto saiu na hora. Recomendo muito!",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  },
  {
    name: "Beatriz Santos",
    role: "Retirou na loja física",
    text: "Melhor experiência que tive. Estava receosa por ser boleto, mas a transparência da Guiphones é incrível. Já é o segundo aparelho da família.",
    avatar: "https://i.pravatar.cc/150?u=beatriz"
  },
  {
    name: "Marcos Oliveira",
    role: "Compra via WhatsApp",
    text: "Atendimento nota 10. Fiz a simulação, mandei os documentos e em 2 dias o celular chegou aqui em casa via motoboy. Top!",
    avatar: "https://i.pravatar.cc/150?u=marcos"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quem já comprou, recomenda</h2>
          <p className="text-white/50">Milhares de brasileiros já realizaram o sonho do novo smartphone com a gente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] border border-white/5 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-white/70 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-gold/50" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
