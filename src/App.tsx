import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = () => (
  <div style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh', fontFamily: 'serif', margin: 0 }}>
    {/* Navigasyon */}
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 60px', borderBottom: '1px solid #1a1a1a', backgroundColor: '#000' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#c9a063', letterSpacing: '3px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
        <div style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', marginTop: '4px' }}>TOPTAN BUTİK DÜNYASI</div>
      </div>
      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', color: '#eee' }}>ANA SAYFA</span>
        <span style={{ fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', color: '#eee' }}>KATEGORİLER</span>
        <span style={{ fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', color: '#eee' }}>İLETİŞİM</span>
        <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '12px 24px', fontWeight: 'bold', borderRadius: '2px', cursor: 'pointer', fontSize: '0.8rem' }}>TOPTAN SATIŞ TALEBİ</button>
      </div>
    </nav>

    {/* Hero Bölümü */}
    <div style={{ padding: '100px 20px', textAlign: 'center', background: 'radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%)' }}>
      <h2 style={{ fontSize: '5rem', margin: 0, fontWeight: 'lighter', opacity: 0.9 }}>Toptan Bayan</h2>
      <h2 style={{ fontSize: '5rem', marginTop: '-10px', color: '#c9a063', fontWeight: 'lighter', fontStyle: 'italic' }}>Şapka Modelleri</h2>
      
      <p style={{ color: '#888', fontSize: '1.1rem', marginTop: '30px', letterSpacing: '1px' }}>
        150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim
      </p>
      
      <div style={{ marginTop: '50px' }}>
        <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '18px 40px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <span>🗨️</span> WHATSAPP'TAN İLETİŞİME GEÇ
        </button>
      </div>

      {/* Ana Görsel */}
      <div style={{ marginTop: '80px', position: 'relative', maxWidth: '1100px', margin: '80px auto 0' }}>
        <img 
          src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1200" 
          alt="Şapka Vitrini" 
          style={{ width: '100%', border: '1px solid #222', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} 
        />
        <div style={{ position: 'absolute', bottom: '40px', left: '40px', textAlign: 'left' }}>
          <div style={{ color: '#c9a063', fontSize: '0.9rem', marginBottom: '5px' }}>YENİ SEZON</div>
          <div style={{ fontSize: '2rem' }}>2026 KOLEKSİYONU</div>
        </div>
      </div>
    </div>

    {/* Alt Bilgi */}
    <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #1a1a1a', backgroundColor: '#000', marginTop: '100px' }}>
      <div style={{ color: '#c9a063', marginBottom: '20px', fontWeight: 'bold' }}>MODA ŞAPKA</div>
      <p style={{ color: '#555', fontSize: '0.8rem' }}>© 2026 Tüm Hakları Saklıdır. Boutique Mağazalar İçin Özel Tasarımlar.</p>
    </footer>

    {/* Yüzen WhatsApp */}
    <div style={{ position: 'fixed', bottom: '40px', right: '40px', backgroundColor: '#25D366', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', cursor: 'pointer' }}>
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
