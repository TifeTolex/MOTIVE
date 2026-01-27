import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSelector from '../components/ProductSelector';

const PRODUCTS = [
  { id: 1, title: 'Motive Tee', price: 15000, priceOld:15000,  img: '/images/mv-new.png',type: 'shirt' , comingSoon: false },
  { id: 2, title: 'Motive Tank Top', price: 8000, priceOld: 10000, img: '/images/motive armless top.png',  type: 'accessory' , comingSoon: false },
  { id: 4, title: 'Motive Sleeveless', price: 11000, priceOld : 13000, img: '/images/motive tank top.png', type: 'accessory'  , comingSoon: false },
  { id: 3, title: 'Motive Face Cap', price: 8500, priceOld: 10000, img: 'images/motive cap.png', type: 'accessory' , comingSoon: false },
  { id: 4, title: 'Motive Trucker Cap', price: 5000, priceOld: 6000,  img: '/images/motive trucker cap.png', type: 'accessory' , comingSoon: false },
  { id: 4, title: 'Motive Joggers', price: 15000, priceOld: 15000, img: '/images/new3.png',type: 'accessory' , comingSoon: true },
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
