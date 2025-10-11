import React from 'react';
import { useCart } from '../store/cart';

export default function ProductCard({ product }) {
  const { add } = useCart();

  const handleAdd = () => {
    if (!product.comingSoon) add({ ...product, qty: 1 });
  };

  return (
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
          <button onClick={handleAdd} className="add">
            Add to cart
          </button>
        )}
      </div>

      {product.comingSoon && (
        <div className="coming-soon-overlay">Coming Soon</div>
      )}
    </div>
  );
}
