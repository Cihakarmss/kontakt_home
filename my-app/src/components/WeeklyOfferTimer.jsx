// components/WeeklyOfferTimer.jsx
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false, // SSR-i deaktiv et
});

export default function WeeklyOfferTimer() {
  return (
    <Countdown
      date={Date.now() + 1000000}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="countdown-timer">
          <span>{days} gun</span>
          <span>{hours} saat</span>

          <span>{minutes} deqiqe</span>
          <span>{seconds} saniye</span>
        </div>
      )}
    />
  );
}
