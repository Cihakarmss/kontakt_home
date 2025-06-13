'use client';
import React, { useState } from "react";
import storesData from "@/data/storesData";
import FilterButtons from "@/components/FilterButtons";
import StoreList from "@/components/StoreList";

function FilterStores() {
  const [region, setRegion] = useState("Bakı");

  const uniqueRegions = storesData.map(item => item.region);
  const selectedRegionData = storesData.find(item => item.region === region);
  const selectedStores = selectedRegionData?.stores || [];

  return (
    <div>
      <FilterButtons
        regions={uniqueRegions}
        selectedRegion={region}
        onSelectRegion={setRegion}
      />
      <StoreList stores={selectedStores} />
    </div>
  );
}

export default FilterStores;
