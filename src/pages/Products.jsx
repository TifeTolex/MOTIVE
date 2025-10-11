import React from 'react'
import ProductCard from '../components/ProductCard'

const PRODUCTS = [
  {
    id: 1,
    title: 'Motive Tee',
    price: 13000,
    priceOld: 15000,
    img: '/src/assets/p1.svg',
    comingSoon: false
  },
  {
    id: 2,
    title: 'Motive Hoodie',
    price: 10000,
    img: '/src/assets/p2.svg',
    comingSoon: true
  },
  {
    id: 3,
    title: 'Motive Cap',
    price: 3500,
    img: '/src/assets/p3.svg',
    comingSoon: true
  },
  {
    id: 4,
    title: 'Motive Jacket',
    price: 22000,
    img: '/src/assets/p4.svg',
    comingSoon: true
  }
];



export default function Products() {
  return (
    <main className="products-page">
      <h2 className="section-title">Select items</h2>
      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}
