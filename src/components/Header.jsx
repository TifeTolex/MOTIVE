
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store/cart';
import CartModal from './CartModal';

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Motive</Link>
        </div>

        <nav className="nav-links">
         
          <Link to="/new">New</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="right">
          <Link to="/products" className="order-btn">
            Order
          </Link>

          <button
            className="cart-icon"
            onClick={() => {
              setMenuOpen(false);
              setOpen(true);
            }}
            aria-label="Open cart"
          >
            🛒 <span className="badge">{count}</span>
          </button>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/new" onClick={closeMenu}>New</Link>
            <Link to="/collections" onClick={closeMenu}>Collections</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/products" onClick={closeMenu}>Order</Link>
          </nav>
        )}
      </header>

      <CartModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
