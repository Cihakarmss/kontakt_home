'use client'
import weeklycardData from "@/data/weeklycardData";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function WeeklyCards() {
    

  return (
    <div>
      <div className="weekly_cards">
        <Swiper
          modules={[Autoplay]}
          loop={true}

          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {weeklycardData &&
            weeklycardData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="weekly_card">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="weekly_card_image"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WeeklyCards;
