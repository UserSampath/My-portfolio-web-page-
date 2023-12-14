import React, { useEffect,useState } from "react";
import { personalInfo } from "../assets/data";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";




const Info = () => {
  const [personalInfo, setPersonalInfo] = useState([]);
    useEffect(() => {
      getPersonalData();
    }, []);
  const personalDataCollectionRef = collection(db, "personalData");
    const getPersonalData = async () => {
      try {
        const data = await getDocs(personalDataCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const sortedPersonalInfo = [...filteredData].sort(
          (a, b) => a.ID - b.ID
        );

        setPersonalInfo(sortedPersonalInfo);
        console.log(sortedPersonalInfo, "ssssss");
      } catch (error) {
        console.log(error);
      }
    };
  return (
      <>
      {personalInfo.map(({ title, description }, index) => {
          {
              return(<li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
           
          </li>)
          
        }
      })}
    </>
  );
};

export default Info;
