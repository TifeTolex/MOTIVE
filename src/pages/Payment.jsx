
import React, { useState } from 'react';
import { useCart } from '../store/cart';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegCopy, FaCheck, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ACCOUNT_NUMBER = '7014847975';
const WHATSAPP_NUMBER = '2347014847975';

const formatPrice = (amount) =>
  `₦${Number(amount || 0).toLocaleString('en-NG')}`;

export default function Payment() {
  const { items: cartItems, total, clearCart } = useCart();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [confirmationStarted, setConfirmationStarted] = useState(false);

  const navigate = useNavigate();

  const isFormComplete =
    name.trim().length > 0 && address.trim().length > 0;

  const orderSummary = cartItems.map((item) => {
    const productName = item.name || item.title;
    const details = [
      item.variant,
      item.size ? `Size: ${item.size}` : null
    ].filter(Boolean).join(' - ');

    return `${productName}${details ? ` (${details})` : ''} x${item.qty || 1}`;
  }).join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello MOTIVE 👋,\n\n` +
    `I've made payment for my order. Here are my details:\n\n` +
    `Name: ${name.trim()}\n` +
    `Delivery Address: ${address.trim()}\n\n` +
    `ORDER DETAILS\n${orderSummary}\n\n` +
    `TOTAL: ${formatPrice(total)}\n\n` +
    `Please confirm my payment and order. Thank you!`
  );

  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
      setCopied(true);

      toast.success('Account number copied!', {
        position: 'bottom-center',
        autoClose: 2000
      });

      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error('Unable to copy. Please copy the number manually.');
    }
  };

  const handleConfirm = (e) => {
    if (!isFormComplete) {
      e.preventDefault();
      toast.warn('Please enter your full name and delivery address.');
      return;
    }

    if (confirmationStarted) {
      e.preventDefault();
      return;
    }

    setConfirmationStarted(true);

    toast.success('Opening WhatsApp to confirm your order...', {
      position: 'top-center',
      autoClose: 2500
    });

    // Allow the WhatsApp link to open before clearing the cart.
    setTimeout(() => {
      clearCart();
      navigate('/', { replace: true });
    }, 3000);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <main className="payment-page">
        <div className="empty-checkout">
          <span className="checkout-eyebrow">MOTIVE CHECKOUT</span>
          <h1>Your cart is empty.</h1>
          <p>
            Looks like you haven't selected anything yet.
            Find something that represents your motive.
          </p>
          <Link to="/products" className="checkout-back-btn">
            <FaArrowLeft /> Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="payment-page">
      <ToastContainer />

      <div className="checkout-header">
        <span className="checkout-eyebrow">THE MOTIVE EXPERIENCE</span>

        <h1>COMPLETE YOUR <span>ORDER.</span></h1>

        <p>
          Almost there. Complete your payment and let us get
          your MOTIVE order ready.
        </p>
      </div>

      <div className="checkout-layout">

        {/* ORDER SUMMARY */}
        <section className="cart-summary">
          <div className="checkout-section-heading">
            <div>
              <span>01 / YOUR SELECTION</span>
              <h2>Order Summary</h2>
            </div>

            <span className="item-count">
              {cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'}
            </span>
          </div>

          <div className="summary-products">
            {cartItems.map((item, index) => {
              const quantity = item.qty || 1;

              return (
                <div
                  key={`${item.id || item.title}-${item.variant || ''}-${item.size || ''}-${index}`}
                  className="summary-item"
                >
                  <div className="summary-image-wrap">
                    <img
                      src={item.img || item.image || item.images?.[0]}
                      alt={item.name || item.title}
                      className="summary-img"
                    />
                  </div>

                  <div className="summary-details">
                    <h3 className="summary-name">
                      {item.name || item.title}
                    </h3>

                    <div className="summary-meta">
                      {item.variant && (
                        <span>{item.variant}</span>
                      )}

                      {item.size && (
                        <span>Size: {item.size}</span>
                      )}

                      <span>Qty: {quantity}</span>
                    </div>

                    <strong className="summary-price">
                      {formatPrice(Number(item.price || 0) * quantity)}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="summary-total">
            <span>ORDER TOTAL</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </section>

        {/* PAYMENT DETAILS */}
        <section className="payment-info">
          <div className="checkout-section-heading">
            <div>
              <span>02 / PAYMENT DETAILS</span>
              <h2>Make Payment</h2>
            </div>
          </div>

          <p className="payment-instruction">
            Transfer the total amount to the account below.
          </p>

          <div className="account-box">
            <div className="account-brand">
              <span className="account-brand-dot"></span>
              MOTIVE CLOTHING
            </div>

            <span className="account-label">BANK NAME</span>
            <h3>MONIEPOINT MFB</h3>

            <span className="account-label">ACCOUNT NUMBER</span>

            <div className="account-number">
              <strong>{ACCOUNT_NUMBER}</strong>

              <button
                type="button"
                onClick={handleCopyAccount}
                className="copy-btn"
                aria-label="Copy account number"
              >
                {copied ? <FaCheck /> : <FaRegCopy />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <span className="account-label">ACCOUNT NAME</span>
            <h3>MOTIVE DRIVEN CLOTHING VENTURES</h3>

            <div className="account-total">
              <span>AMOUNT TO PAY</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>

          <div className="payment-reminder">
            <span>IMPORTANT</span>
            <p>
              Please ensure that you transfer the exact order total.
              Keep your transfer receipt for payment confirmation.
            </p>
          </div>
        </section>

      </div>

      {/* CUSTOMER DETAILS */}
      <section className="customer-details">
        <div className="checkout-section-heading">
          <div>
            <span>03 / DELIVERY INFORMATION</span>
            <h2>Where should we deliver?</h2>
          </div>
        </div>

        <div className="checkout-form">
          <label htmlFor="customer-name">FULL NAME</label>

          <input
            id="customer-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="payment-input"
            autoComplete="name"
            required
          />

          <label htmlFor="customer-address">DELIVERY ADDRESS</label>

          <textarea
            id="customer-address"
            placeholder="Enter your complete delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="payment-textarea"
            rows={4}
            autoComplete="street-address"
            required
          />

          <p className="checkout-note">
            Your delivery information will be included in your WhatsApp order confirmation.
          </p>

          <a
            href={isFormComplete ? whatsappLink : undefined}
            className={`whatsapp-btn ${!isFormComplete || confirmationStarted ? 'disabled' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConfirm}
            aria-disabled={!isFormComplete || confirmationStarted}
          >
            <FaWhatsapp size={21} />
            {confirmationStarted ? 'Opening WhatsApp...' : 'CONFIRM ORDER ON WHATSAPP'}
          </a>

          <Link to="/products" className="continue-shopping">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </section>

      <div className="checkout-footer">
        <span>MOTIVE</span>
        <p>DRIVEN BY PURPOSE.</p>
      </div>

    </main>
  );
}
