import React from 'react'
import logo from '../../assets/colored-logo.png'
const About = () => {
  return (
    <div className='about-container'>
        <h2 className='about-header'>About us</h2>
        <div className="about-content">
            <p className='content'>A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection. We specialize in delivering services and products that help our clients protect their property and lives.</p>
            <img src= {logo} alt="logo" />
        </div>
    </div>
  )
}

export default About