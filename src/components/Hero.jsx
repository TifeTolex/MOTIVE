import React, { useEffect } from 'react';
import styles from '/.Hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  // ✅ Initialize AOS for this component (safe if App already initializes too)
  useEffect(() => {
    AOS.refresh(); // Ensures animations reload if Hero mounts dynamically
  }, []);

  return (
    <div className={styles.hero}>
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-4xl md:text-6xl font-bold"
      >
        Welcome to Motive
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-4 text-lg md:text-2xl"
      >
        Driven by Purpose
      </p>
    </div>
  );
}
