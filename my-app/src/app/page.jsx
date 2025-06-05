import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import HeaderSlider from "@/components/HeaderSlider";
import Weeksell from "@/components/Weeksell";

export default function Home() {
  
  return (
    <div>
      <div className="hero-section">
        <Sidebar />
        <HeaderSlider />
        <Weeksell />
      </div>
    </div>
  );
}
