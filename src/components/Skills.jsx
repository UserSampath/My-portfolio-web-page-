import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState, CSSProperties } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { db } from "../config/firebase";
import { MoonLoader } from "react-spinners";


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
