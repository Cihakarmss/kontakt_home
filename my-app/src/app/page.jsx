import Image from "next/image";
import styles from "./page.module.css";
import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  return (
    <div>
      <ProductSlider />
    </div>
  );
}
