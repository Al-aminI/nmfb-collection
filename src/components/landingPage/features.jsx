import React from "react";

export const Features = (props) => {
  const data = props.data || [];
  return (
    <div id="features">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <div className="eyebrow">Why Choose Us</div>
          <h2>A bank built around you</h2>
          <p>
            Trusted microfinance services designed for individuals, families
            and growing businesses.
          </p>
        </div>
        <div className="bento">
          {data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className={`feature-card ${i === 0 ? "big" : ""}`}
              data-reveal
              style={{ "--d": `${i * 0.1}s` }}
            >
              <div className="f-icon">
                <i className={d.icon}></i>
              </div>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};