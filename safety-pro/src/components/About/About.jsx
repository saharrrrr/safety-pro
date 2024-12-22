import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../assets/vlogo.png';
import './About.css';
import image1 from '../../assets/firefighter.png'

const About = () => {
  return (
    <div className='about-container'>
      <div className="content-container">
        <h1>About Us</h1>
        <section className="content">
          <p>A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection. We specialize in delivering services and products that help our clients protect their property and lives.A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection. We specialize in delivering services and products that help our clients protect their property and lives.</p>
          {/* <img src={logo} alt="Safety Pro logo" /> */}
        </section>
      </div>
      <div className="about-img-container">
        <div className="about-img">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About;