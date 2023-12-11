import React, { useState } from "react";
import { FaTrash, FaPaperPlane,FaTimes } from "react-icons/fa";
import { resume } from "../assets/data";

const ResumeModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [category,setCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const clickedItem = (resumeItem) => {
    console.log(id);
    setClickedItemId(resumeItem.id);
    setId(resumeItem.id);
    setCategory(resumeItem.category);
    setIcon(resumeItem.icon);
    setYear(resumeItem.year);
    setTitle(resumeItem.title);
    setDesc(resumeItem.desc);

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
      <h3 style={{ textAlign: "center" }}>Resume Info</h3>
      <p>ID-Category-Icon-Year-Title-Desc</p>
      {resume.map((resumeItem, index) => (
        <div key={index}>
          <div
            onClick={() => clickedItem(resumeItem)}
            style={{
              padding: "5px 10px 5px 10px",
              background: "black",
              margin: "5px",
              borderRadius: "10px",
              display: "flex",
              position: "relative",
            }}>
            <div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.id}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.category}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.icon}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.year}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.title}</p>
              </div>
              <div style={{ display: "flex" }}>
                <p>{resumeItem.desc}</p>
              </div>
            </div>
            <FaTrash
              style={{
                right: "3px",
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            />
          </div>

          {clickedItemId === resumeItem.id && (
            <div style={{ background: "#343434", padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label htmlFor="id">Id:</label>
                  <input
                    type="text"
                    id="id"
                    value={id}
                    style={{ color: "white" }}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <br />
                  <label htmlFor="id">Category:</label>
                  <input
                    type="text"
                    id="id"
                    value={category}
                    style={{ color: "white" }}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <br /> <label htmlFor="id">Icon:</label>
                  <input
                    type="text"
                    id="id"
                    value={icon}
                    style={{ color: "white" }}
                    onChange={(e) => setIcon(e.target.value)}
                  />
                  <br /> <label htmlFor="id">Year:</label>
                  <input
                    type="text"
                    id="id"
                    value={year}
                    style={{ color: "white" }}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <br /> <label htmlFor="id">Title:</label>
                  <input
                    type="text"
                    id="id"
                    value={title}
                    style={{ color: "white" }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br /> <label htmlFor="id">Desc:</label>
                  <input
                    type="text"
                    id="id"
                    value={desc}
                    style={{ color: "white" }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <br />
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

export default ResumeModal;
