import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../store/cart'
import CartModal from './CartModal'

export default function Header(){
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="site-header">
        <div className="logo"><Link to="/">Motive</Link></div>
        <nav className="nav-links">
          <Link to="new">New</Link>
          <Link to="collections">Collections</Link>
          <Link to="about">About</Link>
            <Link to="gallery">Gallery</Link>
        </nav>
        <div className="right">
          <Link to="/products" className="order-btn">Order</Link>
          <button className="cart-icon" onClick={()=> setOpen(true)}>
            🛒 <span className="badge">{count}</span>
          </button>
        </div>
      </header>
      <CartModal open={open} onClose={()=>setOpen(false)} />
    </>
  )
}
