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
            We offer diverse products and services to meet your specific needs —
            from savings to agricultural finance.
          </p>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="col-md-4 col-sm-6"
              data-reveal
              style={{ "--d": `${(i % 3) * 0.12}s` }}
            >
              <a href={d.link || "#services"} className="service-link">
                <div className="service-card">
                  <span className="sc-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <i className={d.icon}></i>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                  <span className="sc-cta">
                    Learn more <i className="fa fa-arrow-right"></i>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};