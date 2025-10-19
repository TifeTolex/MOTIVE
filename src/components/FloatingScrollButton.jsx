import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function FloatingScrollButton() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem("floatingBtnPos");
    return saved
      ? JSON.parse(saved)
      : { x: window.innerWidth - 80, y: 100 };
  });

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🖱️ Mouse drag start
  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  // 📱 Touch drag start
  const startTouch = (e) => {
    setDragging(true);
    const touch = e.touches[0];
    setOffset({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const moveDrag = (clientX, clientY) => {
    const newPos = { x: clientX - offset.x, y: clientY - offset.y };
    setPosition(newPos);
  };

  // 🖱️ Mouse move
  const duringDrag = (e) => {
    if (!dragging) return;
    moveDrag(e.clientX, e.clientY);
  };

  // 📱 Touch move
  const duringTouchDrag = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    moveDrag(touch.clientX, touch.clientY);
  };

  const stopDrag = () => {
    setDragging(false);
    localStorage.setItem("floatingBtnPos", JSON.stringify(position));
  };

  useEffect(() => {
    window.addEventListener("mousemove", duringDrag);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", duringTouchDrag);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", duringDrag);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", duringTouchDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging, offset, position]);

  return (
    visible && (
      <button
        onMouseDown={startDrag}
        onTouchStart={startTouch}
        onClick={scrollToTop}
        style={{
          position: "fixed",
          left: `${position.x}px`,
          bottom: `${position.y}px`,
          zIndex: 1000,
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          cursor: dragging ? "grabbing" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: dragging ? "none" : "0.2s ease",
        }}
      >
        <FaArrowUp size={18} />
      </button>
    )
  );
}
