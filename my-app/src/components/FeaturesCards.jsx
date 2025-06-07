import featuresData from "@/data/featuresData";
import Image from "next/image";
import React from "react";

function FeaturesCards() {
  return (
    <div className="featurescard-container">
      {featuresData &&
        featuresData.map((feature) => (
          <div key={feature.id} className="featurescard">
            <div className="icon">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={50}
                height={50}
                style={{ backgroundColor: feature.iconColor }}
              />
            </div>
            <div className="content">
              <div className="title">{feature.title}</div>
              <div className="description">{feature.description}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FeaturesCards;
