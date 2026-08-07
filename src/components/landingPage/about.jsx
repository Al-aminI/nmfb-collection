import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" data-reveal>
            <div className="about-media">
              <div className="about-badge-ring">
                <div className="inner">
                  <div className="n">30+</div>
                  <div className="t">Years of Trust</div>
                </div>
              </div>
              <div className="about-img-wrap">
                <img
                  src="img/open_account.jpeg"
                  className="img-responsive"
                  alt="Opening an account at Nasarawa Microfinance Bank"
                />
              </div>
              <div className="about-card-float">
                <div className="af-icon">
                  <i className="fa fa-university"></i>
                </div>
                <div>
                  <div className="n">Flexible Savings</div>
                  <div className="t">Built around your income</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-md-6"
            data-reveal
            style={{ "--d": "0.15s" }}
          >
            <div className="about-text">
              <div className="eyebrow">About Us</div>
              <h2>Start saving today</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Three simple steps to open an account</h3>
              <div className="about-steps">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>
                          <span>{d}</span>
                        </li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};