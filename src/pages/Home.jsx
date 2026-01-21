import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PRODUCTS = [
  { id: 1, title: 'Motive Tee', price: 15000, priceOld: 15000, img: '/images/mv-new.png', comingSoon: false },
  { id: 2, title: 'Motive Hoodie', price: 25000, img: '/images/new.png', comingSoon: true },
  { id: 3, title: 'Motive Cap', price: 5000, img: '/images/new2.png', comingSoon: true },
  { id: 4, title: 'Motive Jacket', price: 20000, img: '/images/new3.png', comingSoon: true },
];

export default function Home() {
  useEffect(() => {
    AOS.refresh(); // Refresh animations when component mounts
  }, []);

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero" data-aos="fade-up" data-aos-duration="1200">
        <div className="hero-left">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            STYLE IN MOTION
          </h1>
          <p className="hero-sub" data-aos="fade-up" data-aos-delay="300">
            Not just clothes — a movement. MOTIVE defines the driven.
          </p>

          <Link
            to="/products"
            className="cta-btn"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section id="new" className="section" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          NEW ARRIVALS
        </h2>
        <div className="products-grid" data-aos="fade-up" data-aos-delay="200">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="section" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          COLLECTIONS
        </h2>
        <div className="collections" data-aos="zoom-in" data-aos-delay="300">
          <div className="col">Alpha Drop</div>
          <div className="col"> New wave</div>
          <div className="col">Street Made</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about" data-aos="fade-up" data-aos-duration="1200">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          We Have The Range
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Purpose-driven designs for everyday life.
        </p>
      </section>
    </main>
  );
}
