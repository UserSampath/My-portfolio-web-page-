import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Stats = () => {

 const [stats, setStats] = useState([]);
 useEffect(() => {
   getStats();
 }, []);
 const statsCollectionRef = collection(db, "stats");
 const getStats = async () => {
   try {
     const data = await getDocs(statsCollectionRef);
     const filteredData = data.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     const sortedStats = [...filteredData].sort((a, b) => a.ID - b.ID);

     setStats(sortedStats);
   } catch (error) {
     console.log(error);
   }
 };

  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
