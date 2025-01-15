import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logo from '../../assets/vlogo.png';
import './About.css';

const About = () => {
  // Refs for tracking visibility
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // Using useInView hook
  const contentInView = useInView(contentRef, { triggerOnce: true });
  const imageInView = useInView(imageRef, { triggerOnce: true });

  return (
    <div className="about-container">
      {/* Content Section */}
      <motion.div
        className="content-container"
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>About Us</h1>
        <motion.section
          className="content"
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            We are a leading fire safety and prevention company providing comprehensive solutions 
            to protect lives and property.We are a leading fire safety and prevention company providing comprehensive solutions 
            to protect lives and property.We are a leading fire safety and prevention company providing comprehensive solutions 
            to protect lives and property
          </p>
        {/* </motion.section>
        <motion.section
          className="content-button"
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        > */}
          <a href="/about">Learn More</a>
        </motion.section>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="about-img-container"
        ref={imageRef}
        initial={{ opacity: 0, x: -50 }}
        animate={imageInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="about-img">
          <motion.img
            src={logo}
            alt="logo"
            initial={{ opacity: 0, rotate: -180 }}
            animate={imageInView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
