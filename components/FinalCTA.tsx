import React, { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const [form, setForm] = useState({
    name: "",
    entry: "",
    parcel: "",
    job: "",
    income: "",
    restriction: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const msg = encodeURIComponent(
      `📱 NOVO LEAD\n\nNome: ${form.name}\nEntrada: ${form.entry}\nParcelas: ${form.parcel}\nProfissão: ${form.job}\nRenda: ${form.income}\nRestrição: ${form.restriction}`
    );

    window.open(`https://wa.me/555181383681?text=${msg}`);
  }

  function handleSimpleCTA() {
    window.open("https://wa.me/555181383681");
  }

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-yellow-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* HEADLINE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Seu novo celular pode ser aprovado hoje
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Preencha rapidamente ou fale direto com nossa equipe no WhatsApp.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 space-y-4">

            <h3 className="text-lg font-semibold mb-2">
              Análise de aprovação rápida
            </h3>

            <input
              name="name"
              placeholder="Nome completo"
              className="w-full p-4 bg-zinc-900 rounded-xl outline-none"
              onChange={handleChange}
            />

            <select name="entry" onChange={handleChange} className="w-full p-4 bg-zinc-900 rounded-xl">
              <option>Entrada disponível</option>
              <option>Sem entrada</option>
              <option>Até R$300</option>
              <option>Acima de R$500</option>
            </select>

            <select name="parcel" onChange={handleChange} className="w-full p-4 bg-zinc-900 rounded-xl">
              <option>Parcela confortável</option>
              <option>Até R$300</option>
              <option>Até R$450</option>
              <option>Acima de R$450</option>
            </select>

            <select name="job" onChange={handleChange} className="w-full p-4 bg-zinc-900 rounded-xl">
              <option>Profissão</option>
              <option>Autônomo</option>
              <option>CLT</option>
              <option>Empresário</option>
              <option>Desempregado</option>
            </select>

            <select name="income" onChange={handleChange} className="w-full p-4 bg-zinc-900 rounded-xl">
              <option>Renda mensal</option>
              <option>Até 1 salário</option>
              <option>1 a 2 salários</option>
              <option>Acima de 2 salários</option>
            </select>

            <select name="restriction" onChange={handleChange} className="w-full p-4 bg-zinc-900 rounded-xl">
              <option>Restrição no nome?</option>
              <option>Sim</option>
              <option>Não</option>
            </select>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              Solicitar aprovação
              <ArrowRight size={18} />
            </button>

          </div>

          {/* CTA WHATSAPP */}
          <div className="flex flex-col justify-center items-center text-center">

            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-10 w-full">

              <h3 className="text-2xl font-bold mb-4">
                Fale direto com a gente
              </h3>

              <p className="text-white/60 mb-8">
                Se preferir, receba atendimento imediato no WhatsApp sem preencher nada.
              </p>

              <button
                onClick={handleSimpleCTA}
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-bold rounded-xl hover:scale-105 transition"
              >
                <MessageCircle />
                Abrir WhatsApp
              </button>

            </div>

            <p className="text-white/40 text-sm mt-6">
              Resposta rápida • Atendimento humano • Sem burocracia
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;