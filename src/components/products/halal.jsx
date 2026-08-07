import React from "react";

export const HALAL = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Halal Savings</h2>
          <p>
            A Sharia-compliant savings product designed for customers who want
            their finances managed in accordance with Islamic principles while
            enjoying flexible deposit and withdrawal options.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>Halal Savings — Banking aligned with your faith</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <ul className="check-list">
                <li>Sharia-compliant savings in line with Islamic banking principles.</li>
                <li>Profit-sharing model instead of interest, ensuring ethical and fair returns.</li>
                <li>Daily, weekly, or monthly savings with flexible deposit options.</li>
                <li>Lodgment through transfers, from places of business, homes, or the bank.</li>
                <li>Funds guaranteed by the Nigeria Deposit Insurance Corporation (NDIC).</li>
              </ul>
            </div>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Account Opening Requirements</h3>
            </div>
            <div className="prose" data-reveal>
              <p style={{ marginBottom: 20 }}>
                <strong>Open a Halal savings account today:</strong>
              </p>
              <ul className="check-list">
                <li>Complete the application form to enter into the program.</li>
                <li>Provide 1 passport photograph.</li>
                <li>Copy of voter's card, driving license, or international passport for new customers plus BVN.</li>
                <li>Other conditions may apply when the need for assistance arises.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};