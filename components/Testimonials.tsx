const Testimonials = () => {
  return (
    <section className="py-24 bg-black">

      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Pessoas que foram aprovadas hoje
          </h2>
          <p className="text-white/50">
            Aprovação real via boleto, sem cartão de crédito
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
            <p className="text-white/70 mb-4">
              “Não tinha cartão e mesmo assim fui aprovado no mesmo dia.”
            </p>
            <span className="text-gold font-bold">✔ Aprovado em 15 min</span>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
            <p className="text-white/70 mb-4">
              “Achei que não ia conseguir, mas foi muito rápido pelo WhatsApp.”
            </p>
            <span className="text-gold font-bold">✔ Entrega no mesmo dia</span>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
            <p className="text-white/70 mb-4">
              “Paguei no boleto e já estou com o celular na mão.”
            </p>
            <span className="text-gold font-bold">✔ Sem cartão de crédito</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;