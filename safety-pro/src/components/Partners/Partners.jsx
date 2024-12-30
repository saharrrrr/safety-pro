import {React, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import './Partners.css'


function Partners() {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchedData = async () => {
          try {
            const response = await fetch('https://safetypro.com.sa/wp-json/custom/v1/partners');
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setPartners(data);
            setLoading(false);
          }
          catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };

        fetchedData();
      }, []);

    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Delay between child animations
          },
        },
      };
    
      // Child item animation variants
      const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state
        visible: { opacity: 1, y: 0 }, // Animate to
      };
    
      return (
        <div className="partners">
          {/* Header Animation */}
          <motion.h1
            className="header"
            initial={{ opacity: 0, y: -20 }} // Start state
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            viewport={{ once: true, amount: 0.2 }} // Re-trigger when 20% of element is in view
            transition={{ duration: 0.5 }} // Animation duration
          >
            Our Partners
          </motion.h1>
    
          {/* Animated Grid Container */}
          <motion.div
            className="partners-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the container is in view
          >
            {partners.map((partner) => (
              <motion.img
                key={partner.id}
                src={partner.image}
                alt="partner"
                className="partner-image"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }} // Interactive hover effect
                transition={{ duration: 0.2 }} // Hover animation duration
              />
            ))}
          </motion.div>
        </div>
      );
    }
    
export default Partners
