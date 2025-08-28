"use client";

import React from "react";
import Filterbtn from "./Filterbtn";
import { useProduct } from "@/hooks/ProductContext";

import Image from "next/image";
import { useRouter } from "next/navigation";
import AddtoBox from "./AddtoBox";

function ProductCards({title}) {

  const { filteredProducts } = useProduct();
  const router = useRouter();
  
  return (
    <div>
      <div className="card-satisliderleri-container">
        <div className="card-satisliderleri">
          <div className="card-satisliderleri-header">
            <h2>{title}</h2>
            <Filterbtn />
          </div>

          <div className="card-satisliderleri-content">
            {filteredProducts &&
              filteredProducts.map((product) => (
                <div key={product.id} onClick={()=>router.push(`/details/${product.id}`)} className="card-satisliderleri-item">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt="sekil"
                    width={200}
                    height={200}
                    className="product-image"
                  />
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.originalPrice}</p>
                  <div className="buttons">
                    <AddtoBox product={product} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
