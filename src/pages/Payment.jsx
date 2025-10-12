import React, { useState } from 'react'
import { useCart } from '../store/cart'

export default function Payment() {
  const { items: cartItems, total, clearCart } = useCart()  // ✅ added clearCart
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="payment-page">
        <h2 className="payment-title">No Items in Cart</h2>
        <p style={{ textAlign: 'center' }}>Please add some products before proceeding to payment.</p>
      </section>
    )
  }

  const orderSummary = cartItems
    .map((item) => `${item.name || item.title} (${item.variant || ''}) x${item.qty || 1}`)
    .join(', ')

  const whatsappMessage = encodeURIComponent(
    `Hello Motive 👋,\n\nI just made a payment for my order.\n\n` +
      `Name: ${name}\n` +
      `Delivery Address: ${address}\n` +
      `Items: ${orderSummary}\n` +
      `Total: ₦${total}\n\n` +
      `Please confirm my payment.`
  )

  const whatsappLink = `https://wa.me/2347014847975?text=${whatsappMessage}`
  const isFormComplete = name && address

  const handleConfirm = (e) => {
    if (!isFormComplete) {
      e.preventDefault()
      return
    }

    // ✅ Clear the cart after redirect
    setTimeout(() => {
      clearCart()
      // Optional reload or redirect after 1s
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    }, 500)
  }

  return (
    <section className="payment-page">
      <h2 className="payment-title">Complete Your Order</h2>

      {/* ✅ Cart Summary */}
      <div className="cart-summary">
        <h3>Your Order Summary</h3>
        <ul>
          {cartItems.map((item, i) => (
            <li key={i} className="summary-item">
              <img src={item.img} alt={item.name} className="summary-img" />
              <div className="summary-details">
                <p className="summary-name">{item.name || item.title}</p>
                <small>
                  {item.variant && (
                    <>
                      <span className="variant">{item.variant}</span>
                      <span className="summary-separator"> – </span>
                    </>
                  )}
                  <span className="summary-price">₦{item.price}</span>
                </small>
              </div>
            </li>
          ))}
        </ul>
        <h4>Total: ₦{total}</h4>
      </div>

      {/* ✅ Payment Instructions */}
      <div className="payment-info">
        <p>Make your payment to the account below 👇</p>
        <div className="account-box">
          <h3>MOTIVE CLOTHING</h3>
          <p>Bank: ACCESS BANK</p>
          <p>Account Number: <strong>1655505452</strong></p>
          <p>Account Name: <strong>OLAROGBA TOLUWANI FESTUS</strong></p>
          <p>Total: ₦{total}</p>
        </div>
      </div>

      {/* ✅ User Info */}
      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="payment-input"
      />

      <textarea
        placeholder="Enter your delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="payment-textarea"
        rows={3}
      />

      <a
        href={isFormComplete ? whatsappLink : '#'}
        className={`whatsapp-btn ${!isFormComplete ? 'disabled' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleConfirm}
      >
        Confirm on WhatsApp
      </a>
    </section>
  )
}
