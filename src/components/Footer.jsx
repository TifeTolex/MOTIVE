
import React from "react";
import { FaXTwitter, FaTiktok, FaInstagram } from "react-icons/fa6";

const socials = [
  {
    name: "X",
    url: "https://x.com/motive_brands?t=bpU2Qq0sgDw1KdaAU7uY_A&s=09",
    icon: <FaXTwitter />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@motive_brands?_t=ZS-90R12PXYzsV&_r=1e",
    icon: <FaTiktok />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/motive.brands?igsh=emQ3bmtsdzR0dHBi",
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-top">
          <div className="footer-brand">
            <h2>MOTIVE<span>.</span></h2>
            <p>Driven by purpose.</p>
            <small>More than clothing. A lifestyle built around purpose.</small>
          </div>

          <div className="footer-contact">
            <h3>Get in touch</h3>
            <a href="mailto:motive.driven1@gmail.com">
              motive.driven1@gmail.com
            </a>
            <a href="tel:+2347014847975">
              +234 701 484 7975
            </a>
          </div>

          <div className="footer-social">
            <h3>Follow the movement</h3>
            <div className="social-links">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={`Motive on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Motive. All rights reserved.</p>
          <span>DRIVEN BY PURPOSE.</span>
        </div>

      </div>
    </footer>
  );
}
