import React, { useState } from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    return (
        <div className='contact-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Your Name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        placeholder='Your Message'
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>

            <div className="icons-group">
                 <h2>Get In Touch</h2>
                <div className="social-icon">
                    <a href="tel:+966535599432"><FontAwesomeIcon icon={faPhone} beatFade style={{color: "#ffbe7d", fontSize: "60px"}} /> Call us</a>
                    <a href="mailto:info@safetypro.com.sa"><FontAwesomeIcon icon={faEnvelope} fade style={{color: "#ffbe7d", fontSize: "60px"}} /> Email</a>
                    <a href="https://wa.me/966535599432"><FontAwesomeIcon icon={faWhatsapp} flip style={{color: "#ffbe7d", fontSize: "60px"}} /> WhatsApp</a>
                    <a href="https://goo.gl/maps/"><FontAwesomeIcon icon={faLocationDot} bounce style={{color: "#ffbe7d", fontSize: "60px"}} /> Address</a>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/"><FaFacebook style={{fontSize: "24px"}} /></a>
                    <a href="https://www.instagram.com/"><FaInstagram style={{fontSize: "24px"}} /></a>
                    <a href="https://www.twitter.com/"><FaTwitter style={{fontSize: "24px"}} /></a>
                    <a href="https://www.linkedin.com/"><FaLinkedin style={{fontSize: "24px"}} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;