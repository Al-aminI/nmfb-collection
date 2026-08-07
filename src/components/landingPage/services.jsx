import React from "react";

export const Services = (props) => {
  const data = props.data || [];
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" data-reveal>
          <div className="eyebrow on-dark">What We Offer</div>
          <h2>Products that power progress</h2>
          <p>
            We offer diverse products and services to meet your specific needs.
          </p>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="col-md-4"
              data-reveal
              style={{ "--d": `${i * 0.12}s` }}
            >
              <div className="service-card">
                <span className="sc-num">0{i + 1}</span>
                <i className={d.icon}></i>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};