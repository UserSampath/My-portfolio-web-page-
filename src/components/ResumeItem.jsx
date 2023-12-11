import React from "react";
import parse from 'html-react-parser'
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon == "experience" ? <FaBriefcase/> :<FaGraduationCap/>}</div>
      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume_description">{desc}</p>
    </div>
  );
};

export default ResumeItem;
