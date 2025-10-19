import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Payment from './pages/Payment';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import { CartProvider } from './store/cart';
import ProductSelector from './components/ProductSelector';
import { Toaster } from 'react-hot-toast'; // ✅ Toast system added

// ✅ AOS Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ ScrollToTop Component (inline here for simplicity)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration (in ms)
      easing: 'ease-in-out',
      once: true, // Run only once per element
      mirror: false, // Disable reverse animation on scroll-up
    });
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowSelector(true);
  };

  const closeSelector = () => {
    setShowSelector(false);
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}

      <div className={`app-root ${showSplash ? 'blurred' : ''}`}>
        <Header />

        {/* ✅ Ensure scroll to top on route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products onSelectProduct={handleSelectProduct} />}
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
  {/* Floating Gallery Button */}
      <Link to="/gallery" className="floating-gallery-btn">
        ✨
      </Link>
      

      {/* ✅ Global Product Selector Modal */}
      {showSelector && (
        <ProductSelector product={selectedProduct} onClose={closeSelector} />
      )}

      {/* ✅ Toast System */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            background: '#0a0a0a',
            color: '#fff',
            borderRadius: '14px',
            padding: '12px 20px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.9rem',
            border: '1px solid #222',
            boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </CartProvider>
  );
}
