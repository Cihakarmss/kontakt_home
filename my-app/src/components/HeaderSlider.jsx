"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import headslideData from "@/data/headslideData";
import Image from "next/image";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

export default function HeaderSlider() {
  return (
    <div className="header-slider-container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".header-slider-next",
          prevEl: ".header-slider-prev",
        }}
        pagination={{
          el: ".header-slider-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        effect="slide"
        speed={800}
        className="header-swiper"
        spaceBetween={0}
      >
        {headslideData &&
          headslideData.map((slide) => (
            <SwiperSlide key={slide.id} className="header-slide">
              <div className="slide-content">
                <div className="slide-image-content">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    width={759}
                    height={500}
                    className="header-slide-image"
                    priority={slide.id === 1}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="header-slider-nav">
        <button className="header-slider-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="header-slider-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
