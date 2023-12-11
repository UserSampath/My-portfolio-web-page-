import React, { useState } from "react";
import { FaTrash, FaPaperPlane,FaTimes } from "react-icons/fa";
import { skills } from "../assets/data";

const SkillsModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState("");

  const clickedItem = (skill) => {
    console.log(id);
    setClickedItemId(skill.id);
    setId(skill.id);
    setTitle(skill.title);
    setPercentage(skill.percentage);
  };

  const closeClickedItem = () => {
    console.log("Closing item");
    setClickedItemId("");
  };

  return (
    <div
      style={{
        margin: "30px 10px 10px 10px",
        border: "2px solid #f31111",
        borderRadius: "10px",
      }}>
      <h3 style={{ textAlign: "center" }}>Skills</h3>
      <p>ID-Title-Percentage</p>
      {skills.map((skill, index) => (
        <div key={index}>
          <div
            onClick={() => clickedItem(skill)}
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "5px 10px 5px 10px",
              background: "black",
              margin: "5px",
              borderRadius: "10px",
            }}>
            <div style={{ display: "flex" }}>
              <p>{skill.id}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{skill.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{skill.percentage}</p>
            </div>
            <FaTrash style={{ marginTop: "3px" }} />
          </div>

          {clickedItemId === skill.id && (
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
                  <label htmlFor="description">Percentage:</label>
                  <input
                    value={percentage}
                    type="text"
                    id="description"
                    style={{ color: "white" }}
                    onChange={(e) => setPercentage(e.target.value)}
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

export default SkillsModal;
