
import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';

const Simulator: React.FC = () => {
  const [price, setPrice] = useState(3500);
  const [installments, setInstallments] = useState(12);
  const [downPayment, setDownPayment] = useState(price * 0.1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Basic logic for simulated installments (including a mock interest of 1.5% p.m. for boleto)
    const principal = price - downPayment;
    const rate = 0.015;
    const amount = principal * (Math.pow(1 + rate, installments) * rate) / (Math.pow(1 + rate, installments) - 1);
    setMonthlyPayment(amount);
  }, [price, installments, downPayment]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setPrice(val);
    setDownPayment(val * 0.1); // Keep down payment at 10% by default
  };

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simulador de Parcelas</h2>
          <p className="text-white/60">Planeje seu próximo celular com total transparência</p>
        </div>

        <div className="bg-graphite rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/5 grid md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-10">
            <div>
              <label className="block text-sm font-semibold text-white/50 mb-4 uppercase tracking-wider">
                Valor do Produto: {formatCurrency(price)}
              </label>
              <input 
                type="range" 
                min="1000" 
                max="12000" 
                step="100"
                value={price}
                onChange={handlePriceChange}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
              <div className="flex justify-between text-xs text-white/30 mt-2 font-mono">
                <span>R$ 1.000</span>
                <span>R$ 12.000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/50 mb-4 uppercase tracking-wider">
                Número de Parcelas: {installments}x
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 12, 18].map((n) => (
                  <button
                    key={n}
                    onClick={() => setInstallments(n)}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      installments === n 
                      ? 'gold-gradient text-black' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {n}x
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/50 mb-4 uppercase tracking-wider">
                Entrada Sugerida: {formatCurrency(downPayment)}
              </label>
              <input 
                type="range" 
                min={price * 0.05} 
                max={price * 0.8} 
                step="50"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
              <div className="text-xs text-white/30 mt-2 italic">
                A entrada mínima é de R$ 100 ou 5% do valor do aparelho.
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="glass rounded-[2rem] p-8 flex flex-col justify-between border-gold/20 shadow-[0_0_40px_rgba(230,184,0,0.05)]">
            <div>
              <div className="flex items-center gap-2 text-gold mb-6">
                <Calculator size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Resultado da Simulação</span>
              </div>
              
              <div className="mb-8">
                <span className="block text-sm text-white/50 mb-1">Valor da Parcela</span>
                <span className="text-6xl font-black text-white">
                  {monthlyPayment.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xl font-medium text-white/60 ml-2">/ mês</span>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Total das Parcelas</span>
                  <span className="font-semibold text-white">{formatCurrency(monthlyPayment * installments)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Entrada Hoje</span>
                  <span className="font-semibold text-white">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between text-sm pt-4 border-t border-white/5">
                  <span className="text-white font-bold">Total a pagar</span>
                  <span className="text-gold font-bold">{formatCurrency(downPayment + (monthlyPayment * installments))}</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-5 rounded-2xl gold-gradient text-black font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all flex items-center justify-center gap-3">
              Garantir esta oferta
              <CheckCircle2 size={22} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold" />
            Aprovação em até 15 min
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold" />
            Sem consulta SPC/Serasa*
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-gold" />
            Primeira parcela para 30 dias
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
