import React, { useState } from "react";
import "./portfolio.css";
import { photos } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import LuminaButton from "lumina-button";
import { IoDocumentLockSharp } from "react-icons/io5";
import { BsArrow90DegLeft } from "react-icons/bs";

const Portfolio = () => {
  const router = useNavigate();
  const [industryProjects, setIndustryProjects] = useState([
    { name: "JCGN", photo: photos.jcgnWithLogo },
    { name: "Delta Max", photo: photos.deltaMaxLogo },
    { name: "Oi-Jo", photo: photos.OiJo_withLogo },
    { name: "Open Curtains", photo: photos.occWithLogo },
    { name: "PMS", photo: photos.pmsWithLogo },
    { name: "JCGN Admin Panel", photo: photos.jcgnAdminWithLogo },
  ]);

  const [personalProjects, setPersonalProjects] = useState([
    { name: "ChatVista", photo: photos.ChatVistaWithLogo },
    {
      name: "Career Readiness System",
      photo: photos.CareerReadinessSystemLogo,
    },
    { name: "Portfolio", photo: photos.PortfolioLogo },
    { name: "EasyRoom ", photo: photos.EasyRoomLogo },
    { name: "LuminaButton ", photo: photos.LuminaButtonLogo },
    { name: "PocketGuard ", photo: photos.PocketGuardLogo },
  ]);

  return (
    <section className="portfolio section">
      <h2 style={{ margin: "0px" }} className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div style={{ margin: "" }} className="separator"></div>
      <h3
        id="industry-projects"
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
        id="personal-projects"
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
