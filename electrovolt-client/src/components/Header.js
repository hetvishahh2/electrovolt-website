// Header.js
// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className={`header ${menuActive ? 'active' : ''}`}>
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src="/images/electrovolt.jpg" alt="Logo" className="logo" />
      </Link>
      <div className={`menu-icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navigation ${menuActive ? 'active' : ''}`}>
        <ul>
          {/* <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/solutions" onClick={closeMenu}>
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
          <Link to="/chargelocator" onClick={closeMenu}>
              <img src="/images/headercharger.png" alt="Charger Locator" className="nav-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
