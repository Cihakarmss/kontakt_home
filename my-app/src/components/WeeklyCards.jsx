"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import weeklycardData from "@/data/weeklycardData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import AddtoBox from "./AddtoBox";

function WeeklyCards() {
  return (
    <div className="weekly-cards-container">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="weekly-swiper"
      >
        {weeklycardData &&
          weeklycardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="weekly-card">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title || "Weekly card image"}
                  width={267}
                  height={200}
                  className="weekly-card-image"
                />
                
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default WeeklyCards;
