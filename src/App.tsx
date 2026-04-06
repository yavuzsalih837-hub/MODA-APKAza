import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Her şeyi tek dosyada topluyoruz, böylece "dosya bulunamadı" hatası imkansız hale geliyor
const HomePage = () => (
  <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
    <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyBetween: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>MODA ŞAPKA</h1>
      <div>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#666' }}>Anasayfa</Link>
        <span style={{ color: '#666' }}>Toptan Satış</span>
      </div>
    </nav>
    
    <div style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Yeni Sezon Toptan Şapkalar</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
        Boutique mağazalarınız için en kaliteli ve trend modeller burada.
      </p>
      <img 
        src="https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=800" 
        alt="Şapka Vitrin" 
        style={{ width: '100%', maxWidth: '800px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
      />
    </div>

    <footer style={{ padding: '30px', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
      © 2026 MODA ŞAPKA - Türkiye'nin Toptan Şapka Merkezi
    </footer>
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
