import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = sessionStorage.getItem('motive_cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // 🧠 Persist cart in sessionStorage
  useEffect(() => {
    sessionStorage.setItem('motive_cart', JSON.stringify(items));
  }, [items]);

  // ➕ Add item (check for same variant + size)
  function add(item) {
    setItems(prev => {
      const existing = prev.find(
        p => p.id === item.id && p.variant === item.variant && p.size === item.size
      );

      if (existing) {
        return prev.map(p =>
          p.id === item.id && p.variant === item.variant && p.size === item.size
            ? { ...p, qty: p.qty + (item.qty || 1) }
            : p
        );
      }

      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  }

  // ❌ Remove by exact match
  function remove(id, variant, size) {
    setItems(prev =>
      prev.filter(
        p => !(p.id === id && p.variant === variant && p.size === size)
      )
    );
  }

  // 🔁 Update quantity for exact match
  function updateQty(id, variant, size, qty) {
    setItems(prev =>
      prev
        .map(p =>
          p.id === id && p.variant === variant && p.size === size
            ? { ...p, qty: Math.max(0, qty) }
            : p
        )
        .filter(p => p.qty > 0)
    );
  }

  // 🧹 Clear entire cart
  function clear() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, add, remove, updateQty, clear, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
