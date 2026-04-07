import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- KATALOG VERİLERİ ---
const sapkaModelleri = [
  { id: 1, ad: "Venedik Serisi Fötr", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400" },
  { id: 2, ad: "Yaz Esintisi Hasır", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=400" },
  { id: 3, ad: "Parisienne Ressam", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400" },
  { id: 4, ad: "Kış Güneşi Bere", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400" },
  { id: 5, ad: "Retro Kovboy", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400" },
  { id: 6, ad: "Modern Vizör", fiyat: "Toptan Sorunuz", img: "https://images.unsplash.com/photo-1575424909138-46b05e5919ec?w=400" }
];

// --- ORTAK NAVİGASYON ---
const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', borderBottom: '1px solid #1a1a1a', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 100 }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#c9a063', letterSpacing: '4px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
      <div style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '2px' }}>TOPTAN BUTİK KOLEKSİYONU</div>
    </Link>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#eee', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '1px' }}>ANA SAYFA</Link>
      <Link to="/katalog" style={{ color: '#eee', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '1px' }}>KATALOG</Link>
      <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.75rem' }}>TOPTAN SATIŞ</button>
    </div>
  </nav>
);

// --- SAYFALAR ---
const Home = () => (
  <div style={{ textAlign: 'center', padding: '80px 20px' }}>
    <h2 style={{ fontSize: '4.5rem', fontWeight: '100', margin: 0 }}>Toptan Bayan</h2>
    <h2 style={{ fontSize: '4.5rem', color: '#c9a063', fontWeight: '100', fontStyle: 'italic', marginTop: '-15px' }}>Şapka Modelleri</h2>
    <p style={{ color: '#888', marginTop: '20px', letterSpacing: '1px' }}>Türkiye'nin butik mağazaları için özel seçilmiş koleksiyon.</p>
    <Link to="/katalog">
      <button style={{ marginTop: '40px', backgroundColor: '#c9a063', color: '#000', padding: '18px 40px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>KOLEKSİYONU İNCELE</button>
    </Link>
    <div style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto', border: '1px solid #222', padding: '10px' }}>
      <img src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=1000" style={{ width: '100%', opacity: 0.8 }} />
    </div>
  </div>
);

const Katalog = () => (
  <div style={{ padding: '60px' }}>
    <h3 style={{ color: '#c9a063', fontSize: '2rem', textAlign: 'center', marginBottom: '50px', letterSpacing: '2px' }}>2026 YAZ KOLEKSİYONU</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
      {sapkaModelleri.map(item => (
        <div key={item.id} style={{ border: '1px solid #1a1a1a', padding: '15px', textAlign: 'center', transition: '0.3s' }}>
          <img src={item.img} alt={item.ad} style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '15px' }} />
          <h4 style={{ margin: '10px 0', fontSize: '1.1rem' }}>{item.ad}</h4>
          <p style={{ color: '#c9a063', fontWeight: 'bold' }}>{item.fiyat}</p>
          <button style={{ background: 'transparent', border: '1px solid #444', color: '#888', padding: '8px 15px', marginTop: '10px', cursor: 'pointer' }}>Detaylar</button>
        </div>
      ))}
    </div>
  </div>
);

// --- ANA UYGULAMA ---
function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
        </Routes>
        <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #111', color: '#444', marginTop: '50px' }}>
          © 2026 MODA ŞAPKA TOPTAN - Boutique Satışları İçin Uygundur
        </footer>
      </div>
    </Router>
  );
}

export default App;
