"use client";
import { useCart } from "@/hooks/CartContext";
import Image from "next/image";
import React from "react";

function AddtoBox({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.name} sebete əlavə edildi!`);
  };

  return (
    <button onClick={handleAdd} className="add-to-cart">
      <Image
        src="/addto.svg"
        alt="Cart Icon"
        width={16}
        height={16}
        className="cart-icon"
      /> Səbətə at
    </button>
  );
}

export default AddtoBox;
