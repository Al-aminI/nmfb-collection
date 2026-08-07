import React, { useEffect, useState } from "react";

export const videoList = [
  "VID-20250619-WA0004.mp4",
  "VID-20250627-WA0042.mp4",
  "VID-20250627-WA0042_1.mp4",
  "VID-20250702-WA0002.mp4",
  "VID-20250711-WA0006.mp4",
  "VID-20250711-WA0009.mp4",
  "VID-20250711-WA0010.mp4",
];

const GALLERY_LIMIT = 12;

export const FullGallery = (props) => {
  const [visible, setVisible] = useState(GALLERY_LIMIT);
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ open: false, src: "" });

  const allImages = props.data || [];

  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  const escClose = (e) => {
    if (e.key === "Escape") setLightbox({ open: false, src: "" });
  };
  useEffect(() => {
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  const shownImages = allImages.slice(0, visible);
  const hasMoreImages = visible < allImages.length;

  return (
    <div id="cg">
      <section className="page-head">
        <div className="container">
          <span className="eyebrow on-dark">Moments &amp; Media</span>
          <h2>Full Gallery</h2>
          <p>
            Explore our complete collection of photos and videos — products,
            events, and stories from Nasarawa Microfinance Bank Ltd.
          </p>
        </div>
      </section>

      <div className="page-body">
        <div className="container">
          <div className="page-inner" style={{ maxWidth: 1200 }}>
            {/* Tabs */}
            <div className="fg-tabs" data-reveal>
              <button
                className={`fg-tab ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                <i className="fa fa-th"></i> All Media
              </button>
              <button
                className={`fg-tab ${filter === "photos" ? "active" : ""}`}
                onClick={() => setFilter("photos")}
              >
                <i className="fa fa-image"></i> Photos ({allImages.length})
              </button>
              <button
                className={`fg-tab ${filter === "videos" ? "active" : ""}`}
                onClick={() => setFilter("videos")}
              >
                <i className="fa fa-play-circle"></i> Videos ({videoList.length})
              </button>
            </div>

            {/* Photos */}
            {(filter === "all" || filter === "photos") && (
              <div className="masonry-grid">
                {shownImages.map((d, i) => (
                  <div
                    key={`g-${i}`}
                    className="masonry-item"
                    data-reveal
                    style={{ "--d": `${(i % 6) * 0.05}s` }}
                  >
                    <div
                      className="masonry-inner"
                      onClick={() =>
                        setLightbox({ open: true, src: d.largeImage })
                      }
                    >
                      <img src={d.smallImage} alt={d.title} loading="lazy" />
                      <div className="masonry-overlay">
                        <span className="masonry-zoom">
                          <i className="fa fa-search-plus"></i>
                        </span>
                        <h4>{d.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load more photos */}
            {hasMoreImages && (filter === "all" || filter === "photos") && (
              <div className="gallery-more" data-reveal>
                <button
                  className="btn btn-custom btn-lg btn-ghost-accent"
                  onClick={() => setVisible(visible + GALLERY_LIMIT)}
                >
                  Load More Photos <i className="fa fa-chevron-down"></i>
                </button>
              </div>
            )}

            {/* Videos */}
            {filter !== "photos" && (
              <>
                <div className="body-head" style={{ marginTop: 60 }}>
                  <span className="bh-bar"></span>
                  <h3>All Videos</h3>
                </div>
                <div className="masonry-grid">
                  {videoList.map((v, i) => (
                    <div
                      key={`v-${i}`}
                      className="masonry-item masonry-video"
                      data-reveal
                      style={{ "--d": `${(i % 6) * 0.05}s` }}
                    >
                      <video controls preload="metadata" poster="">
                        <source src={`videos/${v}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, src: "" })}>
          <button className="lightbox-close" aria-label="Close">
            <i className="fa fa-times"></i>
          </button>
          <img src={lightbox.src} alt="Expanded view" />
        </div>
      )}
    </div>
  );
};