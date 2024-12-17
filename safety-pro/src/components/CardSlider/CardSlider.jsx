import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CardSlider.css";

import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      title: "Fire Safety System Design",
      description:
        "Design and implement customized firefighting, fire alarm systems, and evacuation plans to ensure full safety compliance.",
      img: service1,
    },
    {
      id: 2,
      title: "Firefighting System Installation",
      description: "Supply and install water, foam, and fire suppression systems tailored to your safety needs.",
      img: service2,
    },
    {
      id: 3,
      title: "Advanced Fire Detection Systems",
      description:
        "Install addressable and conventional fire alarm devices, including smoke, heat, flame, and gas detectors.",
      img: service3,
    },
    {
      id: 4,
      title: "Emergency Evacuation Systems",
      description:
        "Equip buildings with audio evacuation systems, fire-resistant walls, emergency doors, escape ladders, and assembly points.",
      img: service4,
    },
    {
      id: 5,
      title: "Comprehensive Maintenance Services",
      description:
        "Ensure system reliability with routine and emergency maintenance for fire safety and prevention systems.",
      img: service5,
    },
    {
      id: 6,
      title: "Fire Safety Training",
      description: "Train clients on effective use of fire protection equipment and safety preventive measures.",
      img: service6,
    },
    {
      id: 7,
      title: "Fire Safety Consultations",
      description: "Provide expert consultations to optimize safety and fire protection systems for your facilities.",
      img: service7,
    },
  ];

  return (
    <div className="container">
      <h1 className="card-header">Our Services</h1>
      {/* New wrapper with background */}
      <div className="card-section">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card">
                <h1 className="card-num">{card.id}</h1>
                <img src={card.img} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
