import React from "react";

export const SFA = () => {
  const pdfUrl = "docs/NMFB-Statement-Financial.pdf";
  return (
    <div className="sfa-page">
      <div className="sfa-hero">
        <div className="container text-center">
          <h1>Statement of Financial Affairs</h1>
          <p>
            Transparency you can trust. Explore Nasarawa Microfinance Bank
            Ltd's official statement of financial affairs.
          </p>
          <div className="sfa-hero-actions">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-custom btn-lg"
            >
              <i className="fa fa-eye"></i> View Document
            </a>
            <a
              href={pdfUrl}
              download="NMFB-Statement-of-Financial-Affairs.pdf"
              className="btn btn-custom btn-lg btn-sfa-download"
            >
              <i className="fa fa-download"></i> Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="about-text">
              <br />
              <div className="cg-text sfa-viewer">
                <iframe
                  src={pdfUrl}
                  title="Nasarawa Microfinance Bank Ltd - Statement of Financial Affairs"
                  width="100%"
                  height="1100"
                  style={{ border: "none" }}
                  loading="lazy"
                />
              </div>
              <br />
              <br />
              <div className="sfa-archive">
                <h3>Statement of Financial Affairs</h3>
                <p>
                  The document below provides the official statement of
                  financial affairs of Nasarawa Microfinance Bank Ltd. Use the
                  buttons above to view it in a new tab or download a copy for
                  your records.
                </p>
                <div className="cg-text">
                  <img src="img/sfa.png" alt="sfa" />
                </div>
                <br />
                <br />
                <div className="cg-text">
                  <img src="img/P&L.png" alt="P&L" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};