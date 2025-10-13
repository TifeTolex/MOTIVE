import React, { useState, useEffect } from 'react';
import { useCart } from '../store/cart';
import toast from 'react-hot-toast'; // ✅ import toast

export default function ProductSelector({ product, onClose }) {
  const { add } = useCart();
  const [selected, setSelected] = useState(null);

  // ✅ Disable background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // ✅ Available shirt options
  const OPTIONS = [
    { id: 'classic', name: 'Classic Tee', img: '/images/motive-classic.png' },
    { id: 'front', name: 'White Variant', img: '/images/motive-white-variant.png' },
    { id: 'back', name: 'Black Variant', img: '/images/motive-black-variant.png' },
  ];

  // ✅ Confirm selection and add to cart
  const handleConfirm = () => {
    if (!selected) {
      toast.error('Please select a shirt type.');
      return;
    }

    add({ ...product, variant: selected.name, img: selected.img, qty: 1 });
    toast.success(`${selected.name} added to cart!`);
    onClose();
  };

  return (
    <div className="selector-overlay" onClick={onClose}>
      <div
        className="selector-modal"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h3 className="selector-title">Select your {product.title}</h3>

        <div className="options">
          {OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`option ${selected?.id === opt.id ? 'active' : ''}`}
              onClick={() => setSelected(opt)}
            >
              <img src={opt.img} alt={opt.name} className="option-img" />
              <span className="option-name">{opt.name}</span>
            </div>
          ))}
        </div>

        <div className="actions">
          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={handleConfirm}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
