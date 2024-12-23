import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './Footer.css'
import logo from '../../assets/white-logo.png'


function Footer() {
  return (
    <div className="footer">
        <div className='footer-container'>
        
                <div className="footer-social">
                    <img src={logo} alt="logo" />
                    {/* <p>A leading fire safety and prevention company that provides comprehensive solutions for safety and fire protection.</p> */}
                    <div className="social-media">
                            <a href="https://www.facebook.com/"><FaFacebook style={{fontSize: "20px"}} /></a>
                            <a href="https://www.instagram.com/"><FaInstagram style={{fontSize: "20px"}} /></a>
                            <a href="https://www.twitter.com/"><FaTwitter style={{fontSize: "20px"}} /></a>
                            <a href="https://www.linkedin.com/"><FaLinkedin style={{fontSize: "20px"}} /> </a>
                    </div>
                </div>
                <div className="footer-info">
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#ff8040",}} /> About Us</li>
                            <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#ff8040",}} /> Services</li>
                            <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#ff8040",}} /> Clients</li>
                            <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#ff8040",}} /> Partner</li>
                            <li><FontAwesomeIcon icon={faChevronRight} style={{color: "#ff8040",}} /> Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Reach Out</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot} style={{color: "#ff6b24", fontSize: "12px"}} /> Riyadh_AL-Malaz_Dhahran Street</li>
                            <li> <FontAwesomeIcon icon={faPhone} style={{color: "#ff6b24", fontSize: "12px"}} /> +966535599432</li>
                            <li><FontAwesomeIcon icon={faEnvelope} style={{color: "#ff6b24", fontSize: "12px"}} /> info@safetypro.com.sa</li>
                            <li><FontAwesomeIcon icon={faGlobe } style={{color: "#ff6b24", fontSize: "12px"}} /> www.safetypro.com.sa</li>
                        </ul>
                        {/* <h3>opening Hours</h3>
                        <p>saturday - thursday: 9am - 5pm</p> */}
                    </div>
                </div>
        
        </div>
        <div className="footer-bottom">
            <p>© 2024 Safety Pro. All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer