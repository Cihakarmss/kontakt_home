"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import weeklycardData from "@/data/weeklycardData";
import Image from "next/image";
import WeeklyCards from "./WeeklyCards";
import WeeklyOfferTimer from "./WeeklyOfferTimer";

// SSR-i deaktiv edərək WeeklyOfferTimer-i dinamik import edirik


function Weeksell() {
  return (
    <div>
      <div className="title_weekly">
        <WeeklyOfferTimer />
      </div>

      <WeeklyCards />
    </div>
  );
}

export default Weeksell;
