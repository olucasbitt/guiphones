import React, { useState } from "react";

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "",
    entry: "",
    parcel: "",
    job: "",
    income: "",
    restriction: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const msg = encodeURIComponent(
      `Novo lead:\nNome: ${form.name}\nEntrada: ${form.entry}\nParcelas: ${form.parcel}\nProfissão: ${form.job}\nRenda: ${form.income}\nRestrição: ${form.restriction}`
    );

    window.open(`https://wa.me/555181383681?text=${msg}`);
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-2xl">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Análise de aprovação
        </h2>

        <div className="space-y-4">

          <input
            name="name"
            placeholder="Nome completo"
            className="w-full p-4 bg-zinc-900 rounded-xl"
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
            className="w-full py-5 gold-gradient text-black font-bold rounded-xl"
          >
            Solicitar aprovação agora
          </button>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;