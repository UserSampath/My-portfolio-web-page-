import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { db } from "../config/firebase";

const Skills = () => {


const [skills, setSkills] = useState([]);
useEffect(() => {
  getSkills();
}, []);
const skillsCollectionRef = collection(db, "skill");
const getSkills = async () => {
  try {
    const data = await getDocs(skillsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const sortedSkills = [...filteredData].sort((a, b) => a.ID - b.ID);

    setSkills(sortedSkills);
    console.log(sortedSkills, "ssssss");
  } catch (error) {
    console.log(error);
  }
};





  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
