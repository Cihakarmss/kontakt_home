"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import headslideData from "@/data/headslideData";
import Image from "next/image";
import { Autoplay,Navigation } from "swiper/modules";

export default function HeaderSlider() {
  
  return (
    <Swiper modules={[Autoplay,Navigation]} 
    loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}>
      {headslideData &&
        headslideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.image} 
              alt={slide.title}
              width={755}
              height={565}
            
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
