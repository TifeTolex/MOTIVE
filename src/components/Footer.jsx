import React from "react";
import { FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       
           <div>
        <strong>Contact</strong>
        <div>Email: motive.driven1@gmail.com</div>
        <div>Phone: +234 701 484 7975</div>
      </div>
      <div></div>
        <div className="social-links">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.tiktok.com/@motive_brands?_t=ZS-90R12PXYzsV&_r=1e"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon tiktok"
          >
            <FaTiktok />
          </a>
        </div>
           <p className="footer-text">© {new Date().getFullYear()} Motive. Driven by Purpose.</p>

      </div>
    </footer>
  );
}
