import React, { useState } from 'react';
import { useCart } from '../store/cart';
import Portal from './Portal';
import ProductSelector from './ProductSelector';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [showSelector, setShowSelector] = useState(false);

  const handleSelect = () => {
    if (product.comingSoon) return;

    // ✅ Only shirts open selector
    if (product.type === 'shirt') {
      setShowSelector(true);
      document.body.style.overflow = 'hidden';
    } else {
      // ✅ Other products go straight to cart
      add({
        ...product,
        qty: 1,
      });

      toast.success(`${product.title} added to cart!`);
    }
  };

  const handleClose = () => {
    setShowSelector(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={`product-card ${product.comingSoon ? 'coming-soon' : ''}`}>
        <div className="thumb">
          <img src={product.img} alt={product.title} />
        </div>

        <div className="info">
          <div className="title">{product.title}</div>

          {!product.comingSoon && (
            <div className="price">
              {product.priceOld ? (
                <>
                  <span className="new-price">
                    ₦{product.priceOld.toLocaleString()}
                  </span>
                  <span className="old-price">
                    ₦{product.price.toLocaleString()}
                  </span>
                </>
              ) : (
                <>₦{product.price.toLocaleString()}</>
              )}
            </div>
          )}

          {!product.comingSoon && (
            <button onClick={handleSelect} className="add">
              {product.type === 'shirt' ? 'Select' : 'Add to Cart'}
            </button>
          )}
        </div>

        {product.comingSoon && (
          <div className="coming-soon-overlay">Coming Soon</div>
        )}
      </div>

      {/* ✅ Modal only for shirts */}
      {showSelector && product.type === 'shirt' && (
        <Portal>
          <div className="modal-overlay" onClick={handleClose}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <ProductSelector product={product} onClose={handleClose} />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
