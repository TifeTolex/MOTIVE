import React from "react";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6"; // ✅ Updated icon import

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <strong>Contact</strong>
          <div>Email: motive.driven1@gmail.com</div>
          <div>Phone: +234 701 484 7975</div>
        </div>

        <div className="social-links">
          {/* ✅ Updated to X (formerly Twitter) */}
          <a
            href="https://x.com/motive_brands?t=bpU2Qq0sgDw1KdaAU7uY_A&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon x"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.tiktok.com/@motive_brands?_t=ZS-90R12PXYzsV&_r=1e"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tiktok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.tiktok.com/@motive_brands?_t=ZS-90R12PXYzsV&_r=1e"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Motive. Driven by Purpose.
        </p>
      </div>
    </footer>
  );
}
