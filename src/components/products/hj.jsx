import React from "react";

export const HJ = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Hajj/Christmas Savings</h2>
          <p>
            A dedicated festivities savings program so you can plan and
            contribute towards your Hajj pilgrimage or Christmas celebrations
            stress-free.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>Hajj/Christmas Savings — Save for the moments that matter</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <ul className="check-list">
                <li>Daily, weekly, or monthly savings.</li>
                <li>Lodgment through transfers or from places of business, homes, or the bank.</li>
                <li>Funds guaranteed by the Nigeria Deposit Insurance Corporation (NDIC).</li>
                <li>Withdraw once a month to stay on track toward your festivities target.</li>
              </ul>
            </div>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Account Opening Requirements</h3>
            </div>
            <div className="prose" data-reveal>
              <p style={{ marginBottom: 20 }}>
                <strong>Open a savings account today:</strong>
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