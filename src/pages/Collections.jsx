
import React, { useState } from 'react';
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
      { id: 'alpha-1', img: '/images/mv-new.png', title: 'Motive Tee' }
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
      { id: 'beta-1', img: '/images/mot 2.png', title: 'Beta Pair' },
      { id: 'beta-2', img: '/images/mot 3.png', title: 'Motive Joggers' },
      { id: 'beta-3', img: '/images/mot 1.png', title: 'Sleeve Shirt' },
      { id: 'beta-4', img: '/images/Go-series.png', title: 'Beta-Go' }
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
      { id: 'wave-1', img: '/images/motive armless top.png', title: 'Motive Tank Top' },
      { id: 'wave-2', img: '/images/motive tank top.png', title: 'Motive Sleeveless' },
      { id: 'wave-3', img: '/images/motive trucker cap.png', title: 'Motive Trucker Cap' }
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
      { id: 'nova-1', img: '/images/longsleeve.png', title: 'Motive Long Sleeve' },
      { id: 'nova-2', img: '/images/motive cap.png', title: 'Motive Snapback' },
      { id: 'nova-4', img: '/images/burgundy cap.jpg', title: 'Motive Burgundy Cap' },
      { id: 'nova-5', img: '/images/hoodie.png', title: 'Motive Hoodie' }
    ]
  }
];

export default function Collections() {
  const [activeSeries, setActiveSeries] = useState(null);

  const toggleSeries = (id) => {
    setActiveSeries(activeSeries === id ? null : id);
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
                        <div className="series-product-image" key={product.id}>
                          <img
                            src={product.img}
                            alt={product.title}
                            loading="lazy"
                          />
                        </div>
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

    </main>
  );
}
