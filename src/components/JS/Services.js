
import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Services .css';

export default function Services() {
  const [liked, setLiked] = useState({
    room1: false,
    room2: false,
    room3: false,
  });

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const toggleLike = (room) => {
    setLiked((prevState) => ({
      ...prevState,
      [room]: !prevState[room],
    }));
  };

  const checkInView = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    setInView(rect.top < window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    return () => window.removeEventListener('scroll', checkInView);
  }, []);

  return (
    <div id='rooms' className="widget-container" ref={sectionRef}>
      <div className={`widget-header ${inView ? 'fade-in' : ''}`}>
        <h2 data-testid="header">Our Living Room</h2>
        <div className="underline"></div>
      </div>
      <p className={`highlighted-text ${inView ? 'fade-in' : ''}`} data-testid="highlighted-text">
        The Most Memorable Rest Time Starts Here.
      </p>
      <div className="widget-cards">
        <div className={`widget-card ${inView ? 'fade-in-card' : ''}`} style={{ '--card-index': 1 }}>
          <div className="image-container">
            <img alt="Cozy Haven Room" src="../images/service1.jpg" />
            <div className="icon-container">
              <div className={`icon heart-icon ${liked.room1 ? 'filled' : ''}`} onClick={() => toggleLike('room1')}>
                {liked.room1 ? '❤️' : '🤍'}
              </div>
              <div className="icon color-icon">🎨</div>
              <div className="icon badge-icon">🏷️</div>
            </div>
          </div>
          <div className="widget-card-title" data-testid="cozy-haven-room">Cozy Haven Room</div>
          <p className="widget-card-text">Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
          <p className="widget-card-price">Starting from Rs. 1000/night</p>
          <button 
              className="widget-card-button"
              onClick={() => window.location.href = 'https://wa.me/919007062180'}
            >
              BOOK NOW
          </button>
        </div>
        <div className={`widget-card best-card ${inView ? 'fade-in-card' : ''}`} style={{ '--card-index': 2 }}>
          <div className="image-container">
            <span className="best-tag">Best</span>
            <img alt="Spacious Serenity Suite" src="../images/service2.jpg" />
            <div className="icon-container">
              <div className={`icon heart-icon ${liked.room2 ? 'filled' : ''}`} onClick={() => toggleLike('room2')}>
                {liked.room2 ? '❤️' : '🤍'}
              </div>
              <div className="icon color-icon">🎨</div>
              <div className="icon badge-icon">🏷️</div>
            </div>
          </div>
          <div className="widget-card-title" data-testid="spacious-serenity-suite">Spacious Serenity Suite</div>
          <p className="widget-card-text">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
          <p className="widget-card-price">Starting from Rs. 1500/night</p>
          <button 
            className="widget-card-button"
            onClick={() => window.location.href = 'https://wa.me/919007062180'}
          >
            BOOK NOW
          </button>
        </div>
        <div className={`widget-card ${inView ? 'fade-in-card' : ''}`} style={{ '--card-index': 3 }}>
          <div className="image-container">
            <img alt="Luxurious Dream Suite" src="../images/service3.jpg" />
            <div className="icon-container">
              <div className={`icon heart-icon ${liked.room3 ? 'filled' : ''}`} onClick={() => toggleLike('room3')}>
                {liked.room3 ? '❤️' : '🤍'}
              </div>
              <div className="icon color-icon">🎨</div>
              <div className="icon badge-icon">🏷️</div>
            </div>
          </div>
          <div className="widget-card-title" data-testid="luxurious-dream-suite">Luxurious Dream Suite</div>
          <p className="widget-card-text">Experience opulence and grandeur in our Luxurious Dream Suite, a lavish escape for the discerning guest.</p>
          <p className="widget-card-price">Starting from Rs. 2000/night</p>
          <button 
            className="widget-card-button"
            onClick={() => window.location.href = 'https://wa.me/919007062180'}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
