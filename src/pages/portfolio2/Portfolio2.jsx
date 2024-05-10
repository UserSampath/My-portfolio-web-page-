import React, { useState, useEffect } from "react";
import "./portfolio.css";
import pm1 from "../../assets/pm1.png";
import pm2 from "../../assets/pm2.png";

const Portfolio2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pm1, pm2];

  const toggleImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(toggleImage, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio_container">
        <div style={{ width: "100%" }}>
          <div className="portfolio_card">
            <div className="project_title">Project Management Software</div>
            <div style={{ color: "gray", textAlign: "center" }}>
              2nd year software project
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                width="400"
                height="220"
                src="https://www.youtube.com/embed/hggZ4pbUtRk?si=yRlHtntY72wnxlk1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;
