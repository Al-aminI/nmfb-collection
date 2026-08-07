import React from "react";

export const CtaBanner = () => {
  return (
    <section id="cta" className="cta-banner">
      <div className="cta-bg-orbs">
        <div className="cta-orb co-1"></div>
        <div className="cta-orb co-2"></div>
      </div>
      <div className="container">
        <div className="cta-inner" data-reveal>
          <div className="cta-left">
            <span className="eyebrow on-dark">Begin Today</span>
            <h2>
              Open an account in minutes
              <br />
              <span className="cta-accent">and grow with us.</span>
            </h2>
            <p>
              Join 40,000+ customers who trust Nasarawa Microfinance Bank for
              affordable savings, credit, and financial services built around
              their needs.
            </p>
            <div className="cta-actions">
              <a href="#contact" className="btn btn-custom btn-lg btn-hero-primary page-scroll">
                Open an Account <i className="fa fa-arrow-right"></i>
              </a>
              <a href="/gallery" className="btn btn-custom btn-lg btn-ghost-accent">
                Visit a Branch
              </a>
            </div>
          </div>
          <div className="cta-visual">
            <div className="cta-balance">
              <div className="cb-top">
                <span className="cb-label">Total Savings</span>
                <i className="fa fa-line-chart"></i>
              </div>
              <div className="cb-amount">
                ₦<span>1.2</span>B+
              </div>
              <div className="cb-bars">
                <span style={{ "--h": "40%" }}></span>
                <span style={{ "--h": "60%" }}></span>
                <span style={{ "--h": "45%" }}></span>
                <span style={{ "--h": "80%" }}></span>
                <span style={{ "--h": "100%" }}></span>
                <span style={{ "--h": "70%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};