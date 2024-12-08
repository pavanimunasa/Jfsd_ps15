import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Company Section */}
        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="footer-column">
          <h3 className="footer-title">Policies</h3>
          <ul>
            <li>Privacy Policies</li>
            <li>Terms of Use</li>
            <li>Secure Shopping</li>
            <li>Copyright Policy</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-column">
          <h3 className="footer-title">Help</h3>
          <ul>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Misc Section */}
        <div className="footer-column">
          <h3 className="footer-title">Misc</h3>
          <ul>
            <li>Affiliate</li>
            <li>Sitemap</li>
          </ul>
          <h3 className="footer-title">Download Our App</h3>
          <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="google-play-badge"
            />
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <a href="#facebook" className="social-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#twitter" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#pinterest" className="social-link">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="#youtube" className="social-link">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="footer-copyright">
        Copyright © 2024. LMS All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
