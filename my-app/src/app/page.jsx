import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="hero-section">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-content">
          <HeaderSlider />
          <Weeksell />
        </div>
      </div>
    </div>
  );
}
