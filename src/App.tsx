import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Tasarımın tam oturması için tüm stilleri buraya gömdüm
const HomePage = () => (
  <div style={{ 
    margin: 0, 
    padding: 0, 
    backgroundColor: '#000', 
    color: '#fff', 
    minHeight: '100vh', 
    fontFamily: 'sans-serif' 
  }}>
    {/* Üst Menü */}
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 50px', 
      borderBottom: '1px solid #222' 
    }}>
      <div>
        <h1 style={{ margin: 0, color: '#c9a063', fontSize: '1.5rem', letterSpacing: '2px' }}>MODA ŞAPKA</h1>
        <div style={{ fontSize: '0.7rem', color: '#888' }}>TOPTAN BUTİK</div>
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8rem', cursor: 'pointer' }}>ANA SAYFA</span>
        <span style={{ fontSize: '0.8rem', cursor: 'pointer' }}>KATEGORİLER</span>
        <span style={{ fontSize: '0.8rem', cursor: 'pointer' }}>İLETİŞİM</span>
        <button style={{ 
          backgroundColor: '#c9a063', 
          border: 'none', 
          padding: '10px 20px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          borderRadius: '4px' 
        }}>TOPTAN SATIŞ TALEBİ</button>
      </div>
    </nav>

    {/* Orta Kısım */}
    <div style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h2 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 'normal' }}>Toptan Bayan</h2>
      <h2 style={{ fontSize: '3.5rem', marginTop: '10px', color: '#c9a063', fontWeight: 'normal', fontStyle: 'italic' }}>Şapka Modelleri</h2>
      <p style={{ color: '#888', marginTop: '20px' }}>150+ model seçeneği • Türkiye geneli gönderim • Hızlı iletişim</p>
      
      <div style={{ marginTop: '40px' }}>
        <button style={{ 
          backgroundColor: '#c9a063', 
          border: 'none', 
          padding: '15px 30px', 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          borderRadius: '4px'
        }}>WHATSAPP'TAN İLETİŞİME GEÇ</button>
      </div>

      <div style={{ marginTop: '60px', width: '100%', maxWidth: '800px', margin: '60px auto 0' }}>
        <img 
          src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1000" 
          alt="Şapka" 
          style={{ width: '100%', borderRadius: '8px' }} 
        />
      </div>
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
