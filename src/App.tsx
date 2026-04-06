import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Categories } from './Categories';
import { CategoryDetail } from './CategoryDetail';
import { HasirKadinSapka } from './HasirKadinSapka';
import { SiperlikSapka } from './SiperlikSapka';
import { Contact } from './Contact';
import { ProductProvider } from './ProductContext';
import { FloatingWhatsApp } from './FloatingWhatsApp';

function App() {
  return (
    <ProductProvider>
      <Router basename="/moda-sapka-yeni">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryDetail />} />
            <Route path="/hasir-kadin-sapka" element={<HasirKadinSapka />} />
            <Route path="/siperlik-sapka" element={<SiperlikSapka />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <FloatingWhatsApp />
      </Router>
    </ProductProvider>
  );
}

export default App;
