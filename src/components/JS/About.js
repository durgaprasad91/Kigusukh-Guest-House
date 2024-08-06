
import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import '../CSS/About.css';

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutUsRef.current) {
      const elements = aboutUsRef.current.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        const elements = aboutUsRef.current.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.unobserve(el));
      }

      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about-us-container">
      <div className="about-us-content" ref={aboutUsRef}>
        <h2 className="about-us-text1 fade-in">About Us</h2>
        <h1><strong className="about-us-title fade-in">The Best Holidays Start Here!</strong></h1>
        <p className="about-us-text fade-in">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
        </p>
        <div className="button-container fade-in">
          <button className="about-us-button">BOOK NOW</button>
          <button className="about-us-button map-button" onClick={() => window.open('https://www.google.com/maps?q=Beside+Barshal+Water+Tank,+Manpur,+Barhanti,+West+Bengal+723156')}>
            <FaMapMarkerAlt className="icon" /> Open Map
          </button>
          <button className="about-us-button call-button" onClick={() => window.open('https://wa.me/919007062180')}>
            <FaWhatsapp className="icon" /> WhatsApp
          </button>
        </div>
      </div>
      <div className="about-us-image-container fade-in" ref={imageRef}>
        <img
          src="../images/out.jpg"
          alt="About Us Image"
          className="about-us-image"
          onError={(e) => console.error('Image not found:', e.target.src)}
        />
      </div>
    </div>
  );
};

export default AboutUs;
