import React from "react";
import { Container } from "react-bootstrap";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import sponser1 from "../../../Assets/Sponser/logo1.jpg";
import sponser2 from "../../../Assets/Sponser/logo2.jpg";
import sponser3 from "../../../Assets/Sponser/logo3.jpg";
import sponser4 from "../../../Assets/Sponser/logo4.jpg";
import sponser5 from "../../../Assets/Sponser/logo5.jpg";
import "./Sponsers.css";
const Sponsers = () => {
  return (
    <Container className="mt-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="swiper-content">
          <img src={sponser1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-content">
          <img src={sponser2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-content">
          <img src={sponser3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-content">
          <img src={sponser4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-content">
          <img src={sponser5} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Sponsers;
