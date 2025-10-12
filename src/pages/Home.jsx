import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: 'Motive Tee', price: 13000, priceOld: 15000, img: '/images/mv neww.png', comingSoon: false },
  { id: 2, title: 'Motive Hoodie', price: 10000, img: '/src/assets/p2.svg', comingSoon: true },
  { id: 3, title: 'Motive Cap', price: 3500, img: '/src/assets/p3.svg', comingSoon: true },
  { id: 4, title: 'Motive Jacket', price: 22000, img: '/src/assets/p4.svg', comingSoon: true },
];


export default function Home(){
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">STYLE IN MOTION</h1>
          <p className="hero-sub">Not just clothes — a movement. MOTIVE defines the driven.</p>

            <Link to="/products" className="cta-btn">
          Shop Collection
        </Link>
        </div>
        
        {/* <div className="hero-right">
           <img src="/images/hero-model.png" alt="Motive Hero" /> */}
      </section>

      <section id="new" className="section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <div className="products-grid">
          {PRODUCTS.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section id="collections" className="section">
        <h2 className="section-title">COLLECTIONS</h2>
        <div className="collections">
          <div className="col">Essentials</div>
          <div className="col">Urban</div>
          <div className="col">Athleisure</div>
        </div>
      </section>

      <section id="about" className="section about">
        <h2 className="section-title">We have the range</h2>
        <p>Purpose-driven designs for everyday life.</p>
      </section>
    </main>
  )
}
