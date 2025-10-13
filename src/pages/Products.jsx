import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSelector from '../components/ProductSelector';

const PRODUCTS = [
  { id: 1, title: 'Motive Tee', price: 13000, priceOld: 15000, img: '/images/mv neww.png', comingSoon: false },
  { id: 2, title: 'Motive Hoodie', price: 10000, img: 'images/new.png', comingSoon: true },
  { id: 3, title: 'Motive Cap', price: 3500, img: 'images/new2.png', comingSoon: true },
  { id: 4, title: 'Motive Jacket', price: 22000, img: '/images/new3.png', comingSoon: true },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="products-page">
      <h2 className='new-h2'>Select items</h2>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={() => setSelectedProduct(p)} />
        ))}
      </div>

      {selectedProduct && (
        <ProductSelector
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
