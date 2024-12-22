import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../assets/vlogo.png';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <Helmet>
        <title>About Us - Safety Pro</title>
        <meta name="description" content="Learn more about Safety Pro, a leading fire safety and prevention company providing comprehensive solutions for safety and fire protection." />
        <meta name="keywords" content="fire safety, fire prevention, safety solutions, fire protection" />
      </Helmet>
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <main className="about-content">
        <section className="content">
          <p>A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection. We specialize in delivering services and products that help our clients protect their property and lives.</p>
          <img src={logo} alt="Safety Pro logo" />
        </section>
      </main>
    </div>
  );
};

export default About;