import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Instagram, Phone } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Kategoriler', href: '/categories' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900">MODA ŞAPKA</Link>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${location.pathname === item.href ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'} hover:text-gray-900 px-1 py-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">MODA ŞAPKA</h2>
          <p className="text-gray-400 mb-6">Toptan Şapka ve Aksesuar Çözümleri</p>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" className="hover:text-pink-500"><Instagram /></a>
            <a href="https://wa.me/905332659304" className="hover:text-green-500"><Phone /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};
