import React from "react";

export const BH = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">About the Bank</span>
          <h2>Brief History</h2>
          <p>
            From a community bank in 1993 to a leading state microfinance bank —
            three decades of growth and innovation.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <div className="prose" data-reveal>
              <p>
                The bank started as a Community Bank in March 1993 and converted
                to a Unit Microfinance Bank in 2007. In 2013, with consistent
                growth the bank became the first State Microfinance Bank in
                Nasarawa State. However, with the recent recapitalization policy
                of the Central Bank of Nigeria to strengthen the capabilities of
                MFBs, it downscaled to Unit 1 Tier 1 with authorized
                shareholders' funds of a little above two hundred million naira.
              </p>
              <p>
                This gives the bank leverage to continue operating in the
                unbanked and high-density areas by keeping its branches and cash
                centers together with its staff as the law allows it to have four
                branches outside its head office within five contiguous local
                government areas. The outreach is growing by the day — from
                12,360 in 2013 to more than 30,000 in 2022, with the zeal to
                double the figures in the years ahead.
              </p>
              <p>
                The bank's mode of operations had started from analogue to
                digital and of recent internet or electronic banking backed up
                with robust software. This has put the bank on a pedestal of
                competing not only with its peers but commercial banks — as can
                be attested from the ATM and other electronic devices provided
                in its branches and cash center.
              </p>
            </div>
            <div className="vmv-grid" data-reveal>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>To be a key player in alleviating the suffering of the masses</p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-compass"></i>
                </div>
                <h3>Our Mission</h3>
                <p>Exploring opportunities for the poor</p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-handshake-o"></i>
                </div>
                <h3>Core Values</h3>
                <p>Partnering to make life better</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};