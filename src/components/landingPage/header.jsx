import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "", duration = 1800 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    let raf;
    let io;
    const el = ref.current;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * end));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (e) => e.forEach((x) => x.isIntersecting && run()),
        { threshold: 0.4 }
      );
      io.observe(el);
    } else {
      run();
    }
    return () => {
      cancelAnimationFrame(raf);
      io && io.disconnect();
    };
  }, [end, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

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
            <div className="hero-grid">
              <div className="hero-left">
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
                    href="#services"
                    className="btn btn-custom btn-lg page-scroll btn-white"
                  >
                    Our Products
                  </a>
                </div>
                <div className="hero-trust" data-reveal style={{ "--d": "0.4s" }}>
                  <span><i className="fa fa-shield"></i> CBN Licensed</span>
                  <span><i className="fa fa-lock"></i> NDIC Insured</span>
                  <span><i className="fa fa-clock-o"></i> Since 1993</span>
                </div>
              </div>

              <div className="hero-right" data-reveal style={{ "--d": "0.35s" }}>
                <div className="hero-visual">
                  <div className="bank-card">
                    <div className="bc-glow"></div>
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
                      <div className="bc-right">
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
                  <div className="float-chip fc-3">
                    <i className="fa fa-mobile"></i>
                    <div>
                      <div className="t">Mobile</div>
                      <div className="v">USSD &amp; Online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stats" data-reveal style={{ "--d": "0.5s" }}>
              <div className="hero-stat">
                <div className="num"><Counter end={1993} /></div>
                <div className="label">Established</div>
              </div>
              <div className="hero-stat">
                <div className="num"><Counter end={20} suffix="+" /></div>
                <div className="label">Years Service</div>
              </div>
              <div className="hero-stat">
                <div className="num"><Counter end={40} suffix="k+" /></div>
                <div className="label">Customers</div>
              </div>
              <div className="hero-stat">
                <div className="num"><Counter end={4} suffix="+" /></div>
                <div className="label">Branches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};