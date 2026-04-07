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
    padding: '28px 44px',
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
    gap: '28px',
    alignItems: 'center',
  } as React.CSSProperties,

  navLink: {
    color: '#f2f2f2',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.05rem',
    letterSpacing: '0.5px',
  } as React.CSSProperties,

  hero: {
    minHeight: 'calc(100vh - 93px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
  } as React.CSSProperties,

  title: {
    fontSize: '4rem',
    marginBottom: '32px',
    color: '#c79a56',
  } as React.CSSProperties,

  heroImage: {
    width: 'min(420px, 85vw)',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '28px',
    boxShadow: '0 0 30px rgba(199, 154, 86, 0.18)',
    objectFit: 'cover',
  } as React.CSSProperties,

  button: {
    display: 'inline-block',
    padding: '16px 32px',
    backgroundColor: '#b88746',
    color: '#111',
    textDecoration: 'none',
    fontWeight: 700,
    border: '1px solid #7b5a2d',
    borderRadius: '6px',
  } as React.CSSProperties,

  katalogWrap: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '48px 20px 80px',
  } as React.CSSProperties,

  katalogTitle: {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '36px',
    color: '#c79a56',
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
  } as React.CSSProperties,

  card: {
    backgroundColor: '#0d0d0d',
    border: '1px solid #2a2a2a',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
  } as React.CSSProperties,

  cardImg: {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    display: 'block',
    backgroundColor: '#111',
  } as React.CSSProperties,

  cardBody: {
    padding: '18px',
  } as React.CSSProperties,

  cardTitle: {
    fontSize: '1.35rem',
    margin: '0 0 10px',
    color: '#e0b16a',
  } as React.CSSProperties,

  price: {
    margin: 0,
    color: '#f1f1f1',
    fontSize: '1rem',
  } as React.CSSProperties,
};

const Navbar = () => (
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

const Home = () => (
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

const Katalog = () => (
  <section style={styles.katalogWrap}>
    <h2 style={styles.katalogTitle}>Ürün Kataloğu</h2>

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

function App() {
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

export default App;
