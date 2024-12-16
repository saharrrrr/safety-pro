import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestSlider = () => {
  return (
    <Swiper slidesPerView={1} navigation>
      <SwiperSlide>
        <div style={{ backgroundColor: "#f00", height: "200px" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "#0f0", height: "200px" }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "#00f", height: "200px" }}>Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestSlider;
