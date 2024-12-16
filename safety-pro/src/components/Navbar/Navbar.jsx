import React, { useState, useEffect } from "react";
import wlogo from "../../assets/white-logo.png";
import logo from "../../assets/colored-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <img src={scrolled ? logo : wlogo} alt="Logo" />
      </div>
      <ul className="nav-list">
        <li><a href="/">About us</a></li>
        <li><a href="/about">Services</a></li>
        <li><a href="/about">Projects</a></li>
        <li><a href="/about">Safety equipments</a></li>
        <li><a href="/about">Partners</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
