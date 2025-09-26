import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState, CSSProperties } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { db } from "../config/firebase";
import { MoonLoader } from "react-spinners";

import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/5.png";
import icon6 from "../assets/icons/6.png";
import icon7 from "../assets/icons/7.png";
import icon8 from "../assets/icons/8.png";
import icon9 from "../assets/icons/9.png";
import icon10 from "../assets/icons/10.png";
import icon11 from "../assets/icons/11.png";
import icon12 from "../assets/icons/12.png";
import icon13 from "../assets/icons/13.png";
import icon14 from "../assets/icons/14.png";
import icon15 from "../assets/icons/15.png";
import icon16 from "../assets/icons/16.png";
import icon17 from "../assets/icons/17.png";
import icon18 from "../assets/icons/18.png";
import icon19 from "../assets/icons/19.png";
import icon20 from "../assets/icons/20.png";
import icon21 from "../assets/icons/21.png";
import icon22 from "../assets/icons/22.png";
import icon23 from "../assets/icons/23.png";
import icon24 from "../assets/icons/24.png";
import icon25 from "../assets/icons/25.png";
import icon26 from "../assets/icons/26.png";
import icon27 from "../assets/icons/27.png";
import icon28 from "../assets/icons/28.png";
import icon29 from "../assets/icons/29.png";

const skillIcons = {
  1: icon1,
  2: icon2,
  3: icon3,
  4: icon4,
  5: icon5,
  6: icon6,
  7: icon7,
  8: icon8,
  9: icon9,
  10: icon10,
  11: icon11,
  12: icon12,
  13: icon13,
  14: icon14,
  15: icon15,
  16: icon16,
  17: icon17,
  18: icon18,
  19: icon19,
  20: icon20,
  21: icon21,
  22: icon22,
  23: icon23,
  24: icon24,
  25: icon25,
  26: icon26,
  27: icon27,
  28: icon28,
  29: icon29,
};




const Skills = ({ color }) => {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const skillsCollectionRef = collection(db, "skill");

  const getSkills = async () => {
    try {
      setLoading(true);
      const data = await getDocs(skillsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const sortedSkills = [...filteredData].sort((a, b) => a.ID - b.ID);
      console.log("🚀 ~ getSkills ~ sortedSkills:", sortedSkills)
      setLoading(false);
      setSkills(sortedSkills);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-text">  
            <MoonLoader color={color} />
          </div>
        </div>
      )}

      {skills.map(({ title, percentage,ID }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <img style={{height:"50px",width:"50px"}}  src={skillIcons[ID]} alt="image"/>
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
