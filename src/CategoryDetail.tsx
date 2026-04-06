import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductCard';

// Kategori Bilgileri
const categoryData: Record<string, { name: string; description: string; image: string }> = {
  'hasir-kadin-sapka': {
    name: 'Hasır Bayan Şapka',
    description: 'Toptan bayan hasır şapka koleksiyonumuzla butiğinize değer katın. Geniş model yelpazesi ve hızlı stok gönderimi ile B2B çözüm ortağınızız.',
    image: '/images/hasir/hasir-sapka-fiyonklu-bejsapka-hasir-sa-76-910.jpg'
  },
  'siperlik-kadin-sapka': {
    name: 'Siperlik Şapka Modelleri',
    description: 'Maksimum koruma ve eşsiz stil için tasarlanmış şık siperlikler ve geniş kenarlı güneş şapkaları.',
    image: '/images/hasir/yilan-derisi-orgu-hasir-vizor-sapka-gunes-koruyucu-siperlik-rs-2114-bej01-36765-97-B-1.jpg'
  }
};

export const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="py-24 px-6 text-center">
        <h1 className="text-4xl font-serif text-yellow-600">Kategori Bulunamadı</h1>
        <p className="text-gray-500 mt-4">Aradığınız kategori mevcut değil.</p>
        <Link to="/" className="text-blue-500 underline mt-4 block">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Üst Kısım (Hero) */}
      <div className="relative h-[30vh] flex items-center justify-center bg-gray-900">
        <img 
          src={category.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt={category.name}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-gray-200">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {slug === 'hasir-kadin-sapka' ? (
          <HasirGrid />
        ) : slug === 'siperlik-kadin-sapka' ? (
          <VisorGrid />
        ) : (
          <div className="text-center py-20 text-gray-500">Bu kategori için ürün bulunamadı.</div>
        )}
      </div>
    </div>
  );
};

const HasirGrid = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // 1'den 99'a kadar olan resimleri döngüye sokar
  const products = useMemo(() => {
    return Array.from({ length: 99 }, (_, i) => ({
      id: i + 1,
      name: `Hasır Model - ${i + 1}`,
      image: `/images/hasir/sapka 1 (${i + 1}).jpeg`, // Senin dosya isimlendirme formatın
      price: 'Toptan Fiyat Sor'
    }));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x500?text=Resim+Yok';
              }}
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
            <a 
              href={`https://wa.me/905332659304?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında toptan fiyat teklifi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors text-sm font-bold"
            >
              <MessageCircle size={16} className="mr-2" />
              Toptan Fiyat Sor
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const VisorGrid = () => {
  // Siperlik için örnek veri, istersen burayı da HasirGrid gibi 1'den 20'ye döngüye sokabiliriz
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Siperlik Model - ${i + 1}`,
    image: `/images/hasir/siperlik (${i + 1}).jpeg`,
    price: 'Toptan Fiyat Sor'
  }));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm bg-white">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
            <button className="w-full bg-green-500 text-white py-2 rounded-md text-sm font-bold">Fiyat Sor</button>
          </div>
        </div>
      ))}
    </div>
  );
};
