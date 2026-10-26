
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PRODUCTS = [
  {
    id: 10,
    title: 'Motive Long Sleeve',
    price: 15000,
    img: '/images/longsleeve.png',
    type: 'accessory',
    comingSoon: true,
  },
  {
    id: 11,
    title: 'Motive Hoodie',
    price: 28000,
    img: '/images/hoodie.png',
    type: 'accessory',
    comingSoon: true,
  },
  {
    id: 12,
    title: 'Motive Joggers',
    price: 8000,
    img: '/images/new-joggers.jpg',
    type: 'accessory',
    comingSoon: true,
  },
];

const COLLECTIONS = [
  {
    name: 'ALPHA',
    number: '01',
    description: 'The beginning. A statement of identity.',
    className: 'home-alpha',
  },
  {
    name: 'BETA',
    number: '02',
    description: 'Built on growth, movement and evolution.',
    className: 'home-beta',
  },
  {
    name: 'NEW WAVE',
    number: '03',
    description: 'Fresh expressions. A different energy.',
    className: 'home-newwave',
  },
  {
    name: 'NOVA',
    number: '04',
    description: 'A new light. A new level of expression.',
    className: 'home-nova',
  },
];

const VALUES = [
  {
    number: '01',
    title: 'IDENTITY',
    description:
      'Be confident in who you are. Your individuality is your statement.',
  },
  {
    number: '02',
    title: 'PURPOSE',
    description:
      'Move with direction. Let your ambitions give meaning to every step.',
  },
  {
    number: '03',
    title: 'EXPRESSION',
    description:
      'Express yourself without limits. Your style should tell your story.',
  },
];

const ORDER_STEPS = [
  {
    number: '01',
    title: 'EXPLORE',
    description: 'Discover the MOTIVE collections and find your style.',
  },
  {
    number: '02',
    title: 'SELECT',
    description: 'Choose your preferred product and available options.',
  },
  {
    number: '03',
    title: 'ORDER',
    description: 'Proceed to checkout and follow the payment instructions.',
  },
  {
    number: '04',
    title: 'CONFIRM',
    description: 'Send your order confirmation through WhatsApp.',
  },
];

