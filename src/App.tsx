import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const baseImg = "/moda-sapka-yeni/images";

const sapkaModelleri = [
  { id: 1, ad: "Venedik Fötr", fiyat: "Toptan Sorunuz", img: `${baseImg}/sapka1.jpeg` },
  { id: 2, ad: "Yazlık Hasır", fiyat: "Toptan Sorunuz", img: `${baseImg}/sapka2.jpeg` },
  { id: 3, ad: "Parisienne", fiyat: "Toptan Sorunuz", img: `${baseImg}/sapka3.jpeg` },
  { id: 4, ad: "Modern Vizör", fiyat: "Toptan Sorunuz", img: `${baseImg}/sapka4.jpeg` }
];

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', background: '#000', borderBottom: '1px solid #c9a063' }}>
    <Link to="/" style={{ textDecoration: 'none' }}><h1 style={{ color: '#c9a063', margin: 0, fontSize: '1.5rem' }}>MODA ŞAPKA</h1></Link>
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>ANA SAYFA</Link>
      <Link to="/katalog" style={{ color: '#fff', textDecoration: 'none' }}>KATALOG</Link>
    </div>
  </nav>
);

const Home = () => (
  <div style={{ textAlign: 'center', padding: '100px 20px', background: '#000', color: '#fff' }}>
    <h2 style={{ fontSize: '3rem', color: '#c9a063' }}>2026 Koleksiyonu</h2>
    <img src={`${baseImg}/sapka1.jpeg`} style={{ width: '100%', maxWidth: '400px', border: '1px solid #c9a063', marginTop: '20px' }} alt="Vitrin" />
    <br/>
    <Link to="/katalog"><button style={{ marginTop: '30px', background: '#c9a063', padding: '15px 30px', cursor: 'pointer', fontWeight: 'bold' }}>KATALOĞU GÖR</button></Link>
  </div>
);

const Katalog = () => (
  <div style={{ padding: '50px', background: '#000', color: '#fff' }}>
    <h2 style={{ textAlign: 'center', color: '#c9a063', marginBottom: '30px' }}>Ürün Kataloğu</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {sapkaModelleri.map(item => (
        <div key={item.id} style={{ border: '1px solid #222', padding: '15px', textAlign: 'center' }}>
          <img src={item.img} style={{ width: '100%', height: '300px', objectFit: 'cover' }} alt={item.ad} />
          <h3 style={{ color: '#c9a063', marginTop: '15px' }}>{item.ad}</h3>
        </div>
      ))}
    </div>
  </div>
);

function App() { return ( <Router><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/katalog" element={<Katalog />} /></Routes></Router> ); }
export default App;
