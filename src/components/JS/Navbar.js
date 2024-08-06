import React, { useState, useEffect } from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled && !isMobile ? 'hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src='/images/logo1.png' alt='Logo' />
          </div>
          <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#rooms" onClick={closeMenu}>Rooms</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#" className="book-now-btn mobile" onClick={closeMenu}>BOOK NOW</a>
          </nav>
          <a href='https://wa.me/919007062180' className="book-now-btn desktop">BOOK NOW</a>
          <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {!isMobile && isScrolled && (
        <div className="scroll-nav">
          <nav className="scroll-nav-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#rooms" onClick={closeMenu}>Rooms</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
