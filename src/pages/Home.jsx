import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PRODUCTS = [
  { id: 2, title: 'Motive Armless Top', price: 10000, priceOld: 10000, img: '/images/motive armless top.png', comingSoon: false },
  { id: 4, title: 'Motive Tank Top', price: 13000, priceOld : 13000, img: '/images/motive tank top.png', comingSoon: false },
  { id: 3, title: 'Motive Cap', price: 10000, priceOld: 10000, img: 'images/motive cap.png', comingSoon: false },
];

export default function Home() {
  useEffect(() => {
    AOS.refresh(); // Refresh animations when component mounts
  }, []);

  useEffect(() => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const handleMove = (e) => {
    hero.style.setProperty("--x", `${e.clientX}px`);
    hero.style.setProperty("--y", `${e.clientY}px`);
  };

  hero.addEventListener("mousemove", handleMove);

  return () => {
    hero.removeEventListener("mousemove", handleMove);
  };
}, []);


  return (
    <main className="home">
      {/* HERO SECTION */}

     <section className="hero" data-aos="fade-up" data-aos-duration="1200">

  {/* Animated noise */}
  <div className="noise-layer"></div>

  {/* MOTIVE vertical spell */}
  <div className="motive-spell" id="motiveSpell">
    <div className="word">
      <span style={{ "--i": 1 }}>M</span>
      <span style={{ "--i": 2 }}>O</span>
    </div>
    <div className="word">
      <span style={{ "--i": 3 }}>T</span>
      <span style={{ "--i": 4 }}>I</span>
    </div>
    <div className="word">
      <span style={{ "--i": 5 }}>V</span>
      <span style={{ "--i": 6 }}>E</span>
    </div>
  </div>

  {/* Morph text */}
  <div className="motive-morph"></div>

  <div className="hero-left">
    <h1 className="hero-title">STYLE IN MOTION</h1>
    <p className="hero-sub">
      Not just clothes — a movement. MOTIVE defines the driven.
    </p>
    <Link to="/products" className="cta-btn">
      Shop Collection
    </Link>
  </div>
  

</section>


      {/* <section className="hero" data-aos="fade-up" data-aos-duration="1200">
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
      </section> */}

     {/* NEW ARRIVALS */}
<section
  id="new"
  className="section"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
    NEW ARRIVALS
  </h2>

  <div className="products-grid" data-aos="fade-up" data-aos-delay="200">
    {PRODUCTS.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>

  {/* Glow indicators */}
  <div className="glow-dots" data-aos="zoom-in" data-aos-delay="300">
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* Order Now Button */}
  <div className="new-order-btn-wrapper" data-aos="fade-up" data-aos-delay="400">
    <div className="new-order-btn-wrapper">
  <Link to="/products" className="new-order-btn">
    ORDER NOW
  </Link>
</div>

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
