import React, { useState } from "react";
import { portfolio } from "../../assets/data";
import "./portfolio.css"
import PortfolioItem from "../../components/PortfolioItem";
const Portfolio = () => {

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
