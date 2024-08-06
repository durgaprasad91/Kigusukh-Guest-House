// CardComponent.js
import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Gallery.css';

const CardComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    { id: 1, imageUrl: '../images/g1.jpg', title: 'Beautiful Landscape' },
    { id: 2, imageUrl: '../images/g2.webp', title: 'Cityscape' },
    { id: 3, imageUrl: '../images/g3.webp', title: 'Mountain View' },
    { id: 4, imageUrl: '../images/g6.webp', title: 'Beach' },
    { id: 5, imageUrl: '../images/g7.webp', title: 'Sunset' },
    { id: 6, imageUrl: '../images/g4.jpg', title: 'Forest' },
    { id: 7, imageUrl: '../images/g5.jpg', title: 'OutLook' },
    { id: 8, imageUrl: '../images/g8.jpg', title: 'Rooms' },
    { id: 9, imageUrl: '../images/g10.jpg', title: 'Best furniture' },
    { id: 10, imageUrl: '../images/g11.jpg', title: 'Snowy Mountains' }
  ];

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id='gallery' className={`card-section ${isVisible ? 'fade-in' : ''}`} ref={sectionRef}>
      <h2 className="section-title">Gallery</h2>
      <div className="card-container">
        {cards.slice(0, showAll ? 10 : 3).map((card, index) => (
          <div
            className={`card ${isVisible ? 'fade-in-card' : ''}`}
            key={card.id}
            style={{ animationDelay: `${index * 0.1}s` }} 
          >
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={handleToggle} className="toggle-button">
        {showAll ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default CardComponent;
