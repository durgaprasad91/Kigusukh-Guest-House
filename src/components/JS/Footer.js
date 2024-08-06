import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Kingsukh</h2>
          <h3 id="footer-brand">Guest House</h3>
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <button 
            className="book-now-btn"
            onClick={() => window.location.href = 'https://wa.me/919007062180'}
          >
            BOOK NOW
          </button>
        </div>

        <div className="footer-section links">
          <h3 id="footer-links">QUICK LINKS</h3>
          <ul>
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3 id="footer-services">OUR SERVICES</h3>
          <ul>
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 id="footer-contact">CONTACT US</h3>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>kkghosh0099@gmail.com</p>
          <p>+91 9007062180</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="footer-copyright">Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
