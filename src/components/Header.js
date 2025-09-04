'use client';

import { useState } from 'react';
import Image from 'next/image';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="#home">
          <img src="/header_logo.svg" alt="Logo" className="logo" />
        </a>
      </div>
      <nav className="nav-links-desktop">
        <a href="#home" className="nav-link">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#about-us" className="nav-link">About Us</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact-us" className="nav-link">Contact Us</a>
      </nav>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <div className="icon-container">
          {/* Hamburger icon for when the menu is closed */}
          <svg className={`hamburger-lines ${isMenuOpen ? 'fade-out' : 'fade-in'}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="14" y2="6"></line> {/* Top small line, left-aligned */}
            <line x1="3" y1="12" x2="21" y2="12"></line> {/* Normal middle line */}
            <line x1="10" y1="18" x2="20" y2="18"></line> {/* Bottom small line, right-aligned */}
          </svg>

          {/* "X" icon for when the menu is open */}
          <svg className={`close-x ${isMenuOpen ? 'fade-in' : 'fade-out'}`} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </button>
      {isMenuOpen && (
        <nav className="nav-links-mobile open">
          <a href="#home" onClick={toggleMenu} className="nav-link-mobile">Home</a>
          <a href="#services" onClick={toggleMenu} className="nav-link-mobile">Services</a>
          <a href="#about-us" onClick={toggleMenu} className="nav-link-mobile">About Us</a>
          <a href="#testimonials" onClick={toggleMenu} className="nav-link-mobile">Testimonials</a>
          <a href="#faq" onClick={toggleMenu} className="nav-link-mobile">FAQ</a>
          <a href="#contact-us" onClick={toggleMenu} className="nav-link-mobile">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Header;