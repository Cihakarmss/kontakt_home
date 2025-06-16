'use client';
import React from "react";

function StoreList({ stores }) {
  if (!stores || stores.length === 0) {
    return <div className="stores-list">Bu bölgədə mağaza tapılmadı</div>;
  }

  return (
    <div className="stores-list">
      {stores.map((store) => (
        <div key={store.id} className="store-item">
          <h3>{store.name}</h3>
          <p className="store-address">{store.address}</p>
          <p className="store-hours">
            <span className="hours-label">İş saatları:</span> {store.hours}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StoreList;