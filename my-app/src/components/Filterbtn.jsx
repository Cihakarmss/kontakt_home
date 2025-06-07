"use client";
import React from "react";
import filterbtnData from "@/data/filterbtnData";
import { useProduct } from "@/hooks/ProductContext";

function Filterbtn() {
  const { category, setCategory } = useProduct();

  return (
    <div>
      <div className="filter-btn-container">
        {filterbtnData &&
          filterbtnData.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setCategory(btn.name)}
              className={`filter-btn ${category === btn.name ? "active" : ""}`}
            >
              <span className="filter-title">{btn.name}</span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default Filterbtn;
