import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const items = props.data ? props.data.slice(0, 8) : [];
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title" data-reveal>
          <div className="eyebrow">Moments &amp; Products</div>
          <h2>Gallery</h2>
          <p>
            A glimpse of our products, services, and the moments we share with
            the communities we serve.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {items.length
              ? items.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-3"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <div className="gallery-more" data-reveal>
          <a href="/gallery" className="btn btn-custom btn-lg btn-ghost-accent">
            View Full Gallery <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};