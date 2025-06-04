import Image from "next/image";
import styles from "./page.module.css";
import ProductSlider from "@/components/HeaderSlider";
import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <Sidebar />
        <HeaderSlider />
      </div>
    </div>
  );
}
