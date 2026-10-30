
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const UPCOMING_PRODUCTS = [
  {
    id: 10,
    title: "Motive Long Sleeve",
    price: 15000,
    img: "/images/longsleeve.png",
    type: "accessory",
    comingSoon: true,
  },
  {
    id: 11,
    title: "Motive Hoodie",
    price: 28000,
    img: "/images/hoodie.png",
    type: "accessory",
    comingSoon: true,
  },
  {
    id: 13,
    title: "Motive Facecap",
    price: 7000,
    img: "/images/burgundy cap.jpg",
    type: "accessory",
    comingSoon: true,
  },
];

const SERIES = [
  {
    name: "ALPHA",
    description: "The beginning of something purposeful.",
    label: "THE FOUNDATION",
    className: "series-alpha",
  },
  {
    name: "BETA",
    description: "A new expression of the MOTIVE identity.",
    label: "THE EVOLUTION",
    className: "series-beta",
  },
 
  {
    name: "NEW WAVE",
    description: "A fresh movement. A different kind of energy.",
    label: "THE NEW MOVEMENT",
    className: "series-newwave",
  },
   {
    name: "NOVA",
    description: "A new light. A new level. A new direction.",
    label: "THE NEXT CHAPTER",
    className: "series-nova",
  },
];

export default function New() {
  return (
    <main className="new-page">

      {/* HERO */}
      <section className="new-hero">
        <div className="new-hero-content">
          <span className="new-eyebrow">LATEST FROM MOTIVE</span>

          <h1>
            THE NEW
            <br />
            ERA STARTS<span>.</span>
          </h1>

          <p>
            Fresh releases. New expressions. The same purpose.
            Discover what is new in the world of MOTIVE.
          </p>

          <Link to="/products" className="new-hero-btn">
            EXPLORE THE COLLECTION <span>↗</span>
          </Link>
        </div>

        <div className="new-hero-bottom">
          <span>01 / WHAT'S NEW</span>
          <span>DRIVEN BY PURPOSE.</span>
        </div>
      </section>

      {/* SERIES */}
      <section className="new-series section-spacing">
        <div className="new-section-heading">
          <div>
            <span className="new-eyebrow">MORE THAN A COLLECTION</span>
            <h2>THE SERIES<span>.</span></h2>
            <p>Different expressions. One purpose.</p>
          </div>

          <Link to="/collections" className="new-text-link">
            EXPLORE COLLECTIONS ↗
          </Link>
        </div>

        <div className="new-series-grid">
          {SERIES.map((series) => (
            <Link
              to="/collections"
              key={series.name}
              className={`new-series-card ${series.className}`}
            >
              <span>{series.label}</span>

              <div>
                <h3>{series.name}<span>.</span></h3>
                <p>{series.description}</p>
              </div>

              <b>EXPLORE SERIES ↗</b>
            </Link>
          ))}
        </div>
      </section>

      {/* COMING SOON */}
      <section className="new-upcoming section-spacing">
        <div className="new-section-heading">
          <div>
            <span className="new-eyebrow">ON THE HORIZON</span>
            <h2>COMING SOON<span>.</span></h2>
            <p>Something new is always in motion.</p>
          </div>
        </div>

        <div className="products-grid">
          {UPCOMING_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="new-message">
        <span className="new-eyebrow">THIS IS MOTIVE</span>

        <h2>
          MORE THAN
          <br />
          WHAT YOU WEAR<span>.</span>
        </h2>

        <p>
          It's what drives you. What you stand for.
          And the purpose behind every move you make.
        </p>

        <strong>DRIVEN BY PURPOSE.</strong>
      </section>

    </main>
  );
}
