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
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ✅ Floating Scroll Button (movable + saves position)
function FloatingScrollButton() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('floatingBtnPos');
    return saved
      ? JSON.parse(saved)
      : { x: window.innerWidth - 80, y: 100 };
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const startTouch = (e) => {
    setDragging(true);
    const touch = e.touches[0];
    setOffset({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const moveDrag = (clientX, clientY) => {
    const newPos = {
      x: Math.max(20, Math.min(clientX - offset.x, window.innerWidth - 60)),
      y: Math.max(20, Math.min(clientY - offset.y, window.innerHeight - 60)),
    };
    setPosition(newPos);
  };

  const duringDrag = (e) => {
    if (!dragging) return;
    moveDrag(e.clientX, e.clientY);
  };

  const duringTouchDrag = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    moveDrag(touch.clientX, touch.clientY);
  };

  const stopDrag = () => {
    setDragging(false);
    localStorage.setItem('floatingBtnPos', JSON.stringify(position));
  };

  useEffect(() => {
    window.addEventListener('mousemove', duringDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', duringTouchDrag);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mousemove', duringDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', duringTouchDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [dragging, offset, position]);

  if (!visible) return null;

  return (
    <button
      onMouseDown={startDrag}
      onTouchStart={startTouch}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        zIndex: 1000,
        background: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        cursor: dragging ? 'grabbing' : 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: dragging ? 'none' : '0.2s ease',
      }}
    >
      <FaArrowUp size={18} />
    </button>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
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

      {/* ✅ Floating Scroll Button */}
      <FloatingScrollButton />

      {/* ✅ Product Selector */}
      {showSelector && (
        <ProductSelector product={selectedProduct} onClose={closeSelector} />
      )}

      {/* ✅ Toast Notifications */}
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
