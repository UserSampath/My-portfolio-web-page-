import React, { useState } from "react";
import "./portfolio.css";
import { photos } from "../../assets/data";
import { useNavigate, useRoutes } from "react-router-dom";

const Portfolio = () => {
  const router = useNavigate();
  const [industryProjects, setIndustryProjects] = useState([
    { id: 5, name: "JCGN", photo: photos.jcgnWithLogo },
    { id: 6, name: "Delta Max", photo: photos.deltaMaxLogo },
    { id: 2, name: "Oi-Jo", photo: photos.OiJo_withLogo },
    { id: 3, name: "Open Curtains", photo: photos.occWithLogo },
    { id: 4, name: "PMS", photo: photos.pmsWithLogo },
    { id: 7, name: "JCGN Admin Panel", photo: photos.jcgnAdminWithLogo },
    

  ]);

  const [personalProjects, setPersonalProjects] = useState([
    { id: 1, name: "ChatVista", photo: photos.ChatVistaWithLogo },
    { id: 7, name: "Career Readiness System", photo: photos.pmsWithLogo },
    { id: 2, name: "Portfolio", photo: photos.jcgnAdminWithLogo },
    { id: 3, name: "SmartRoom ", photo: photos.occWithLogo },
    { id: 4, name: "LuminaButton ", photo: photos.OiJo_withLogo },
    { id: 5, name: "PocketGuard ", photo: photos.jcgnWithLogo },




  ]);

  return (
    <section className="portfolio section">
      <h2 style={{ margin: "0px" }} className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div style={{ margin: "" }} className="separator"></div>
      <h3
        style={{ marginBottom: "30px", fontSize: "20px" }}
        className="section__subtitle subtitle_center"
      >
        Industry Projects
      </h3>

      <div className=" container ">
        <div className="flex_Center">
          <div className="portfolio_grid">
            {industryProjects.map((item) => {
              return (
                <div
                  className="portfolio_grid_item"
                  onClick={() => router(`/portfolio/${item.name}`)}
                >
                  <img
                    className="portfolio_grid_img"
                    src={item.photo}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                  <div className="portfolio_item_title">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "55px" }} className="separator"></div>
      <h3
        style={{ marginBottom: "30px", fontSize: "20px" }}
        className="section__subtitle subtitle_center"
      >
        Personal Projects
      </h3>

      <div className=" container ">
        <div className="flex_Center">
          <div className="portfolio_grid">
            {personalProjects.map((item) => {
              return (
                <div
                  className="portfolio_grid_item"
                  onClick={() => router(`/portfolio/${item.name}`)}
                >
                  <img
                    className="portfolio_grid_img"
                    src={item.photo}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />
                  <div className="portfolio_item_title">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
