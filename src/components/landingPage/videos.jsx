import React from "react";

const videoList = [
  "VID-20250619-WA0004.mp4",
  "VID-20250627-WA0042.mp4",
  "VID-20250627-WA0042_1.mp4",
  "VID-20250702-WA0002.mp4",
  "VID-20250711-WA0006.mp4",
  "VID-20250711-WA0009.mp4",
  "VID-20250711-WA0010.mp4",
];

export const Videos = () => {
  return (
    <div id="videos" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Videos</h2>
          <p>Watch highlights and moments from Nasarawa Microfinance Bank Ltd.</p>
        </div>
        <div className="row">
          {videoList.map((v, i) => (
            <div
              key={v}
              className="col-sm-6 col-md-4 col-lg-4"
              style={{ marginBottom: "30px" }}
            >
              <video
                className="img-responsive"
                controls
                preload="metadata"
                poster=""
              >
                <source src={`videos/${v}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};