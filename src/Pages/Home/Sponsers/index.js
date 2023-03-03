import React from "react";
import { Container } from "react-bootstrap";
import "./sponsers.css";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import sponser1 from "../../../Assets/Sponser/logo1.jpg";
import sponser2 from "../../../Assets/Sponser/logo2.jpg";
import sponser3 from "../../../Assets/Sponser/logo3.jpg";
import sponser4 from "../../../Assets/Sponser/logo4.jpg";
import sponser5 from "../../../Assets/Sponser/logo5.jpg";


const Sponsers = () => {
  const sliderImg = [sponser1, sponser2, sponser3, sponser4, sponser5];
  return (
    <Container className="mt-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
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
        {sliderImg.map((img, index) => (
          <SwiperSlide key={index} className="swiper-content">
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Sponsers;
