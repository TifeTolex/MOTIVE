import React from 'react'
import { useCart } from '../store/cart'
import { Link } from 'react-router-dom'

export default function CartModal({open, onClose}){
  const { items, total, updateQty, clear } = useCart()
  if(!open) return null
  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <h4>Your cart</h4>
        <div className="cart-list">
          {items.length===0 && <div className="empty">No items</div>}
          {items.map(it=>(
            <div className="cart-row" key={it.id}>
              <div className="left">
                <div className="title">{it.title}</div>
                <div className="meta">₦{it.price.toLocaleString()} · x {it.qty}</div>
              </div>
              <div className="actions">
                <button onClick={()=> updateQty(it.id, it.qty-1)} className='qty-btn'>-</button>
                <button onClick={()=> updateQty(it.id, it.qty+1)} className='qty-btn'>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div>Total: ₦{total.toLocaleString()}</div>
          <div className="cart-ctas">
            <button onClick={clear} className="muted">Clear</button>
            <Link to="/payment" className="pay" onClick={onClose}>Pay Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
