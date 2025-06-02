"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductSlider() {
  return (
    <Swiper loop={true}>
      <SwiperSlide>
        <img src="./logo_kontakt.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./logo_kontakt.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./logo_kontakt.svg" />
      </SwiperSlide>
    </Swiper>
  );
}
