"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderData from "@/data/headslideData";


export default function HeaderSlider() {
  return (
    <Swiper loop={true}>
      {sliderData && sliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
