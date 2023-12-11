import React, { useState } from "react";
import { FaTrash, FaPaperPlane,FaTimes } from "react-icons/fa";
import { personalInfo } from "../assets/data";

const PersonalInfoModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const clickedItem = (personalInfoItem) => {
    console.log(id);
    setClickedItemId(personalInfoItem.id);
    setId(personalInfoItem.id);
    setTitle(personalInfoItem.title);
    setDescription(personalInfoItem.description);

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
      {personalInfo.map((personalInfoItem, index) => (
        <div key={index}>
          <div
            onClick={() => clickedItem(personalInfoItem)}
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "5px 10px 5px 10px",
              background: "black",
              margin: "5px",
              borderRadius: "10px",
            }}>
            <div style={{ display: "flex" }}>
              <p>{personalInfoItem.id}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{personalInfoItem.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{personalInfoItem.description}</p>
            </div>
            <FaTrash style={{ marginTop: "3px" }} />
          </div>

          {clickedItemId === personalInfoItem.id && (
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
                    value={description}
                    type="text"
                    id="description"
                    style={{ color: "white" }}
                    onChange={(e) => setDescription(e.target.value)}
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
                    onClick={() => console.log(personalInfoItem)}
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

export default PersonalInfoModal;
