import React from "react";

const products = [
  { name: "iPhone 13", price: "a partir de R$ 1.899" },
  { name: "Galaxy A07", price: "a partir de R$ 1.599" },
  { name: "Realme C75", price: "a partir de R$ 1.149" },
  { name: "Infinix Smart 10", price: "a partir de R$ 699" }
];

const Products = ({ onStart }: any) => {
  return (
    <section className="py-24 bg-black">

      <div className="container mx-auto px-6">

        {/* HEADER MAIS FORTE */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3">
            Escolha seu celular e veja se você é aprovado
          </h2>

          <p className="text-white/50">
            Não é catálogo. É análise de aprovação personalizada.
          </p>
        </div>

        {/* GRID SIMPLIFICADA */}
        <div className="grid md:grid-cols-4 gap-6">

          {products.map((p, i) => (
            <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-white/5">

              <h3 className="text-xl font-bold mb-2">{p.name}</h3>

              <p className="text-white/50 text-sm mb-6">
                {p.price}
              </p>

              <button
                onClick={onStart}
                className="w-full py-4 gold-gradient text-black font-bold rounded-xl hover:scale-105 transition"
              >
                Ver minha aprovação
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;