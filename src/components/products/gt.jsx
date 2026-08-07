import React from "react";

export const GT = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Guntun Gatarin Ka – Lease Program</h2>
          <p>
            A lease program empowering the downtrodden to acquire equipment
            that improves income — with options to purchase at the end.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>‘Guntun Gatarin Ka’ — Half a loaf is better than none</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <ul className="check-list">
                <li>This product is a lease program that allows the downtrodden to get and work with equipment that would improve their income.</li>
                <li>At the end of it, the Bank may decide to sell the equipment to the lessee at an affordable price on hire purchase or outright payment.</li>
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