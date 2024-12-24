
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { Autoplay } from 'swiper/modules';
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxRocket,
  } from "react-icons/rx";

import service1 from '../../assets/fire-system.jpg'
import service2 from '../../assets/maintenance-contracts.png'
import service3 from '../../assets/certification.jpg'
import service4 from '../../assets/safety-equipment.jpg'

import './Services.css'

function Services() {
    const servicesData = [
        {
            icon: RxCrop,
            title: "Fire System Services",
            content: "We provide a wide range of fire system services including design, installation, and maintenance.",
            backgroundImage: service1,
        },
        {
            icon: RxDesktop,
            title: "Maintenance Contracts",
            content: "We offer maintenance contracts to ensure your fire systems are always in top condition.",
            backgroundImage: service2,
        },
        {
            icon: RxPencil2,
            title: "Certification",
            content: "We provide certification services to ensure your fire systems are up to code.",
            backgroundImage: service3,
        },
        {
            icon: RxRocket,
            title: "Safety Equipment",
            content: "We offer a wide range of safety equipment to keep your property safe.",
            backgroundImage: service4,
        },
    ]
  return (
    <div className='slider-container'>
        <h1 className='header'>Our Services</h1>
        <Swiper
            modules={[FreeMode, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000,
            disableOnInteraction: false,
            }}
            className='swiper-container'
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
            }
        }>
            {servicesData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="slide-container">
              <div 
                className="slide-background" 
                style={{ backgroundImage: `url(${item.backgroundImage})` }} 
              />
              <div className="slide-overlay" />
              <div className="slide-content">
                {item.icon} 
                <h1 className="slide-title">{item.title}</h1>
                <p>{item.content}</p>
              </div>
              <RxArrowTopRight className="arrow" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;