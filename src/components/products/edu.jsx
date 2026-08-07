import React from "react";

export const EDU = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Products</span>
          <h2>Ilimi Jari – Educational Finance Program</h2>
          <p>
            Targeted at parents with children in schools and the schools
            themselves, ensuring prompt payment of fees and educational support.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <p className="product-tagline" data-reveal>“Ilimi Jari” for Group and Schools' Savings Scheme</p>
            <div className="body-head">
              <span className="bh-bar"></span>
              <h3>Product Features</h3>
            </div>
            <div className="prose" data-reveal>
              <ul className="check-list">
                <li>This product is targeted at parents who have their children in schools, most especially private schools. The scheme does not stop at Nursery, Primary and Secondary Schools but also includes students in tertiary institutions.</li>
                <li>The Schools also benefit from prompt payment of school fees — no more headache with defaulting parents, good accountability, and many more.</li>
                <li>Savings for a period of not less than 3 months qualifies one for a credit facility.</li>
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