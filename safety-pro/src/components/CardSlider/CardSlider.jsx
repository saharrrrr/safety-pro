import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function CardSlider() {
    const cards = [
        {
            id:1,
            title: "",
            description:"",
            img: ""
        },
        {
            id:2,
            title: "",
            description:"",
            img: ""
        },
        {
            id:3,
            title: "",
            description:"",
            img: ""
        },
        {
            id:4,
            title: "",
            description:"",
            img: ""
        },
        {
            id:5,
            title: "",
            description:"",
            img: ""
        },
        {
            id:6,
            title: "",
            description:"",
            img: ""
        },

    ];

  return (
    <div className="container">
        <h1 className="card-header">
            Our services
        </h1>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for mobile screens
          768: { slidesPerView: 2 }, // 2 slides for tablets
          1024: { slidesPerView: 3 }, // 3 slides for desktops
        }}
      >
        {cards.map((card) =>(
            <SwiperSlide key={cards.id}>
                <div className="card">
                    <img src={cards.img} alt={cards.title}/>
                    <div className="card-content">
                        <h3>{cards.title}</h3>
                        <p>{cards.description}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider