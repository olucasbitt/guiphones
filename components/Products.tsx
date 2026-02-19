
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smart10',
    brand: 'Infinix',
    price: 'R$ 699',
    installment: '12x de R$ 100',
    image: 'img/infinix10.png',
    color: 'Azul'
  },
  {
    id: 2,
    name: 'Galaxy A07',
    brand: 'Samsung',
    price: 'R$ 1.599',
    installment: '18x de R$ 111',
    image: 'img/galaxyA07.jpeg',
    color: 'Preto / Prata'
  },
  {
    id: 3,
    name: 'C75',
    brand: 'Realme',
    price: 'R$ 1.149',
    installment: '18x de R$ 210',
    image: 'img/realmec75.png',
    color: 'Grafite'
  },
  {
    id: 4,
    name: 'Note 60x',
    brand: 'Realme',
    price: 'R$ 549',
    installment: '18x de R$ 50',
    image: 'img/note60x.png',
    color: 'Preto'
  }
];

interface ProductsProps {
  onSimulateClick: () => void;
}

const Products: React.FC<ProductsProps> = ({ onSimulateClick }) => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Aparelhos em destaque</h2>
            <p className="text-white/50 max-w-lg">Os modelos mais desejados do mercado com condições exclusivas de parcelamento.</p>
          </div>
          <button className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Ver catálogo completo
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-graphite rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {product.brand}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-white/40 text-sm">{product.color}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="text-sm text-white/50 mb-1">A partir de</div>
                  <div className="text-2xl font-bold text-white mb-2">{product.price}</div>
                  <div className="text-gold text-sm font-semibold mb-6 italic">{product.installment} no boleto</div>
                  
                  <button 
                    onClick={onSimulateClick}
                    className="w-full py-4 rounded-xl border border-white/10 hover:bg-white text-white hover:text-black font-bold transition-all"
                  >
                    Simular Parcelas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
