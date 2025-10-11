import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Payment from './pages/Payment'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './store/cart'
import Splash from './components/Splash'
import Gallery from './pages/Gallery'
import { Link } from 'react-router-dom'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Always show splash on every reload
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000) // 4 seconds splash duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <CartProvider>
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
      <div className={`app-root ${showSplash ? 'blurred' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
      <Link to="/gallery" className="floating-gallery-btn">
  ✨
</Link>
    </CartProvider>
  )
}
