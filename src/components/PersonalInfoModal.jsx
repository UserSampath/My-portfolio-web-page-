import React, { useState } from "react";
import { FaTrash, FaPaperPlane, FaTimes } from "react-icons/fa";
// import { personalInfo } from "../assets/data";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

const PersonalInfoModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [personalInfo, setPersonalInfo] = useState([]);

  const personalDataCollectionRef = collection(db, "personalData");
  useEffect(() => {
    getPersonalData();
  }, []);

  const getPersonalData = async () => {
    try {
      const data = await getDocs(personalDataCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const sortedPersonalInfo = [...filteredData].sort((a, b) => a.ID - b.ID);

      setPersonalInfo(sortedPersonalInfo);
      console.log(sortedPersonalInfo,"ssssss");
    } catch (error) {
      console.log(error);
    }
  };

  const updatePersonalData = async (ID) => {
    try {
      const personalInfoDoc = doc(db, "personalData", ID);
      await updateDoc(personalInfoDoc, {
        ID: id,
        description: description,
        title: title,
      });
      closeClickedItem();
      getPersonalData();
    } catch (error) {
      console.log(error);
    }
  };

  const clickedItem = (personalInfoItem) => {
    setClickedItemId(personalInfoItem.ID);
    setId(personalInfoItem.ID);
    console.log(personalInfoItem.ID);
    setTitle(personalInfoItem.title);
    setDescription(personalInfoItem.description);
  };

  const closeClickedItem = () => {
    console.log("Closing item");
    setClickedItemId(112412414141413);
  };

  return (
    <div
      style={{
        margin: "50px 10px 10px 10px",
        border: "2px solid #f31111",
        borderRadius: "10px",
      }}>
      <h3 style={{ textAlign: "center" }}>Personal Info</h3>
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
              <p>{personalInfoItem.ID}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{personalInfoItem.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{personalInfoItem.description}</p>
            </div>
          </div>

          {clickedItemId === personalInfoItem.ID && (
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
                    onClick={() => updatePersonalData(personalInfoItem.id)}
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
