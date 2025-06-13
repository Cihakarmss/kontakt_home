'use client';
import React from "react";

function FilterButtons({ regions, selectedRegion, onSelectRegion }) {
  return (
    <div className="filter-btn-container">
      {regions.map((reg) => (
        <button
          key={reg}
          onClick={() => onSelectRegion(reg)}
          className={`filter-btn ${selectedRegion === reg ? "active" : ""}`}
        >
          <span className="filter-title">{reg}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
