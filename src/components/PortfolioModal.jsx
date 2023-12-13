import React, { useState } from "react";
import { FaTrash, FaPaperPlane, FaTimes } from "react-icons/fa";
import { portfolio } from "../assets/data";
import PhotosModal from "./PhotosModal";

const PortfolioModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [technology, setTechnology] = useState("");
  const [photo, setPhoto] = useState([]);
  const [showPhotoModal,setShowPhotoModal] = useState(false)

  const clickedItem = (portfolioItem) => {
    // console.log(id);
    setClickedItemId(portfolioItem.id);
    setId(portfolioItem.id);
    setTitle(portfolioItem.title);
    setDesc(portfolioItem.desc);
    setTechnology(portfolioItem.technology);
    setPhoto(portfolioItem.photo);
    console.log(portfolioItem.photo);
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
      {showPhotoModal && (
        <PhotosModal
          setShowPhotoModal={setShowPhotoModal}
          photo={photo}
          setPhoto={setPhoto}
        />
      )}
      <h3 style={{ textAlign: "center" }}>Portfolio Info</h3>
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
                  <br />
                  <button
                    style={{
                      border: "1px solid gray",
                      borderRadius: "10px",
                      margin: "10px 0 0 0",
                      padding: "5px",
                    }}
                    onClick={() => setShowPhotoModal(!showPhotoModal)}>
                    <h3>Photos</h3>
                  </button>
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