export default function Home() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Interactive light follows the mouse across the hero.
  useEffect(() => {
    const hero = document.querySelector('.premium-hero');
    if (!hero) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();

      hero.style.setProperty('--x', `${e.clientX - rect.left}px`);
      hero.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    hero.addEventListener('mousemove', handleMove);

    return () => {
      hero.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <main className="home premium-home">

      {/* HERO */}
      <section className="hero premium-hero">
        <div className="premium-hero-glow"></div>
        <div className="noise-layer"></div>

        <div className="premium-hero-top">
          <span>INDEPENDENT YOUTH LIFESTYLE BRAND</span>
          <span>LAGOS, NIGERIA</span>
        </div>

        <div className="motive-spell" id="motiveSpell">
          <div className="word">
            <span style={{ '--i': 1 }}>M</span>
            <span style={{ '--i': 2 }}>O</span>
          </div>

          <div className="word">
            <span style={{ '--i': 3 }}>T</span>
            <span style={{ '--i': 4 }}>I</span>
          </div>

          <div className="word">
            <span style={{ '--i': 5 }}>V</span>
            <span style={{ '--i': 6 }}>E</span>
          </div>
        </div>

        <div className="premium-hero-content">
          <span className="premium-eyebrow">
            MORE THAN WHAT YOU WEAR
          </span>

          <h1>
            BUILT FOR
            <br />
            THOSE WHO
            <br />
            <span>MOVE WITH PURPOSE.</span>
          </h1>

          <p>
            Not just clothes. A statement of identity,
            ambition and the energy to become more.
          </p>

          <div className="premium-hero-actions">
            <Link to="/products" className="premium-primary-btn">
              SHOP THE COLLECTION <span>↗</span>
            </Link>

            <Link to="/about" className="premium-secondary-btn">
              OUR STORY
            </Link>
          </div>
        </div>

        <div className="premium-hero-bottom">
          <span>01 — THE MOTIVE EXPERIENCE</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>DRIVEN BY PURPOSE.</span>
        </div>
      </section>

      {/* BRAND MANIFESTO */}
      <section className="home-manifesto" data-aos="fade-up">
        <span className="premium-eyebrow">THE MOTIVE MINDSET</span>

        <h2>
          PURPOSE IS NOT SOMETHING
          <br />
          YOU WEAR. IT'S SOMETHING
          <br />
          <span>YOU CARRY.</span>
        </h2>

        <p>
          Every move has a meaning. Every ambition has a direction.
          Wear your identity. Live your purpose.
        </p>
      </section>

      {/* BRAND VALUES */}
      <section
        className="section premium-values"
        data-aos="fade-up"
      >
        <div className="premium-section-heading">
          <div>
            <span className="premium-eyebrow">WHAT DRIVES US</span>
            <h2 className="section-title">
              MORE THAN A <span>BRAND.</span>
            </h2>
            <p>Three ideas at the heart of everything we represent.</p>
          </div>
        </div>

        <div className="premium-values-grid">
          {VALUES.map((value) => (
            <article className="premium-value-card" key={value.number}>
              <span className="premium-value-number">
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

              <span className="premium-value-line"></span>
            </article>
          ))}
        </div>
      </section>

      {/* UPCOMING PRODUCTS */}
      <section
        id="new"
        className="section premium-products"
        data-aos="fade-up"
      >
        <div className="premium-section-heading">
          <div>
            <span className="premium-eyebrow">THE NEXT CHAPTER</span>

            <h2 className="section-title">
              UPCOMING <span>DROPS.</span>
            </h2>

            <p>
              A preview of what's coming next from MOTIVE.
            </p>
          </div>

          <Link to="/products" className="premium-view-link">
            EXPLORE PRODUCTS ↗
          </Link>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="premium-products-bottom">
          <span>MADE TO REPRESENT MORE.</span>
          <Link to="/products">
            EXPLORE THE FULL COLLECTION ↗
          </Link>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        id="collections"
        className="section premium-collections"
        data-aos="fade-up"
      >
        <div className="premium-section-heading">
          <div>
            <span className="premium-eyebrow">EXPLORE THE UNIVERSE</span>

            <h2 className="section-title">
              OUR <span>SERIES.</span>
            </h2>

            <p>Different expressions. One purpose.</p>
          </div>

          <Link to="/collections" className="premium-view-link">
            ALL COLLECTIONS ↗
          </Link>
        </div>

        <div className="collections premium-collection-grid">
          {COLLECTIONS.map((collection) => (
            <Link
              to="/collections"
              className={`col premium-collection-card ${collection.className}`}
              data-index={collection.number}
              key={collection.name}
            >
              <span className="premium-collection-number">
                {collection.number} / 04
              </span>

              <div className="col-copy">
                <strong>{collection.name}</strong>
                <small>{collection.description}</small>
              </div>

              <span className="premium-collection-link">
                DISCOVER SERIES ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* LIFESTYLE */}
      <section
        className="home-lifestyle"
        data-aos="fade-up"
      >
        <div className="home-lifestyle-visual">
          <div className="lifestyle-orbit lifestyle-orbit-one"></div>
          <div className="lifestyle-orbit lifestyle-orbit-two"></div>

          <div className="lifestyle-visual-text">
            <span>M</span>
            <small>THE MOVEMENT</small>
          </div>

          <span className="lifestyle-side-label">
            MORE THAN CLOTHING — MORE THAN A LABEL
          </span>
        </div>

        <div className="home-lifestyle-copy">
          <span className="premium-eyebrow">
            A LIFESTYLE. AN IDENTITY.
          </span>

          <h2>
            WEAR YOUR
            <br />
            <span>WHY.</span>
          </h2>

          <p>
            MOTIVE is a youth lifestyle movement built around
            identity, purpose and self-expression. We believe
            what you wear can represent what drives you.
          </p>

          <Link to="/about" className="premium-secondary-btn">
            DISCOVER OUR STORY ↗
          </Link>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section
        className="section premium-order-guide"
        data-aos="fade-up"
      >
        <div className="premium-section-heading">
          <div>
            <span className="premium-eyebrow">YOUR MOTIVE JOURNEY</span>

            <h2 className="section-title">
              FOUR STEPS TO <span>YOUR ORDER.</span>
            </h2>

            <p>Getting your favourite MOTIVE pieces is simple.</p>
          </div>

          <Link to="/products" className="premium-view-link">
            START SHOPPING ↗
          </Link>
        </div>

        <div className="premium-order-grid">
          {ORDER_STEPS.map((step) => (
            <article className="premium-order-step" key={step.number}>
              <span className="premium-order-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="premium-order-note">
          <span>READY TO MAKE YOUR MOVE?</span>

          <Link to="/products">
            FIND YOUR NEXT PIECE ↗
          </Link>
        </div>
      </section>

      {/* CUSTOMER CONFIDENCE */}
      <section
        className="premium-trust-section"
        data-aos="fade-up"
      >
        <div className="premium-trust-heading">
          <span className="premium-eyebrow">
            THE MOTIVE EXPERIENCE
          </span>

          <h2>
            GOOD STYLE.
            <br />
            <span>STRAIGHTFORWARD ORDERING.</span>
          </h2>

          <p>
            Explore our products, make your selection and follow
            the checkout instructions to place your order.
          </p>
        </div>

        <div className="premium-trust-grid">
          <div className="premium-trust-item">
            <span>01</span>
            <h3>PRODUCT DETAILS</h3>
            <p>Explore available products and their listed prices.</p>
          </div>

          <div className="premium-trust-item">
            <span>02</span>
            <h3>ORDER INFORMATION</h3>
            <p>Provide the details needed to process your order.</p>
          </div>

          <div className="premium-trust-item">
            <span>03</span>
            <h3>ORDER CONFIRMATION</h3>
            <p>Use the WhatsApp confirmation process at checkout.</p>
          </div>
        </div>

        <Link to="/about" className="premium-secondary-btn">
          GET TO KNOW MOTIVE ↗
        </Link>
      </section>

      {/* MOTIVERS COMMUNITY */}
      <section
        className="premium-community"
        data-aos="fade-up"
      >
        <div className="premium-community-content">
          <span className="premium-eyebrow">
            YOU ARE PART OF THE MOVEMENT
          </span>

          <h2>
            NOT JUST
            <br />
            <span>FOLLOWERS.</span>
            <br />
            MOTIVERS.
          </h2>

          <p>
            MOTIVE is about people with ambition, identity
            and something meaningful driving them forward.
            Be part of the movement.
          </p>

          <Link to="/about" className="premium-primary-btn">
            JOIN THE MOVEMENT <span>↗</span>
          </Link>
        </div>

        <div className="premium-community-mark">
          <span>M</span>
          <small>DRIVEN BY PURPOSE.</small>
        </div>
      </section>

      {/* FINAL BRAND STATEMENT */}
      <section
        className="home-closing premium-closing"
        data-aos="zoom-in"
      >
        <span className="premium-eyebrow">
          THIS IS YOUR REMINDER
        </span>

        <h2>
          DON'T JUST EXIST.
          <br />
          <span>MAKE YOUR PRESENCE</span>
          <br />
          MEAN SOMETHING.
        </h2>

        <p>Whatever drives you, let it move you.</p>

        <Link to="/products" className="premium-primary-btn">
          FIND YOUR MOTIVE <span>↗</span>
        </Link>

        <strong>DRIVEN BY PURPOSE.</strong>
      </section>

    </main>
  );
}
