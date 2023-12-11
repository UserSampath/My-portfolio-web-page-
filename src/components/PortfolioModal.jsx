import React, { useState } from "react";
import { FaTrash, FaPaperPlane, FaTimes } from "react-icons/fa";
import { portfolio } from "../assets/data";

const PortfolioModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [technology, setTechnology] = useState("");
  const [photo, setPhoto] = useState([]);

  const clickedItem = (portfolioItem) => {
    console.log(id);
    setClickedItemId(portfolioItem.id);
    setId(portfolioItem.id);
    setTitle(portfolioItem.title);
    setDescription(portfolioItem.desc);
    setTechnology(portfolioItem.technology);
  };

  const closeClickedItem = () => {
    console.log("Closing item");
    setClickedItemId(123);
  };

  return (
    <div
      style={{
        margin: "30px 10px 10px 10px",
        border: "2px solid #f31111",
        borderRadius: "10px",
      }}>
      <h3 style={{ textAlign: "center" }}>Persona Info</h3>
      <p>ID-Title-Name</p>
      {portfolio.map((portfolioItem, index) => (
        <div key={index}>
          <div
            onClick={() => clickedItem(portfolioItem)}
            style={{
              justifyContent: "space-between",
              // display: "flex",
              padding: "5px 10px 5px 10px",
              background: "black",
              margin: "5px",
              borderRadius: "10px",
            }}>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.id}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.desc}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.technology}</p>
            </div>
            <FaTrash style={{ marginTop: "3px" }} />
          </div>

          {clickedItemId === portfolioItem.id && (
            <div style={{ background: "#343434", padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label htmlFor="id">ID:</label>
                  <input
                    type="text"
                    id="id"
                    value={id}
                    style={{ color: "white" }}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <br />
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    style={{ color: "white" }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <label htmlFor="description">Description:</label>
                  <input
                    value={desc}
                    type="text"
                    id="description"
                    style={{ color: "white" }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <br />
                  <label htmlFor="description">Technology:</label>
                  <input
                    value={technology}
                    type="text"
                    id="description"
                    style={{ color: "white" }}
                    onChange={(e) => setTechnology(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div onClick={closeClickedItem}>
                    <FaTimes
                      style={{ marginTop: "5px", marginRight: "20px" }}
                    />
                  </div>
                  <FaPaperPlane
                    style={{ marginTop: "5px", marginRight: "5px" }}
                    onClick={() => console.log(portfolioItem)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioModal;
