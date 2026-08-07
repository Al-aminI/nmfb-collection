import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="grid-overlay"></div>
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="orb orb-c"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="hero-badge" data-reveal>
                  <span className="dot"></span> Trusted Microfinance Banking
                </div>
                <h1 data-reveal style={{ "--d": "0.1s" }}>
                  {props.data ? props.data.title : "Loading"}
                  <br />
                  <span className="accent">Greener Finances.</span>
                </h1>
                <p data-reveal style={{ "--d": "0.2s" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <div className="hero-actions" data-reveal style={{ "--d": "0.3s" }}>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll btn-hero-primary"
                  >
                    Get Started <i className="fa fa-arrow-right"></i>
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-custom btn-lg page-scroll btn-white"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="hero-visual" data-reveal style={{ "--d": "0.4s" }}>
                  <div className="bank-card">
                    <div className="bc-top">
                      <div className="bc-logo">NASMFB</div>
                      <div className="bc-chip"></div>
                    </div>
                    <div className="bc-num">5276 •••• •••• 2026</div>
                    <div className="bc-bottom">
                      <div>
                        <div className="small">Card Holder</div>
                        <div className="who">Nasarawa MFB Ltd</div>
                      </div>
                      <div>
                        <div className="small">Since 1993</div>
                        <div className="bc-contactless"></div>
                      </div>
                    </div>
                  </div>
                  <div className="float-chip fc-1">
                    <i className="fa fa-lock"></i>
                    <div>
                      <div className="t">Secure</div>
                      <div className="v">Bank-grade Safety</div>
                    </div>
                  </div>
                  <div className="float-chip fc-2">
                    <i className="fa fa-percent"></i>
                    <div>
                      <div className="t">Affordable</div>
                      <div className="v">Negotiable Rates</div>
                    </div>
                  </div>
                </div>

                <div className="hero-stats" data-reveal style={{ "--d": "0.5s" }}>
                  {[
                    ["1993", "Established"],
                    ["20+", "Years Service"],
                    ["40k+", "Customers"],
                    ["4+", "Branches"],
                  ].map(([num, label]) => (
                    <div className="hero-stat" key={label}>
                      <div className="num">
                        {num}
                        <span>+</span>
                      </div>
                      <div className="label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};