import React from "react";
import TeamData from "../../data/data.json";

export const MP = () => {
  const team = TeamData.Team || [];
  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Our Team</span>
          <h2>Management's Profile</h2>
          <p>
            The professionals who translate the Bank's vision and mission into
            reality.
          </p>
        </div>
      </section>
      <div className="page-body">
        <div className="container">
          <div className="page-inner">
            <div className="mgmt-grid">
              {team.map((m, i) => (
                <div className="mgmt-card" key={i} data-reveal>
                  <div className="mgmt-photo">
                    <img src={m.img} alt={m.name} />
                  </div>
                  <div className="mgmt-info">
                    <h3 className="mgmt-name">{m.name}</h3>
                    <span className="mgmt-role">{m.job}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mgmt-note" data-reveal>
              <p>
                The Management is composed of professionals in Microfinance
                banking who translate the goals, vision and mission of the Bank
                into reality. The Bank has a hierarchical structure that
                outlines the horizontal and vertical lines of communication.
              </p>
              <p>
                The importance placed on the vision and mission of the Bank made
                it focus on agriculture and the agricultural value chain to
                enable it serve its community very well and also meet its social
                responsibility effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};