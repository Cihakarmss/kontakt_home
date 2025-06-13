'use client';
import React from "react";

function StoreList({ stores }) {
  return (
    <div className="stores-list">
      {stores.map((store) => (
        <div key={store.name} className="store-item">
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>{store.hours}</p>
        </div>
      ))}
    </div>
  );
}

export default StoreList;
