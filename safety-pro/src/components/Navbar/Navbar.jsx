import React, { useState, useEffect } from "react";
import wlogo from "../../assets/white-logo.png";
import logo from "../../assets/colored-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <img src={scrolled ? logo : wlogo} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li><a href="/">About us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/equipments">Safety Equipments</a></li>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
