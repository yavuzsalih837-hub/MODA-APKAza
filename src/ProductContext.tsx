import React, { createContext, useContext, useState } from 'react';
// BURASI KRİTİK: Sadece ./products
import { products as initialProducts } from './products';

interface ProductContextType {
  products: any[];
  categories: string[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState(initialProducts);
  const categories = Array.from(new Set(initialProducts.map(p => p.category)));

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};
