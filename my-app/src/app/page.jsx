import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";
import FeaturesCards from "@/components/FeaturesCards";

export default function Home() {
  return (
    <div className="container ">
      <div className="hero-section">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-content">
          <HeaderSlider />
          <Weeksell />
        </div>
         <div className="featurescard-container">
        <FeaturesCards />
        </div>
      </div>
    </div>
  );
}
