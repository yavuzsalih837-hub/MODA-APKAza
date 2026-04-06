import React from 'react';
import { ShoppingBag } from 'lucide-react';
// BURASI KRİTİK: ../ sildik, sadece ./ yaptık
import { CONTACT_INFO } from './constants';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const whatsappMessage = `Merhaba, ${product.name} ürünü hakkında bilgi alabilir miyim?`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/\s/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">{product.price}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white p-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
          >
            <ShoppingBag size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
