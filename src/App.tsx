import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const baseImg = `${import.meta.env.BASE_URL}images`;

const sapkaModelleri = [
  {
    id: 1,
    ad: 'Venedik Fötr',
    fiyat: 'Toptan Sorunuz',
    img: `${baseImg}/sapka1.jpeg.jpeg`,
  },
  {
    id: 2,
    ad: 'Yazlık Hasır',
    fiyat: 'Toptan Sorunuz',
    img: `${baseImg}/sapka2.jpeg.jpeg`,
  },
  {
    id: 3,
    ad: 'Parisienne',
    fiyat: 'Toptan Sorunuz',
    img: `${baseImg}/sapka3.jpeg.jpeg`,
  },
  {
    id: 4,
    ad: 'Modern Vizör',
    fiyat: 'Toptan Sorunuz',
    img: `${baseImg}/sapka4.jpeg.jpeg`,
  },
];

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#c79a56',
    fontFamily: 'Georgia, serif',
  } as React.CSSProperties,

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 40px',
    borderBottom: '1px solid #7b5a2d',
  } as React.CSSProperties,

  brand: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#c79a56',
    textDecoration: 'none',
  } as React.CSSProperties,

  navLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  } as React.CSSProperties,

  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 700,
  } as React.CSSProperties,

  hero: {
    minHeight: 'calc(100vh - 89px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
  } as React.CSSProperties,

  title: {
    fontSize: '4rem',
    marginBottom: '30px',
    color: '#c79a56',
  } as React.CSSProperties,

  heroImage: {
    width: '360px',
    maxWidth: '90%',
    borderRadius: '10px',
    marginBottom: '24px',
    border: '1px solid #7b5a2d',
    objectFit: 'cover',
    display: 'block',
  } as React.CSSProperties,

  button: {
    display: 'inline-block',
    background: '#b88746',
    color: '#111',
    textDecoration: 'none',
    padding: '16px 28px',
    fontWeight: 700,
    borderRadius: '6px',
    marginTop: '12px',
  } as React.CSSProperties,

  catalog: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px 80px',
  } as React.CSSProperties,

  catalogTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#c79a56',
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
  } as React.CSSProperties,

  card: {
    background: '#0d0d0d',
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
    overflow: 'hidden',
  } as React.CSSProperties,

  cardImg: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    display: 'block',
  } as React.CSSProperties,

  cardBody: {
    padding: '16px',
  } as React.CSSProperties,

  cardTitle: {
    marginBottom: '10px',
    color: '#e0b16a',
    fontSize: '1.3rem',
  } as React.CSSProperties,

  price: {
    color: '#fff',
  } as React.CSSProperties,
};

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>
        MODA ŞAPKA
      </Link>

      <div style={styles.navLinks}>
        <Link to="/" style={styles.navLink}>
          ANA SAYFA
        </Link>
        <Link to="/katalog" style={styles.navLink}>
          KATALOG
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>2026 Koleksiyonu</h1>

      <img
        src={`${baseImg}/sapka1.jpeg.jpeg`}
        alt="Vitrin"
        style={styles.heroImage}
      />

      <Link to="/katalog" style={styles.button}>
        KATALOĞU GÖR
      </Link>
    </section>
  );
}

function Katalog() {
  return (
    <section style={styles.catalog}>
      <h2 style={styles.catalogTitle}>Ürün Kataloğu</h2>

      <div style={styles.grid}>
        {sapkaModelleri.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.img} alt={item.ad} style={styles.cardImg} />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{item.ad}</h3>
              <p style={styles.price}>{item.fiyat}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div style={styles.page}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
        </Routes>
      </div>
    </Router>
  );
}
