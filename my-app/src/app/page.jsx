import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";
import FeaturesCards from "@/components/FeaturesCards";


import { ProductProvider } from "@/hooks/ProductContext";
import ProductCards from "@/components/ProductCards";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <ProductProvider>
      <div className="container ">
        <HeroSection />
        <div className="features-section">
          <FeaturesCards />
          <div />

          <div className="product-section">
            <ProductCards title={"Satış liderləri"} />
          </div>
          <div className="product-section">
            <ProductCards title={"Sevindirən təkliflər"} />
          </div>
          <div className="product-section">
            <ProductCards title={"Mövsüm təklifləri"} />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}
