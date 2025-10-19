import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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

// ✅ Smooth scroll to top when navigating pages
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ✅ Movable Floating Gallery Button
function MovableGalleryButton() {
  const navigate = useNavigate();

  // Load saved position or set default
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('galleryBtnPos');
    return saved
      ? JSON.parse(saved)
      : { x: window.innerWidth - 80, y: window.innerHeight - 120 };
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y + window.scrollY,
    });
  };

  const duringDrag = (e) => {
    if (!dragging) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;
    const newPos = {
      x: Math.max(10, Math.min(clientX - offset.x, window.innerWidth - 60)),
      y: Math.max(
        10,
        Math.min(clientY - offset.y + window.scrollY, window.innerHeight - 60 + window.scrollY)
      ),
    };
    setPosition(newPos);
  };

  const stopDrag = () => {
    setDragging(false);
    localStorage.setItem('galleryBtnPos', JSON.stringify(position));
  };

  useEffect(() => {
    window.addEventListener('mousemove', duringDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', duringDrag);
    window.addEventListener('touchend', stopDrag);
    return () => {
      window.removeEventListener('mousemove', duringDrag);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', duringDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  });

  return (
    <button
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      onClick={() => navigate('/gallery')}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y - window.scrollY}px`, // keeps fixed on scroll
        zIndex: 1000,
        background: dragging ? '#111' : '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        opacity: dragging ? 0.7 : 1, // ✅ transparent while dragging
        cursor: dragging ? 'grabbing' : 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: dragging ? 'none' : '0.2s ease',
      }}
    >
      ✨
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
          <Route path="/products" element={<Products onSelectProduct={handleSelectProduct} />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>

      {/* ✅ Movable Gallery Button */}
      <MovableGalleryButton />

      {/* ✅ Product Selector Modal */}
      {showSelector && <ProductSelector product={selectedProduct} onClose={closeSelector} />}

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
          success: { iconTheme: { primary: '#22c55e', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
    </CartProvider>
  );
}
