import React from "react";

export const CSR = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Impact</span>
          <h2>Corporate Social Responsibility</h2>
          <p>
            Supporting the agrarian community through equipment, seedlings, and
            agricultural value-chain development.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <div className="prose" data-reveal>
              <p>
                The Bank is presently owned by the shareholders in Nasarawa
                Local Government Area — placing it in a demanding position to
                meet the community's Corporate Social Responsibility. The
                community and Nasarawa State at large is an agrarian society,
                therefore the Bank has a responsibility of developing farming
                techniques in the community.
              </p>
              <p>
                This would have a wide impact on the socio-economic status of
                the populace. Considering the impoverished nature of the people,
                the Bank has to procure farming equipment and machineries that
                would change farming techniques for better output. The
                implements are leased out to communities at a subsidized amount
                and also on credit, payable after harvest.
              </p>
              <p>
                The Bank also collaborates with Research Institutions across the
                country to get improved seedlings and with Chemical Companies to
                get genuine agro-chemicals for the farmers. It is also
                developing communities to build agricultural value chain
                businesses to improve the value of their produce.
              </p>
            </div>
            <div className="vmv-grid" data-reveal>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-tractor"></i>
                </div>
                <h3>Farming Equipment</h3>
                <p>Leased to communities at subsidized rates or on credit, payable after harvest.</p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-leaf"></i>
                </div>
                <h3>Improved Seedlings</h3>
                <p>Sourced through national Research Institutions for better yields.</p>
              </div>
              <div className="vmv-card">
                <div className="vmv-icon">
                  <i className="fa fa-flask"></i>
                </div>
                <h3>Agro-Chemicals</h3>
                <p>Genuine chemicals sourced through partnerships with trusted companies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};