
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSelector from '../components/ProductSelector';
import './Collections.css';

const SERIES = [
  {
    id: 'alpha',
    number: '01',
    name: 'ALPHA SERIES',
    tagline: 'The beginning of something purposeful.',
    description: 'The first expression of the MOTIVE identity.',
    cover: '/images/mv-new.png',
    products: [
      {
        id: 'alpha-1',
        title: 'Motive Tee',
        price: 15000,
        img: '/images/mv-new.png',
        type: 'shirt',
        comingSoon: false
      }
    ]
  },
  {
    id: 'beta',
    number: '02',
    name: 'BETA SERIES',
    tagline: 'Progress is a statement.',
    description: 'A collection built around evolution and expression.',
    cover: '/images/mot 2.png',
    products: [
      {
        id: 'beta-1',
        title: 'Motive Beta Pair',
        price: 28000,
        img: '/images/mot 2.png',
        type: 'accessory',
        comingSoon: false
      },
       {
        id: 'nova-3',
        title: 'Motive Joggers',
        price: 15000,
        img: '/images/mot 3.png',
        type: 'accessory',
        comingSoon: false
      },
      {
       id: 2, title: 'Motive Sleeve shirt', price: 15000,  img: '/images/mot 1.png',  type: 'accessory' , comingSoon: false },
     
       {
        id: 'beta-2',
        title: 'Motive Beta-Go',
        price: 8000,
        img: '/images/Go-series.png',
        type: 'accessory',
        comingSoon: false
      }
    ]
  },
  {
    id: 'new-wave',
    number: '03',
    name: 'NEW WAVE',
    tagline: 'A different kind of energy.',
    description: 'Fresh designs. New expressions. Same purpose.',
    cover: '/images/motive armless top.png',
    products: [
      {
        id: 'wave-1',
        title: 'Motive Tank Top',
        price: 10000,
        img: '/images/motive armless top.png',
        type: 'accessory',
        comingSoon: false
      },
      {
        id: 'wave-2',
        title: 'Motive Sleeveless',
        price: 13000,
        img: '/images/motive tank top.png',
        type: 'accessory',
        comingSoon: false
      },
      {
        id: 'wave-3',
        title: 'Motive Trucker Cap',
        price: 6000,
        img: '/images/motive trucker cap.png',
        type: 'accessory',
        comingSoon: false
      }
    ]
  },
  {
    id: 'nova',
    number: '04',
    name: 'NOVA SERIES',
    tagline: 'A new dimension of purpose.',
    description: 'For those who are driven to stand apart.',
    cover: '/images/longsleeve.png',
    products: [
      {
        id: 'nova-1',
        title: 'Motive Long Sleeve',
        price: 15000,
        img: '/images/longsleeve.png',
        type: 'accessory',
        comingSoon: true
      },
      {
        id: 'nova-2',
        title: 'Motive Snapback',
        price: 10000,
        img: '/images/motive cap.png',
        type: 'accessory',
        comingSoon: false
      },
     
      {
        id: 'nova-4',
        title: 'Motive Burgundy Cap',
        price: 7000,
        img: '/images/burgundy cap.jpg',
        type: 'accessory',
        comingSoon: true
      },
      {
        id: 'nova-5',
        title: 'Motive Hoodie',
        price: 28000,
        img: '/images/hoodie.png',
        type: 'accessory',
        comingSoon: true
      }
    ]
  }
];

export default function Collections() {
  const [activeSeries, setActiveSeries] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSeries = (id) => {
    setActiveSeries(activeSeries === id ? null : id);
    setSelectedProduct(null);
  };

  return (
    <main className="collections-page">

      <section className="collections-hero">
        <span className="collections-label">THE MOTIVE COLLECTIONS</span>

        <h1>
          THE <span>ARCHIVE.</span>
        </h1>

        <p>
           Different stories.
          One purpose.
        </p>

        <div className="archive-line">
          <span>EST. MOTIVE</span>
          <span>DRIVEN BY PURPOSE.</span>
        </div>
      </section>

      <section className="series-container">

        <div className="series-heading">
          <div>
            <span>EXPLORE OUR WORLD</span>
            <h2>THE SERIES</h2>
          </div>
          <p>SELECT A SERIES TO EXPLORE</p>
        </div>

        <div className="series-list">

          {SERIES.map((series) => {
            const isActive = activeSeries === series.id;

            return (
              <article
                className={`series-card ${isActive ? 'expanded' : ''}`}
                key={series.id}
              >

                <div
                  className="series-cover"
                  style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.88), rgba(0,0,0,.25)), url("${series.cover}")`
                  }}
                  onClick={() => toggleSeries(series.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleSeries(series.id);
                    }
                  }}
                >

                  <span className="series-number">
                    {series.number} / 04
                  </span>

                  <div className="series-title">
                    <span>COLLECTION</span>
                    <h3>{series.name}</h3>
                    <p>{series.tagline}</p>
                  </div>

                  <button
                    className="series-open"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSeries(series.id);
                    }}
                    aria-label={isActive ? 'Close series' : 'Explore series'}
                  >
                    {isActive ? '−' : '+'}
                  </button>

                </div>

                {isActive && (
                  <div className="series-content">

                    <div className="series-description">
                      <div>
                        <span>NOW EXPLORING</span>
                        <h4>{series.name}</h4>
                      </div>

                      <p>{series.description}</p>
                    </div>

                    <div className="series-products">
                      {series.products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onSelect={() => setSelectedProduct(product)}
                        />
                      ))}
                    </div>

                    <div className="series-footer">
                      <span>
                        {series.products.length} DESIGNS IN THIS SERIES
                      </span>
                      <span>DRIVEN BY PURPOSE.</span>
                    </div>

                  </div>
                )}

              </article>
            );
          })}

        </div>
      </section>

      <section className="collections-bottom">
        <h2>MORE THAN CLOTHING.</h2>
        <p>IT'S A STATEMENT OF PURPOSE.</p>
        <span>MOTIVE — DRIVEN BY PURPOSE.</span>
      </section>

      {selectedProduct && (
        <ProductSelector
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </main>
  );
}
