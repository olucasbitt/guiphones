import React from 'react';
import { Wrench, Smartphone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] -translate-x-1/2 -z-10"></div>
		
      <div className="container mx-auto px-6">
        
        {/* TOPO (TEXTO + IMAGEM) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* TEXTO ESQUERDA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Quem somos
            </h2>
            
            <p className="text-white/60 text-lg mb-4">
              Somos uma loja física especializada em celulares, assistência técnica e acessórios.
            </p>

            <p className="text-white/60 text-lg">
              Trabalhamos com produtos de qualidade, atendimento rápido e confiança para você comprar ou consertar seu aparelho com segurança.
            </p>
          </div>

          {/* IMAGEM DIREITA */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] rounded-3xl -z-10"></div>

            <img
              src="/img/loja.png"
              alt="Loja Guiphones"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-all duration-300"
            />
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="glass border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <Smartphone className="mx-auto mb-4 text-gold" size={40} />
            <h3 className="text-xl font-bold mb-2">Venda de Celulares</h3>
            <p className="text-white/60">
              Trabalhamos com aparelhos novos e seminovos, sempre com procedência e garantia.
            </p>
          </div>

          <div className="glass border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <Wrench className="mx-auto mb-4 text-gold" size={40} />
            <h3 className="text-xl font-bold mb-2">Assistência Técnica</h3>
            <p className="text-white/60">
              Consertamos celulares Android e iPhone com rapidez, qualidade e peças confiáveis.
            </p>
          </div>

          <div className="glass border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <MapPin className="mx-auto mb-4 text-gold" size={40} />
            <h3 className="text-xl font-bold mb-2">Loja Física</h3>
            <p className="text-white/60">
              Atendimento presencial para mais segurança, confiança e suporte direto ao cliente.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/555181383681"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 rounded-2xl gold-gradient text-black font-bold hover:scale-105 transition-all"
          >
            Falar com a loja
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
