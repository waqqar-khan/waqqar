import { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <h1>WAQQAR KHAN</h1>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about-me" onClick={toggleMenu}>About Me</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li>
            <a href="#recommendations" onClick={toggleMenu}>Recommendations</a>
          </li>
          <li>
            <a href="#contact-me" onClick={toggleMenu}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
