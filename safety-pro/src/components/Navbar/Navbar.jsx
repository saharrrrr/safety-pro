import React, { useState, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import wlogo from "../../assets/white-logo.png";
import logo from "../../assets/colored-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    console.log("Scroll position:", window.scrollY); // Debugging log
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Scrolled state:", scrolled); // Debugging log
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <img src={scrolled ? wlogo : logo} alt="Logo" />
      </div>
      <div className="nav-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className= {`nav-list ${menuOpen ? "open" : ""}`}>
        <li><a href="#about">About us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        {/* <li><a href="/equipments">Safety Equipments</a></li> */}
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;