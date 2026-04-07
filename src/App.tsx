import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// RESİM SORUNUNU KÖKTEN ÇÖZEN ADRES:
// Bu adres, dosyaları klasör yapısından bağımsız olarak doğrudan GitHub sunucusundan çeker.
const rawPath = "https://raw.githubusercontent.com/yavuzsalih837-hub/moda-sapka-yeni/main/public/images";

const sapkaModelleri = [
  { id: 1, ad: "Venedik Serisi Fötr", fiyat: "Toptan Sorunuz", img: `${rawPath}/sapka1.jpg` },
  { id: 2, ad: "Yaz Esintisi Hasır", fiyat: "Toptan Sorunuz", img: `${rawPath}/sapka2.jpg` },
  { id: 3, ad: "Parisienne Ressam", fiyat: "Toptan Sorunuz", img: `${rawPath}/sapka3.jpg` },
  { id: 4, ad: "Modern Vizör", fiyat: "Toptan Sorunuz", img: `${rawPath}/sapka4.jpg` }
];

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', backgroundColor: '#000', borderBottom: '1px solid #c9a063', position: 'sticky', top: 0, zIndex: 1000 }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#c9a063', letterSpacing: '3px', fontWeight: 'bold' }}>MODA ŞAPKA</h1>
    </Link>
    <div style={{ display: 'flex', gap: '25px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>ANA SAYFA</Link>
      <Link to="/katalog" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>KATALOG</Link>
      <Link to="/iletisim" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>İLETİŞİM</Link>
    </div>
  </nav>
);

const Home = () => (
  <div style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(to bottom, #000, #111)' }}>
    <h2 style={{ fontSize: '4rem', color: '#fff', margin: 0 }}>Toptan Bayan</h2>
    <h2 style={{ fontSize: '4rem', color: '#c9a063', fontStyle: 'italic', marginTop: '-10px' }}>Şapka Modelleri</h2>
    <p style={{ color: '#888', marginTop: '20px' }}>Butikler için özel seçilmiş 2026 koleksiyonu.</p>
    <Link to="/katalog">
      <button style={{ marginTop: '40px', backgroundColor: '#c9a063', color: '#000', padding: '15px 40px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>KATALOĞU İNCELE</button>
    </Link>
    <div style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto' }}>
       {/* Ana sayfa vitrin resmi */}
      <img src={`${rawPath}/sapka1.jpg`} style={{ width: '100%', border: '1px solid #c9a063', padding: '5px' }} alt="Vitrin" />
    </div>
  </div>
);

const Katalog = () => (
  <div style={{ padding: '50px', background: '#050505' }}>
    <h2 style={{ color: '#c9a063', textAlign: 'center', marginBottom: '40px' }}>2026 KOLEKSİYONU</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
      {sapkaModelleri.map(item => (
        <div key={item.id} style={{ background: '#000', border: '1px solid #1a1a1a', padding: '15px', textAlign: 'center' }}>
          <img src={item.img} alt={item.ad} style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
               onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x450?text=Resim+Yukleniyor"; }} />
          <h4 style={{ color: '#fff', marginTop: '15px' }}>{item.ad}</h4>
          <p style={{ color: '#c9a063' }}>{item.fiyat}</p>
        </div>
      ))}
    </div>
  </div>
);

const Iletisim = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center', color: '#fff' }}>
    <h2 style={{ color: '#c9a063' }}>Toptan Satış & İletişim</h2>
    <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Tüm Türkiye'deki butiklere sevkiyatımız vardır.</p>
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #c9a063', display: 'inline-block' }}>
      <span style={{ fontSize: '1.5rem' }}>📞 WhatsApp: </span>
      <a href="https://wa.me/905000000000" style={{ color: '#25D366', fontSize: '1.5rem', textDecoration: 'none' }}>+90 5XX XXX XX XX</a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
        <footer style={{ padding: '40px', textAlign: 'center', color: '#333', fontSize: '0.8rem' }}>
          MODA ŞAPKA | TOPTAN BUTİK TEDARİKİ © 2026
        </footer>
      </div>
    </Router>
  );
}

export default App;
