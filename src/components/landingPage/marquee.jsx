import React from "react";

const items = [
  "Hajj Savings",
  "Adashe",
  "Rai da Buri",
  "Educational Finance",
  "Halal Savings",
  "Hire Purchase",
  "Astute Farming",
  "Infant Savings",
];

export const Marquee = () => {
  return (
    <div id="marquee">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div className="marquee-item" key={dup}>
            {items.map((item, i) => (
              <span key={`${dup}-${i}`}>
                {item} <i className="dot"></i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};