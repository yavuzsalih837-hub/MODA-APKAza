import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from './ProductContext';
import { ProductCard } from './ProductCard';

export const Home: React.FC = () => {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16">
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-60">
          <img src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80" 
               className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Stilinizi Tamamlayın</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Toptan şapka ve aksesuar dünyasında en yeni trendler butiğiniz için burada.</p>
          <Link to="/categories" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100">Koleksiyonu İncele</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-serif font-bold mb-8">Öne Çıkan Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
