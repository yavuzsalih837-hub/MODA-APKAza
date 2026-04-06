import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from './ProductContext';
// BURASI KRİTİK: ../components/ProductCard yerine ./ProductCard yazdık
import { ProductCard } from './ProductCard';

export const CategoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useProducts();
  
  const categoryProducts = products.filter(
    p => p.category.toLowerCase().replace(/ /g, '-') === slug
  );

  const categoryName = categoryProducts[0]?.category || 'Kategori';

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link to="/categories" className="text-gray-500 hover:text-gray-900">← Tüm Kategoriler</Link>
        <h1 className="text-4xl font-serif font-bold mt-4">{categoryName}</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
