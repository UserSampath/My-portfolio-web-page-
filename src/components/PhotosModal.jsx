import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const PhotosModal = ({ setShowPhotoModal, photo }) => {
  const [photUrl, setPhotoUrl] = useState("");

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "600px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
          maxHeight: "80%", // Set a maximum height for the modal
          overflowY: "auto", // Add a scrollbar for vertical overflow
        }}>
        <h3 style={{color:"black",textAlign:"center"}}>Photos</h3>
        {photo.map((p, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <div style={{ display: "flex" }}>
                  <FaTrash
                    style={{
                      color: "black",
                      marginRight: "10px",
                      width: "20px",
                    }}
                  />
                  <img src={p} alt="" style={{ width: "200px" }} />
                </div>
              </div>
            </div>
          );
        })}
        <br />
        <label htmlFor="id" style={{ color: "black" }}>
          New:
        </label>
        <input
          type="text"
          id="id"
          value={photUrl}
          style={{ color: "black" }}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <br /> <br />
        <div style={{ display: "flex" }}>
          <button
            style={{ color: "red" }}
            onClick={() => setShowPhotoModal(false)}>
            Close
          </button>
          <button
            style={{ color: "green", marginLeft: "20px" }}
            onClick={() => setShowPhotoModal(false)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotosModal;
