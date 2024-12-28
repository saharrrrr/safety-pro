import {React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Clients.css';



const Clients = () => {

    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const fetchedData = async () => {
        try {
          const response = await fetch('https://safetypro.com.sa/wp-json/custom/v1/clients');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          setClients(data);
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
      hidden: { opacity: 0 }, // Initial state
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
    <div className="container">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Our Clients
      </motion.header>
      <motion.div 
      className="clients-container"
      variants={containerVariants}
      initial= "hidden"
      whileInView= "visible"
      viewport={{ once: false, amount: 0.3 }}>

        {clients.map((client) => (
          <motion.div
            className="clients-logo"
            key={client.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img src={client.image} alt="client logo" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;
