import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles.css";

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [likes, setLikes] = useState({});
  const [likeCounts, setLikeCounts] = useState({});

  const galleryItems = [
    { img: img1, title: "Purpose in Motion", story: "Every thread speaks confidence and identity." },
    { img: img2, title: "Street Essence", story: "Where comfort meets creativity and drive." },
    { img: img3, title: "Everyday Hustle", story: "Motive fits built for your daily grind." },
    { img: img4, title: "Style With Meaning", story: "Fashion that moves with your purpose." },
    { img: img5, title: "Timeless Boldness", story: "Simplicity made striking with Motive energy." },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const savedLikes = JSON.parse(localStorage.getItem("motiveLikes")) || {};
    let savedCounts = JSON.parse(localStorage.getItem("motiveLikeCounts"));

    if (!savedCounts) {
      savedCounts = {};
      for (let i = 0; i < galleryItems.length; i++) {
        savedCounts[i] = Math.floor(Math.random() * 20);
      }
      localStorage.setItem("motiveLikeCounts", JSON.stringify(savedCounts));
    }

    setLikes(savedLikes);
    setLikeCounts(savedCounts);
  }, []);

  useEffect(() => {
    localStorage.setItem("motiveLikes", JSON.stringify(likes));
    localStorage.setItem("motiveLikeCounts", JSON.stringify(likeCounts));
  }, [likes, likeCounts]);

  const handleLike = (index) => {
    const newLikes = { ...likes, [index]: !likes[index] };
    const newCounts = { ...likeCounts };

    if (newLikes[index]) {
      newCounts[index] = (newCounts[index] || 0) + 1;
    } else {
      newCounts[index] = Math.max((newCounts[index] || 0) - 1, 0);
    }

    setLikes(newLikes);
    setLikeCounts(newCounts);
  };
  const visibleItems = galleryItems.slice(0, visibleCount);

  const handleToggle = () => {
    if (visibleCount >= galleryItems.length) {
      setVisibleCount(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header" data-aos="fade-up">
        <h2 className="neon-title">Driven Looks</h2>
        <p className="sub-header">Every piece tells a story — every look has a purpose.</p>
      </div>

      <div className="gallery-grid">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="gallery-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className="gallery-image-wrapper"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.story}</p>
              </div>
            </div>

            <div className="gallery-actions">
              <button
                className={`like-btn ${likes[index] ? "liked animate" : ""}`}
                onClick={() => handleLike(index)}
              >
                ♥
              </button>
              <span className="like-count">{likeCounts[index] || 0}</span>
            </div>
          </div>
        ))}
      </div>
      

      <div className="gallery-loadmore">
        <button onClick={handleToggle}>
          {visibleCount >= galleryItems.length ? "Show Less" : "Load More"}
        </button>
      </div>

      {isOpen && (
        <div className="custom-lightbox">
          <div className="lightbox-caption">
            <img
              src={galleryItems[photoIndex].img}
              alt={galleryItems[photoIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <h3>{galleryItems[photoIndex].title}</h3>
              <p>{galleryItems[photoIndex].story}</p>
            </div>
            <button className="lightbox-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
