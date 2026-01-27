import React, { useState } from 'react'
import { useCart } from '../store/cart'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaRegCopy } from "react-icons/fa6";


export default function Payment() {
  const { items: cartItems, total, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="payment-page">
        <h2 className="payment-title">No Items in Cart</h2>
        <p style={{ textAlign: 'center' }}>
          Please add some products before proceeding to payment.
        </p>
      </section>
    )
  }

  // ✅ Include size in order summary
  const orderSummary = cartItems
    .map(
      (item) =>
        `${item.name || item.title} (${item.variant || ''}${
          item.size ? ` - ${item.size}` : ''
        }) x${item.qty || 1}`
    )
    .join(', ')

  // ✅ Include size in WhatsApp message
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
      toast.warn('Please enter your name and address 📝')
      return
    }

    // ✅ Show success message
    toast.success('Payment details sent 🎉 Redirecting to home...', {
      position: 'top-center',
      autoClose: 2500,
    })

    // ✅ Let WhatsApp open first, then redirect & clear cart
    setTimeout(() => {
      clearCart()
      navigate('/', { replace: true })
    }, 3000)
  }

  // ✅ Copy Account Number
  const accountNumber = '7014847975'
  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber)
    toast.success('Account number copied 📋', {
      position: 'bottom-center',
      autoClose: 2000,
    })
  }

  return (
    <section className="payment-page">
      <ToastContainer />

      <h2 className="payment-title">Complete Your Order</h2>

      {/* ✅ Cart Summary */}
{/* ✅ Cart Summary */}
<div className="cart-summary">
  <h3>Your Order Summary</h3>
  <ul>
    {cartItems.map((item, i) => (
      <li key={i} className="summary-item">
        {/* ✅ Always show each product's unique image */}
        <img
          src={item.img || item.image || item.images?.[0]}
          alt={item.name || `Product ${i + 1}`}
          className="summary-img"
        />

        <div className="summary-details">
          <p className="summary-name">
            {item.name || item.title}
            {item.qty > 1 && (
              <span className="summary-qty"> ({item.qty}×)</span>
            )}
          </p>

          <small>
            {item.variant && (
              <>
                <span className="variant">{item.variant}</span>
                {item.size && (
                  <>
                    <span className="summary-separator"> – </span>
                    <span className="size">Size: {item.size}</span>
                  </>
                )}
                <span className="summary-separator"> – </span>
              </>
            )}
            <span className="summary-price">
              ₦{(item.priceOld * item.qty).toLocaleString()}
            </span>
          </small>
        </div>
      </li>
    ))}
  </ul>
  <h4>Total: ₦{total.toLocaleString()}</h4>
</div>



      {/* ✅ Payment Instructions */}
      <div className="payment-info">
        <p >MAKE YOUR PAYMENT TO THE ACCOUNT BELOW 👇</p>
        <div className="account-box">
          <h3>MOTIVE CLOTHING</h3>
          <p>Bank: MONIEPOINT MFB </p>
          <p className="account-number">
            Account Number: <strong>{7014847975}</strong>{' '}
            <button onClick={handleCopyAccount} className="copy-btn">
              <FaRegCopy size={16} />
            </button>
          </p>
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
