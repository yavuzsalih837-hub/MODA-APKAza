import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Instagram, Phone, MessageSquare } from 'lucide-react';

const HomePage = () => (
  <div style={{ fontFamily: 'sans-serif', backgroundColor: '#111', color: '#fff', minHeight: 'screen' }}>
    {/* Üst Navigasyon - AI Studio Stili */}
    <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000' }}>
      <div style={{ textAlign: 'left' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#c9a063', letterSpacing: '2px' }}>MODA ŞAPKA</h1>
        <span style={{ fontSize: '0.8rem', color: '#888', letterSpacing: '1px' }}>TOPTAN BUTİK</span>
      </div>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.9rem', letterSpacing: '1px' }}>ANA SAYFA</Link>
        <span style={{ color: '#fff', fontSize: '0.9rem', cursor: 'pointer', letterSpacing: '1px' }}>KATEGORİLER</span>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.9rem', letterSpacing: '1px' }}>İLETİŞİM</Link>
        <Instagram size={18} style={{ color: '#fff' }} />
        <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer' }}>
          TOPTAN SATIŞ TALEBİ
        </button>
      </div>
    </nav>
    
    {/* Ana Bölüm - AI Studio Stili */}
    <div style={{ padding: '100px 20px', textAlign: 'center', position: 'relative' }}>
      <h2 style={{ fontSize: '4rem', marginBottom: '10px', color: '#fff', fontWeight: 'normal' }}>Toptan Bayan</h2>
      <h2 style={{ fontSize: '4rem', marginBottom: '40px', color: '#c9a063', fontWeight: 'normal', fontStyle: 'italic' }}>Şapka Modelleri</h2>
      
      <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto 50px', color: '#bbb', letterSpacing: '1px' }}>
        150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim
      </p>
      
      {/* Yeşil WhatsApp Butonu - AI Studio Stili */}
      <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '15px 30px', borderRadius: '5px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        <MessageSquare size={20} />
        WHATSAPP'TAN İLETİŞİME GEÇ
      </button>

      {/* Büyük Şapka Görseli */}
      <div style={{ marginTop: '80px', position: 'relative', display: 'inline-block' }}>
        <img 
          src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1200" 
          alt="Toptan Şapka Vitrini" 
          style={{ width: '100%', maxWidth: '1000px', borderRadius: '0', objectFit: 'cover' }} 
        />
        {/* Karartma efekti (AI Studio'daki gibi) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
      </div>
    </div>

    {/* Alt Kısım - AI Studio Stili */}
    <footer style={{ padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #333', backgroundColor: '#000', color: '#888', fontSize: '0.8rem' }}>
      © 2026 MODA ŞAPKA - Boutiquelar İçin Toptan Şapka Çözümleri
    </footer>

    {/* Yüzen WhatsApp Simgesi - AI Studio Stili */}
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: '#fff', borderRadius: '50%', padding: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', cursor: 'pointer' }}>
      <MessageSquare size={30} />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
