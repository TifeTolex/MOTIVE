import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to Motive</h1>
      <p className="mt-4 text-lg md:text-2xl">Driven by Purpose</p>
    </div>
  );
}
