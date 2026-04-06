import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
// BURASI KRİTİK: Yolu ./constants olarak düzelttik
import { CONTACT_INFO } from './constants';

export const Contact: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">İletişim</h1>
          <p className="text-gray-600">Toptan sipariş ve sorularınız için bizimle iletişime geçin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold mb-6">Bize Ulaşın</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg text-white"><Phone size={20} /></div>
                <div><p className="text-sm text-gray-500">Telefon</p><p className="font-medium">{CONTACT_INFO.phone}</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg text-white"><Instagram size={20} /></div>
                <div><p className="text-sm text-gray-500">Instagram</p><p className="font-medium">@modasapka</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-900 p-3 rounded-lg text-white"><MapPin size={20} /></div>
                <div><p className="text-sm text-gray-500">Adres</p><p className="font-medium">{CONTACT_INFO.address}</p></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Neden Biz?</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Türkiye geneli butiklere toptan satış</li>
              <li>• En trend şapka ve aksesuar modelleri</li>
              <li>• Hızlı kargo ve güvenilir iş ortaklığı</li>
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <a href={`https://wa.me/${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                 className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
