import React from "react";

export const Vision = (props) => {
  const data = props.data || [];
  return (
    <div id="vision" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title" data-reveal>
          <div className="eyebrow on-dark">Our Direction</div>
          <h2>Our goals</h2>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.title}-${i}`}
              className="col-xs-12 col-sm-6 col-md-4"
              data-reveal
              style={{ "--d": `${i * 0.1}s` }}
            >
              <div className="vision-item">
                <i className={d.icon}></i>
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