import React from "react";

export const Testimonials = (props) => {
  const data = props.data || [];
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <div className="eyebrow">Testimonials</div>
          <h2>What our clients say</h2>
          <p>Real stories from the people and businesses we serve.</p>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="col-md-4"
              data-reveal
              style={{ "--d": `${(i % 3) * 0.1}s` }}
            >
              <div className="testimonial">
                <div className="t-quote">
                  <i className="fa fa-quote-right"></i>
                </div>
                <div className="testimonial-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="testimonial-content">
                  <p>"{d.text}"</p>
                </div>
                <div className="testimonial-foot">
                  <div className="testimonial-image">
                    <img src={d.img} alt="" />
                  </div>
                  <div className="testimonial-meta">{d.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};