import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  // Function to handle smooth scrolling to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const offset = headerHeight + 20; // Adjusted offset (header height + additional spacing)
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <header className="header">
      <div className="header-container">
      <div className="header-content">
          <h1 className="header-title">Ravi Ranjan</h1>
          <p className="email">Email: rseravi01@gmail.com</p>
        </div>
        <nav>
          <ul>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills & Technologies</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yourprofile"><FaLinkedin /></a>
            <a href="https://github.com/yourusername"><FaGithub /></a>
            <a href="https://twitter.com/yourhandle"><FaTwitter /></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
