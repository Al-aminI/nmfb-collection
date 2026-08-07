import React from "react";

export const RDB = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Rai da Buri – Personal Effects Finance</h2>
          <p>
            A bridging facility to help households meet miscellaneous needs —
            marriages, naming ceremonies, hospital bills, and more.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>‘Rai da Buri’ — Life with Ambition</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <p style={{ marginBottom: 20 }}>
                The program is a bridging facility to enable households meet
                their miscellaneous needs such as:
              </p>
              <ul className="check-list">
                <li>Marriages and naming ceremonies.</li>
                <li>Hospital bills and emergency expenses.</li>
                <li>Enter into a contract with the Bank on what you want to achieve over a period of time.</li>
                <li>Daily, weekly, or monthly savings.</li>
                <li>Lodgment could be through transfers or from places of business and homes.</li>
                <li>You can withdraw from the contract by giving 24 hours' notice.</li>
                <li>Savings for a period of not less than 3 months qualifies one for a credit facility, repayable within 3 to 6 months.</li>
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