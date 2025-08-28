"use client"

import React, { use, useState } from "react";


function AddtoBox({product}) {
  const [cart, setCart] = useState([]); // Sepet state
  const addToCart = () => {
    setCart([...cart, product]);
    alert(`${product.name} sepete eklendi!`);
  };



  return (
    <button className="btn-add-cart"onClick={addToCart} >Sebete at </button>
  );
}

export default AddtoBox;
