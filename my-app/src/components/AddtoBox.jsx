"use client";
import { useCart } from "@/hooks/CartContext";
import React from "react";

function AddtoBox({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.name} sebete əlavə edildi!`);
  };

  return (
    <button onClick={handleAdd} className="add-to-cart">
      🛒 Sepete At
    </button>
  );
}

export default AddtoBox;
