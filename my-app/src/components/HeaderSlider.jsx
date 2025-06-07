"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import headslideData from "@/data/headslideData";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

export default function HeaderSlider() {
  return (
    <div className="header-slider-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="header-swiper"
      >
        {headslideData &&
          headslideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                width={565}
                height={565}
                className="header-slide-image"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
