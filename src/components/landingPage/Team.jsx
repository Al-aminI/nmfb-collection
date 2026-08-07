import React from "react";

export const Team = (props) => {
  const data = props.data || [];
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title" data-reveal>
          <div className="eyebrow">Leadership</div>
          <h2>Meet the team</h2>
          <p>
            Dedicated professionals focused on driving NMFB forward in rain and
            sun, good and hard times.
          </p>
        </div>
        <div className="row">
          {data.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className="col-md-3 col-sm-6 team"
              data-reveal
              style={{ "--d": `${i * 0.1}s` }}
            >
              <div className="thumbnail">
                <div className="team-img-wrap">
                  <img src={d.img} alt={d.name} className="team-img" />
                </div>
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};