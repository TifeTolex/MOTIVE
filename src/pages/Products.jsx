
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSelector from '../components/ProductSelector';

const PRODUCTS = [
  {
    id: 1,
    title: 'Motive Tee',
    price: 15000,
    img: '/images/mv-new.png',
    type: 'shirt',
    comingSoon: false
  },
  {
    id: 2,
    title: 'Motive Tank Top',
    price: 10000,
    img: '/images/motive armless top.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 3,
    title: 'Motive Sleeveless',
    price: 13000,
    img: '/images/motive tank top.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 4,
    title: 'Motive Snapback',
    price: 10000,
    img: '/images/motive cap.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 5,
    title: 'Motive Trucker Cap',
    price: 6000,
    img: '/images/motive trucker cap.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 6,
    title: 'Motive Sleeve Shirt',
    price: 15000,
    img: '/images/mot 1.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 7,
    title: 'Motive Joggers',
    price: 15000,
    img: '/images/mot 3.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 8,
    title: 'Motive Beta Pair',
    price: 28000,
    img: '/images/mot 2.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 9,
    title: 'Motive Beta-Go',
    price: 8000,
    img: '/images/Go-series.png',
    type: 'accessory',
    comingSoon: false
  },
  {
    id: 10,
    title: 'Motive Long Sleeve',
    price: 15000,
    img: '/images/longsleeve.png',
    type: 'accessory',
    comingSoon: true
  },
  {
    id: 11,
    title: 'Motive Hoodie',
    price: 28000,
    img: '/images/hoodie.png',
    type: 'accessory',
    comingSoon: true
  },
  {
    id: 12,
    title: 'Motive Joggers',
    price: 8000,
    img: '/images/new-joggers.jpg',
    type: 'accessory',
    comingSoon: true
  },
  {
    id: 13,
    title: 'Motive Facecap',
    price: 7000,
    img: '/images/burgundy cap.jpg',
    type: 'accessory',
    comingSoon: true
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="products-page">

      <header className="products-heading">
        <span className="products-eyebrow">
          THE MOTIVE COLLECTION
        </span>

        <h1 className="new-h2">
          FIND YOUR MOTIVE<span>.</span>
        </h1>

        <p>
          More than clothing. Discover pieces that represent your
          identity, your energy and what drives you.
        </p>

        <small>
          All available products come in different colour options.
        </small>
      </header>

      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={() => setSelectedProduct(product)}
          />
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
