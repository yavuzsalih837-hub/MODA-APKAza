import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Instagram, Phone } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-black">MODA ŞAPKA</Link>
          <div className="flex space-x-4">
            <Instagram size={20} />
            <Phone size={20} />
          </div>
        </div>
      </nav>
      <main><Outlet /></main>
      <footer className="bg-gray-50 border-t py-6 mt-10 text-center text-gray-500">
        © 2026 MODA ŞAPKA Toptan Satış
      </footer>
    </div>
  );
}
