import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu, Phone, Instagram } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-black">MODA ŞAPKA</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-black">Anasayfa</Link>
              <Link to="/products" className="text-gray-600 hover:text-black">Ürünler</Link>
              <Link to="/contact" className="text-gray-600 hover:text-black">İletişim</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram size={20} className="cursor-pointer" />
              <Phone size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-50 border-t py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">© 2026 MODA ŞAPKA Toptan Satış. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
