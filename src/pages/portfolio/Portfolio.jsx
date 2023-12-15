import React, { useEffect, useState } from "react";
import "./portfolio.css"
import PortfolioItem from "../../components/PortfolioItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";



const Portfolio = () => {

  const [portfolio,setPortfolio] =useState([])

 const portfolioCollectionRef = collection(db, "portfolio");
 useEffect(() => {
   getPortfolioData();
 }, []);

 const getPortfolioData = async () => {
   try {
     const data = await getDocs(portfolioCollectionRef);
     const filteredData = data.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     const sortedPortfolio = [...filteredData].sort((a, b) => a.ID - b.ID);

     setPortfolio(sortedPortfolio);
   } catch (error) {
     console.log(error);
   }
 };

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className=" container ">
        <div style={{ display: "flex" }}>
          {" "}
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
