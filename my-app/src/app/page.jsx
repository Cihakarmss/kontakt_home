import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";
import FeaturesCards from "@/components/FeaturesCards";
import "./globals.css"; // Global CSS dosyasını import edin

import { ProductProvider } from "@/hooks/ProductContext";
import ProductCards from "@/components/ProductCards";

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
            <ProductCards
            title={"Satış liderləri"} 
            />
          </div>
          <div className="product-section">
            <ProductCards
            title={"Sevindirən təkliflər"} 
            />
            </div>
          <div className="product-section">
            <ProductCards
            title={"Mövsüm təklifləri"} 
            />
            </div> 
          
          
        </div>
      </div>
    </ProductProvider>
  );
}
