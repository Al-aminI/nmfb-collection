import React from "react";

export const INFSAVINGS = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Infant Savings – Savings for Your Children's Future</h2>
          <p>
            A dedicated savings account to plan and contribute towards your
            children's upbringing and education expenses.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>Infant Savings — Securing your children's future</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <ul className="check-list">
                <li>Daily, weekly, or monthly savings.</li>
                <li>Lodgment through transfers or from places of business, homes, or the bank.</li>
                <li>Funds guaranteed by the Nigeria Deposit Insurance Corporation (NDIC).</li>
                <li>Withdraw once a month to manage your child's upkeep needs.</li>
              </ul>
            </div>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Account Opening Requirements</h3>
            </div>
            <div className="prose" data-reveal>
              <p style={{ marginBottom: 20 }}>
                <strong>Open a savings account today for your child/children:</strong>
              </p>
              <ul className="check-list">
                <li>Complete the application form to enter into the program.</li>
                <li>Provide 1 passport photograph for the child and yourself.</li>
                <li>Copy of the child's birth certificate plus your voter's card, driving license, or international passport for new customers, plus BVN.</li>
                <li>Other conditions may apply when the need for assistance arises.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};