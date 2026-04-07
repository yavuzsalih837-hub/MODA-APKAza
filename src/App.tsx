import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = () => (
  <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', fontFamily: 'serif', margin: 0, padding: 0 }}>
    {/* Navigasyon Bölümü */}
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #1a1a1a', backgroundColor: '#000' }}>
      <div style={{ textAlign: 'left' }}>
        <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#c9a063', letterSpacing: '3px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
        <div style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px' }}>TOPTAN BUTİK DÜNYASI</div>
      </div>
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '1px', cursor: 'pointer', color: '#ccc' }}>ANA SAYFA</span>
        <span style={{ fontSize: '0.8rem', letterSpacing: '1px', cursor: 'pointer', color: '#ccc' }}>KATEGORİLER</span>
        <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '2px', cursor: 'pointer', fontSize: '0.75rem' }}>TOPTAN SATIŞ</button>
      </div>
    </nav>

    {/* Ana Vitrin - AI Studio Tarzı */}
    <div style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #111 0%, #000 100%)' }}>
      <h2 style={{ fontSize: '4.5rem', margin: 0, fontWeight: 'lighter' }}>Toptan Bayan</h2>
      <h2 style={{ fontSize: '4.5rem', marginTop: '-10px', color: '#c9a063', fontWeight: 'lighter', fontStyle: 'italic' }}>Şapka Modelleri</h2>
      
      <p style={{ color: '#888', fontSize: '1rem', marginTop: '25px', letterSpacing: '1px' }}>
        150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim
      </p>
      
      <div style={{ marginTop: '40px' }}>
        <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '15px 35px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '2px' }}>
          📱 WHATSAPP İLE SİPARİŞ VER
        </button>
      </div>

      {/* Büyük Şapka Görseli */}
      <div style={{ marginTop: '70px', maxWidth: '900px', margin: '70px auto 0', border: '1px solid #222', padding: '10px', backgroundColor: '#050505' }}>
        <img 
          src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1000" 
          alt="Şapka Vitrin" 
          style={{ width: '100%', display: 'block' }} 
        />
      </div>
    </div>

    {/* Footer */}
    <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: '#000', color: '#444', fontSize: '0.75rem', borderTop: '1px solid #111' }}>
      © 2026 MODA ŞAPKA - Boutiquelar İçin Profesyonel Çözümler
    </footer>

    {/* Yüzen Buton */}
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: '#fff', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)', cursor: 'pointer' }}>
      💬
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
