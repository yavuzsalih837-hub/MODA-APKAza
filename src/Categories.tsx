import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from './ProductContext';

export const Categories: React.FC = () => {
  const { categories } = useProducts();

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-12">Kategoriler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <Link 
            key={category}
            to={`/categories/${category.toLowerCase().replace(/ /g, '-')}`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gray-100"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-serif font-bold text-white uppercase tracking-wider">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
