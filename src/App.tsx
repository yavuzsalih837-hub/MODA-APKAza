import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Categories } from './Categories';
import { CategoryDetail } from './CategoryDetail';
import { Contact } from './Contact';
import { ProductProvider } from './ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router basename="/moda-sapka-yeni">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ProductProvider>
  );
}

export default App;
