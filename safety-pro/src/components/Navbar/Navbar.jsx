import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaBars, FaTimes } from "react-icons/fa";

import wlogo from "../../assets/white-logo.png";
import logo from "../../assets/colored-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <Link to="/"> {/* Home link */}
          <img src={scrolled ? wlogo : logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li> {/* Home link */}
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/clients" onClick={toggleMenu}>Clients</Link></li>
        <li><Link to="/partners" onClick={toggleMenu}>Partners</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
