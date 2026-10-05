import { useState } from "react";

const logoFiles = import.meta.glob("../assets/company-logos/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const logos = Object.entries(logoFiles)
  .filter(([path]) => /\.(png|jpg|jpeg|webp|svg)$/i.test(path))
  .map(([path, url]) => {
    const fileName = path.split("/").pop();

    return {
      name: fileName.replace(/\.[^/.]+$/, ""),
      url,
    };
  });

function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const marqueeLogos = [...logos, ...logos];

  const moveLogos = (direction) => {
    if (!logos.length) return;

    setCurrentIndex((previousIndex) => {
      const nextIndex = previousIndex + direction;

      if (nextIndex < 0) {
        return logos.length - 1;
      }

      if (nextIndex >= logos.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  return (
    <section className="trusted">
      <div className="site-container">
        {/* TITLE */}
        <div className="section-title">
          <h2>
            SERVED BY{" "}
            <span>INNOVISION COSMOCHEM SOLUTIONS</span>{" "}
            500+ COMPANIES
          </h2>

          <span className="title-underline"></span>
        </div>

        {/* LOGO ROW */}
        <div className="trusted-row">
          <button
            type="button"
            className="slider-arrow"
            onClick={() => moveLogos(-1)}
            aria-label="Previous companies"
          >
            &#8249;
          </button>

          <div className="trusted-marquee">
            <div
              className="trusted-track"
              style={{
                transform: `translateX(-${currentIndex * 180}px)`,
              }}
            >
              {marqueeLogos.map((logo, index) => (
                <div
                  className="company-logo"
                  key={`${logo.name}-${index}`}
                >
                  <img src={logo.url} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="slider-arrow"
            onClick={() => moveLogos(1)}
            aria-label="Next companies"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;