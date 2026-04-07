import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// NOT: Resim yollarını GitHub Pages yapısına göre güncelledim.
const baseImgPath = "/moda-sapka-yeni/images"; 

const sapkaModelleri = [
  { id: 1, ad: "Venedik Serisi Fötr", fiyat: "Toptan Sorunuz", img: `${baseImgPath}/sapka1.jpg` },
  { id: 2, ad: "Yaz Esintisi Hasır", fiyat: "Toptan Sorunuz", img: `${baseImgPath}/sapka2.jpg` },
  { id: 3, ad: "Parisienne Ressam", fiyat: "Toptan Sorunuz", img: `${baseImgPath}/sapka3.jpg` },
  { id: 4, ad: "Modern Vizör", fiyat: "Toptan Sorunuz", img: `${baseImgPath}/sapka4.jpg` }
];

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', backgroundColor: '#000', borderBottom: '1px solid #1a1a1a', position: 'sticky', top: 0, zIndex: 1000 }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#c9a063', letterSpacing: '3px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
    </Link>
    <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>ANA SAYFA</Link>
      <Link to="/katalog" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>KATALOG</Link>
      <Link to="/iletisim" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.85rem' }}>İLETİŞİM</Link>
      <button style={{ backgroundColor: '#c9a063', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', cursor: 'pointer' }}>TOPTAN SATIŞ</button>
    </div>
  </nav>
);

const Home = () => (
  <div style={{ textAlign: 'center', padding: '100px 20px', background: '#050505' }}>
    <h2 style={{ fontSize: '4.5rem', fontWeight: '100', color: '#fff', margin: 0 }}>Toptan Bayan</h2>
    <h2 style={{ fontSize: '4.5rem', color: '#c9a063', fontWeight: '100', fontStyle: 'italic', marginTop: '-15px' }}>Şapka Modelleri</h2>
    <p style={{ color: '#888', marginTop: '20px', letterSpacing: '1px' }}>150+ model seçeneği ile Türkiye geneli butiklere özel gönderim.</p>
    <Link to="/katalog">
      <button style={{ marginTop: '40px', backgroundColor: '#c9a063', color: '#000', padding: '15px 40px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>KATALOĞU GÖR</button>
    </Link>
  </div>
);

const Katalog = () => (
  <div style={{ padding: '50px', background: '#0a0a0a' }}>
    <h2 style={{ color: '#c9a063', textAlign: 'center', marginBottom: '40px' }}>2026 KOLEKSİYONU</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
      {sapkaModelleri.map(item => (
        <div key={item.id} style={{ border: '1px solid #222', padding: '15px', textAlign: 'center' }}>
          <img src={item.img} alt={item.ad} style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x400?text=Resim+Yukleniyor"; }} />
          <h4 style={{ color: '#fff', marginTop: '15px' }}>{item.ad}</h4>
          <p style={{ color: '#c9a063' }}>{item.fiyat}</p>
        </div>
      ))}
    </div>
  </div>
);

const Iletisim = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', color: '#fff' }}>
    <h2 style={{ color: '#c9a063' }}>İletişime Geçin</h2>
    <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Toptan sipariş ve bayilik talepleri için:</p>
    <div style={{ marginTop: '30px', fontSize: '1.5rem', color: '#25D366', fontWeight: 'bold' }}>🗨️ WhatsApp: +90 5XX XXX XX XX</div>
    <p style={{ color: '#666', marginTop: '10px' }}>Türkiye geneli tüm butiklere gönderimimiz mevcuttur.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
        <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #111', color: '#444', marginTop: '50px' }}>
          MODA ŞAPKA © 2026 - Toptan Butik Çözümleri
        </footer>
      </div>
    </Router>
  );
}

export default App;
