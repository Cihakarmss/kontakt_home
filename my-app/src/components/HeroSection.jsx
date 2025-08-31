"use client";
import Sidebar from "./Sidebar";
import HeaderSlider from "./HeaderSlider";
import WeeklyCards from "./WeeklyCards";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="slider-section">
        <HeaderSlider />
      </div>

      <div className="weekly-section">
        <div className="weekly-header">
          <h2 className="weekly-title">Həftənin təklifləri</h2>
        </div>
        <WeeklyCards />
      </div>
    </section>
  );
}
