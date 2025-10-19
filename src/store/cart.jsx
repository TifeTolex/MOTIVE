import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = sessionStorage.getItem('motive_cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    sessionStorage.setItem('motive_cart', JSON.stringify(items))
  }, [items])

function add(item) {
  setItems(prev => {
    // find an exact match (same product, variant, and size)
    const ex = prev.find(
      p => p.id === item.id && p.variant === item.variant && p.size === item.size
    );

    if (ex) {
      // if found, just update quantity
      return prev.map(p =>
        p.id === item.id && p.variant === item.variant && p.size === item.size
          ? { ...p, qty: p.qty + (item.qty || 1) }
          : p
      );
    }

    // if not found, add as a new unique entry
    return [...prev, { ...item, qty: item.qty || 1 }];
  });
}


  function remove(id) {
    setItems(prev => prev.filter(p => p.id !== id))
  }

  function updateQty(id, qty) {
    setItems(prev =>
      prev
        .map(p => p.id === id ? { ...p, qty: Math.max(0, qty) } : p)
        .filter(p => p.qty > 0)
    )
  }

  function clear() {
    setItems([])
  }

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
