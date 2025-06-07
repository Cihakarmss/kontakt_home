import featuresData from "@/data/featuresData";
import React from "react";

function FeaturesCards() {
  return (
    <div>
      {featuresData &&
        featuresData.map((feature) => (
          <div key={feature.id} className="featurescard">
            <div className="featurescard-image">
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
              />
            </div>
            <div className="featurescard-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FeaturesCards;
