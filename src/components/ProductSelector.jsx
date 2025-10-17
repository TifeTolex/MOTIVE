import React, { useState, useEffect } from 'react';
import { useCart } from '../store/cart';
import toast from 'react-hot-toast';

// ✅ Import images
import classicImg from '../assets/images/motive-classic.png';
import whiteImg from '../assets/images/motive-white-variant.png';
import blackImg from '../assets/images/motive-black-variant.png';

export default function ProductSelector({ product, onClose }) {
  const { add } = useCart();
  const [selected, setSelected] = useState(null);
  const [size, setSize] = useState('');

  // ✅ Disable background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // ✅ Shirt variants
  const OPTIONS = [
    { id: 'classic', name: 'Classic Tee', img: classicImg },
    { id: 'white', name: 'White Variant', img: whiteImg },
    { id: 'black', name: 'Black Variant', img: blackImg },
  ];

  // ✅ Sizes
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];

  // ✅ Confirm selection and add to cart
  const handleConfirm = () => {
    if (!selected) {
      toast.error('Please select a shirt type.');
      return;
    }
    if (!size) {
      toast.error('Please select a size.');
      return;
    }

    add({
      ...product,
      variant: selected.name,
      size,
      img: selected.img,
      qty: 1,
    });

    toast.success(`${selected.name} (${size}) added to cart!`);
    onClose();
  };

  return (
    <div className="selector-overlay" onClick={onClose}>
      <div
        className="selector-modal"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h3 className="selector-title">Select your {product.title}</h3>

        {/* ✅ Variant Options */}
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

        {/* ✅ Size Options */}
        <div className="size-section">
          <p>Select Size:</p>
          <div className="size-options">
            {SIZES.map((s) => (
              <button
                key={s}
                className={`size-btn ${size === s ? 'active' : ''}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Action Buttons */}
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
