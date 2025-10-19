import React, { useState } from 'react';
import { useCart } from '../store/cart';
import Portal from './Portal';
import ProductSelector from './ProductSelector';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [showSelector, setShowSelector] = useState(false);

  const handleSelect = () => {
    if (!product.comingSoon) setShowSelector(true);
    document.body.style.overflow = 'hidden';
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
                  <span className="old-price">₦{product.priceOld.toLocaleString()}</span>
                  <span className="new-price">₦{product.price.toLocaleString()}</span>
                </>
              ) : (
                <>₦{product.price.toLocaleString()}</>
              )}
            </div>
          )}

          {!product.comingSoon && (
            <button onClick={handleSelect} className="add">
              Select
            </button>
          )}
        </div>

        {product.comingSoon && (
          <div className="coming-soon-overlay">Coming Soon</div>
        )}
      </div>

      {/* ✅ Smooth Modal using Portal */}
      {showSelector && (
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
