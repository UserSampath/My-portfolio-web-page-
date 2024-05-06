import React from "react";
import "./home.css"
import Profile from "../../assets/p4.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home section grid">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "120%",
        }}>
        <img src={Profile} alt="" className="home__img" />
      </div>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Nalaka Sampath.</span> <br /> Full Stack Developer
          </h1>
          <p className="home__description">
            I am a passionate and motivated person, dedicated to exploring new
            technologies in the field of Information Technology.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>{" "}
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
