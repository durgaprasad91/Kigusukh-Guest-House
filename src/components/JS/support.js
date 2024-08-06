import React, { useEffect, useRef, useState } from 'react';
import '../CSS/SupportPage.css';
import { FaLock, FaConciergeBell, FaUtensils, FaMapSigns } from 'react-icons/fa';

const SupportPage = () => {
  const [bookingCount, setBookingCount] = useState(0);
  const [happyCustomersCount, setHappyCustomersCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let count = 0;
          const increment = (setter, target) => {
            const step = () => {
              if (count < target) {
                count += 1;
                setter(count);
                requestAnimationFrame(step);
              } else {
                setter(target);
              }
            };
            step();
          };

          increment(setBookingCount, 100);
          increment(setHappyCustomersCount, 150);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5 
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <div id='services' className="support-page">
      <div className="glass-card">
        <div className="content-section">
          <h2>Strive Only For The Best.</h2>
          <div className="services-grid">
            <div className="service-item">
              <FaLock className="service-icon" />
              <p>High Class Security</p>
            </div>
            <div className="service-item">
              <FaConciergeBell className="service-icon" />
              <p>24 Hours Room Service</p>
            </div>
            <div className="service-item">
              <FaUtensils className="service-icon" />
              <p>Restaurant</p>
            </div>
            <div className="service-item">
              <FaMapSigns className="service-icon" />
              <p>Tourist Guide Support</p>
            </div>
          </div>
        </div>
        <div ref={counterRef} id="counter-section" className="counter-section">
          <div className="counter-box">
            <h3>{bookingCount}+</h3>
            <p>Bookings Completed</p>
          </div>
          <div className="counter-box">
            <h3>{happyCustomersCount}+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
