
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>

        <span className="about-eyebrow">
          BEYOND THE ORDINARY — THE MOTIVE STORY
        </span>

        <h1>
          WE ARE<br />
          <span>MOTIVE.</span>
        </h1>

        <p>
          More than clothing. A statement of identity,
          purpose and the energy to become more.
        </p>

        <div className="about-hero-bottom">
          <span>EST. MOTIVE</span>
          <span>DRIVEN BY PURPOSE.</span>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="about-story">
        <div className="about-section-label">
          <span>01</span> — OUR STORY
        </div>

        <div className="about-story-content">
          <div className="about-story-image">
            <img src="/images/mv-new.png" alt="MOTIVE clothing collection" />
            <span>THE MOTIVE IDENTITY.</span>
          </div>

          <div className="about-story-text">
            <span className="about-small-title">MORE THAN A LABEL.</span>

            <h2>
              PURPOSE IS<br />
              OUR <span>IDENTITY.</span>
            </h2>

            <p>
              MOTIVE is a youth-driven lifestyle brand built on the
              belief that what drives you matters just as much as
              where you are going.
            </p>

            <p>
              We see clothing as more than something you wear.
              It is a way to express identity, communicate confidence
              and represent the things that matter to you.
            </p>

            <p>
              Through fashion, creativity and meaningful experiences,
              we are building a culture that encourages young people
              to embrace their individuality and live intentionally.
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="about-manifesto">
        <span>THE MOTIVE MANIFESTO</span>

        <h2>
          DON'T JUST<br />
          EXIST.<br />
          <span>HAVE A REASON.</span>
        </h2>

        <p>
          Every ambition begins with a reason.
          Every journey requires a drive.
          Every expression tells a story.
        </p>

        <strong>DRIVEN BY PURPOSE.</strong>
      </section>

      {/* WHAT WE REPRESENT */}
      <section className="about-values">
        <div className="about-section-label">
          <span>02</span> — WHAT WE REPRESENT
        </div>

        <h2>MORE THAN WHAT YOU WEAR.</h2>

        <p className="about-values-intro">
          The MOTIVE identity goes beyond fashion.
          These are the ideas that shape our culture.
        </p>

        <div className="about-values-grid">

          <article className="about-value-card">
            <span>01</span>
            <h3>IDENTITY</h3>
            <p>
              Be comfortable with who you are.
              Express yourself without losing what makes you unique.
            </p>
          </article>

          <article className="about-value-card">
            <span>02</span>
            <h3>PURPOSE</h3>
            <p>
              Move with intention. Let your actions,
              ambitions and decisions mean something.
            </p>
          </article>

          <article className="about-value-card">
            <span>03</span>
            <h3>EXPRESSION</h3>
            <p>
              Creativity has no single language.
              Find your voice and let your individuality speak.
            </p>
          </article>

          <article className="about-value-card">
            <span>04</span>
            <h3>COMMUNITY</h3>
            <p>
              A culture of people with different stories,
              united by the desire to become more.
            </p>
          </article>

        </div>
      </section>

      {/* CLOSING */}
      <section className="about-closing">
        <div className="about-closing-glow"></div>

        <span>THIS IS MORE THAN CLOTHING.</span>

        <h2>
          THIS IS<br />
          <span>MOTIVE.</span>
        </h2>

        <p>
          Find your reason. Own your identity.
          Keep moving with purpose.
        </p>

        <Link to="/collections" className="about-cta">
          EXPLORE OUR COLLECTIONS <span>↗</span>
        </Link>

        <div className="about-closing-tagline">
          DRIVEN BY PURPOSE.
        </div>
      </section>

    </main>
  );
}
