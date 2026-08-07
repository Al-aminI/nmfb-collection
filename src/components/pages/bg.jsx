import React from "react";

export const BG = () => {
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">About the Bank</span>
          <h2>Background</h2>
          <p>
            Why Nasarawa Microfinance Bank exists — the challenges we tackle and
            the communities we serve.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <div className="prose" data-reveal>
              <p>
                The desire to financially empower the under-privileged
                population in our communities led to the formation of
                Microfinance Banks across the country. However, key challenges
                facing these institutions include inadequate automation to
                streamline internal operations, lack of enough capital to meet
                the challenges of high demand of credits, lack of products that
                would meet the yearnings of the target clients, and above all
                the strangulating operating environment.
              </p>
              <p>
                Understanding these hurdles, and the desire to overcome them
                made Nasarawa Microfinance Bank Ltd take up the challenge and
                single itself out with efficient operations through product
                delivery, quality and accessible financial services, as well as
                process automation to improve the livelihood of its customers
                that cut across the nooks and crannies of Nasarawa State.
              </p>
              <p>
                90% of the population of Nasarawa State in the 2006 census
                classified the State as an agrarian State; as such the Bank made
                agriculture and agricultural value chain support one of its main
                business activities. On this premise, it has been partnering
                with many organizations to achieve this important feat.
              </p>
            </div>
            <div className="partner-tags" data-reveal>
              <span className="partner-tag">
                CBN Intervention Programs (since 2016)
              </span>
              <span className="partner-tag">
                GIZ AgFin Project (since 2018)
              </span>
              <span className="partner-tag">IFAD/FGN Value Chain Development Programme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};