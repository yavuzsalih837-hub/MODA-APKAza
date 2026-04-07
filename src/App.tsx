import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#050505', color: '#ffffff', minHeight: '100vh', fontFamily: 'serif', margin: 0, padding: 0 }}>
      {/* Üst Menü */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', borderBottom: '1px solid #1a1a1a', backgroundColor: '#000' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#c9a063', letterSpacing: '4px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
          <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '3px', marginTop: '4px' }}>TOPTAN BUTİK KOLEKSİYONU</div>
        </div>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', cursor: 'pointer', color: '#eee' }}>ANA SAYFA</span>
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', cursor: 'pointer', color: '#eee' }}>KATALOG</span>
          <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '12px 28px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem', letterSpacing: '1px' }}>TOPTAN SATIŞ TALEBİ</button>
        </div>
      </nav>

      {/* Ana Bölüm (Hero) */}
      <div style={{ padding: '100px 20px', textAlign: 'center', background: 'radial-gradient(circle, #151515 0%, #050505 100%)' }}>
        <h2 style={{ fontSize: '5rem', margin: 0, fontWeight: '100', opacity: 0.9 }}>Toptan Bayan</h2>
        <h2 style={{ fontSize: '5rem', marginTop: '-15px', color: '#c9a063', fontWeight: '100', fontStyle: 'italic' }}>Şapka Modelleri</h2>
        
        <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '30px', letterSpacing: '2px' }}>
          150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim
        </p>
        
        <div style={{ marginTop: '50px' }}>
          <a href="https://wa.me/905XXXXXXX" target="_blank" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '20px 45px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <span>💬</span> WHATSAPP'TAN İLETİŞİME GEÇ
            </button>
          </a>
        </div>

        {/* Ana Vitrin Görseli */}
        <div style={{ marginTop: '80px', maxWidth: '1000px', margin: '80px auto 0', border: '1px solid #222', padding: '15px', background: '#000' }}>
          <img 
            src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1200" 
            alt="Moda Şapka Vitrin" 
            style={{ width: '100%', display: 'block', opacity: 0.8 }} 
          />
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #1a1a1a', backgroundColor: '#000', marginTop: '80px' }}>
        <div style={{ color: '#c9a063', marginBottom: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>MODA ŞAPKA</div>
        <p style={{ color: '#444', fontSize: '0.8rem' }}>© 2026 Tüm Hakları Saklıdır. Butikler için özel üretim.</p>
      </footer>
    </div>
  );
};

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
