import React from 'react'
import { useCart } from '../store/cart'

export default function Payment(){
  const { total } = useCart()
  return (
    <main className="payment-page">
      <h2>Payment</h2>
      <p>This is a placeholder payment page. We'll integrate a real provider later.</p>
      <div className="pay-card">
        <div>Amount: <strong>₦{total.toLocaleString()}</strong></div>
        <button className="glitter" onClick={()=> alert('Payment flow to be implemented')}>Proceed (demo)</button>
      </div>
    </main>
  )
}
