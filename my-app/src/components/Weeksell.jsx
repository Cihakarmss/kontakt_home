"use client";
import WeeklyCards from "./WeeklyCards";
import WeeklyOfferTimer from "./WeeklyOfferTimer";

export default function Weeksell() {
  return (
    <div className="weeksell-section">
      <h2 className="weeksell-title">{/* <WeeklyOfferTimer /> */}</h2>
      <WeeklyCards />
    </div>
  );
}
