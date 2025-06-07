import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";
import FeaturesCards from "@/components/FeaturesCards";
import "./globals.css"; // Global CSS dosyasını import edin
import CardSatisliderleri from "@/components/CardSatisliderleri";
import { ProductProvider } from "@/hooks/ProductContext";

export default function Home() {
  return (
    <ProductProvider>
      <div className="container ">
        <div className="hero-section">
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="main-content">
            <HeaderSlider />
            <Weeksell />
          </div>
        </div>
        <div className="features-section">
          <FeaturesCards />
          <div />

          <div className="product-section">
            <CardSatisliderleri />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}
