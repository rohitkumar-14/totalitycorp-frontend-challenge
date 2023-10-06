import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="site-footer">
        <div class="footer-content">
          <div class="footer-logo">
            <h1>NFT World</h1>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">NFTs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              
            </ul>
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>              
            </ul>
          </div>
          <div class="footer-social">
            <a href="#" class="social-icon">
              <FaTwitter />
            </a>
            <a href="#" class="social-icon">
              <FaInstagram />
            </a>
            <a href="#" class="social-icon">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div class="footer-credits">
          <p>&copy; 2023 NFT World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
