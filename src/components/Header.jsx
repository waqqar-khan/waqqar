import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <h1>WAQQAR KHAN</h1>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-me" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/recommendations" onClick={toggleMenu}>
              Recommendations
            </Link>
          </li>
          <li>
            <Link to="/contact-me" onClick={toggleMenu}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
