import React, { useEffect, useState } from "react";
import "./about.css";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
// import CV from "../../assets/Nalaka Sampath_SE.pdf";
import Skills from "../../components/Skills";
import ResumeItem from "../../components/ResumeItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const About = () => {

const [resume, setResume] = useState([]);
useEffect(() => {
  getResume();
}, []);
const resumeCollectionRef = collection(db, "resumeInfo");
const getResume = async () => {
  try {
    const data = await getDocs(resumeCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const sortedResume = [...filteredData].sort((a, b) => a.ID - b.ID);

    setResume(sortedResume);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="separator"></div>
        <h3 className="section__subtitle subtitle_center">
          Personal Information
        </h3>
        <div className="about__container grid">
          <div className="about__info">
            <ul className="info__list grid">
              <Info />
            </ul>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"20px"
          }}>
          <a
            href="https://drive.google.com/drive/folders/1es9V4G3Vkp99GHWrSMwMYQCfp2flk73u?usp=drive_link"
            download=""
            className="button">
            Download Cv{" "}
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle_center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle_center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
