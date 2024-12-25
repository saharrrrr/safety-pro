import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxRocket,
} from 'react-icons/rx';
import { motion } from 'framer-motion';
import 'swiper/swiper-bundle.css';

import service1 from '../../assets/service-1.jpg';
import service2 from '../../assets/service-2.jpg';
import service3 from '../../assets/service-3.jpg';
import service4 from '../../assets/service-4.jpg';

import './Services.css';

function Services() {
  const servicesData = [
    {
      icon: <RxCrop />,
      title: "Fire System Services",
      content: "We provide a wide range of fire system services including design, installation, and maintenance.",
      backgroundImage: service1,
    },
    {
      icon: <RxDesktop />,
      title: "Maintenance Contracts",
      content: "We offer maintenance contracts to ensure your fire systems are always in top condition.",
      backgroundImage: service2,
    },
    {
      icon: <RxPencil2 />,
      title: "Certification",
      content: "We provide certification services to ensure your fire systems are up to code.",
      backgroundImage: service3,
    },
    {
      icon: <RxRocket />,
      title: "Safety Equipment",
      content: "We offer a wide range of safety equipment to keep your property safe.",
      backgroundImage: service4,
    },
  ];

  return (
    <div className="slider-container">
      {/* Header Animation */}
      <motion.h1
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>

      {/* Swiper Animation */}
      <motion.div
        className="swiper-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Swiper
          modules={[FreeMode, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {servicesData.map((item) => (
            <SwiperSlide key={item.title}>
              {/* Slide Animation */}
              <motion.div
                className="slide-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div
                  className="slide-background"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="slide-overlay" />
                <div className="slide-content">
                  {/* Icon Animation */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="icon-container"
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h1
                    className="slide-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    {item.content}
                  </motion.p>
                </div>
                {/* Arrow Bounce Animation */}
                <motion.div
                  className="arrow"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <RxArrowTopRight />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Services;
