import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSelector from '../components/ProductSelector';

const PRODUCTS = [
  { id: 1, title: 'Motive Tee', price: 4500, priceOld: 15000, img: '/src/assets/p1.png', comingSoon: false },
  { id: 2, title: 'Motive Hoodie', price: 10000, img: '/src/assets/p2.svg', comingSoon: true },
  { id: 3, title: 'Motive Cap', price: 3500, img: '/src/assets/p3.svg', comingSoon: true },
  { id: 4, title: 'Motive Jacket', price: 22000, img: '/src/assets/p4.svg', comingSoon: true },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="products-page">
      <h2>Select items</h2>

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
