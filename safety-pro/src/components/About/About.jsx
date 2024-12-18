import React from 'react'
import logo from '../../assets/vlogo.png'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-conent">
          <h2 className='about-header'>About us</h2>
          <div className="content">
             <p >A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection. We specialize in delivering services and products that help our clients protect their property and lives.</p>
             <img src= {logo} alt="logo" />
          </div>
        </div>
    </div>
  )
}

export default About