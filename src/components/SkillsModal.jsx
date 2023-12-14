import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaTrash, FaPaperPlane,FaTimes } from "react-icons/fa";
import { db } from "../config/firebase";
// import { skills } from "../assets/data";

const SkillsModal = () => {

  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState("");
  const [clickedAddNewSkill, setClickedAddNewSkill] = useState(false);
  const [skills, setSkills] = useState([]);

 const skillCollectionRef = collection(db, "skill");
 useEffect(() => {
   getSkillData();
 }, []);

 const getSkillData = async () => {
   try {
     const data = await getDocs(skillCollectionRef);
     const filteredData = data.docs.map((doc) => ({
       ...doc.data(),
       id: doc.id,
     }));
     const sortedSkill = [...filteredData].sort((a, b) => a.ID - b.ID);

     setSkills(sortedSkill);
     console.log(sortedSkill, "ssssss");
   } catch (error) {
     console.log(error);
   }
 }; 

const updateSkill = async (ID) => {
  try {
    console.log(id);

    const skillDoc = doc(db, "skill", ID);

      await updateDoc(skillDoc, {
        ID: id,
        title: title,
        percentage: percentage
      });
      closeClickedItem();
      getSkillData();
  } catch (error) {
    console.log(error);
  }
};

  const deleteSkill = async (ID) => { 
    try {
    const skillDoc = doc(db, "skill", ID);
      deleteDoc(skillDoc);
        closeClickedItem();
        getSkillData();
    } catch (error) {
      console.log(error);
    }
  }

  const createNewSkill = async () => { 
try {
  await addDoc(skillCollectionRef, { ID: id, percentage: percentage, title: title });
    setClickedAddNewSkill(false);
   getSkillData();
} catch (error) {
  console.log(error);
}
  }

  useEffect(() => {
    setId("");
    setTitle("");
    setPercentage("");
  }, [clickedAddNewSkill]);

  const clickedItem = (skill) => {
    console.log(id);
    setClickedItemId(skill.ID);
    setId(skill.ID);
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
              <p>{skill.ID}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{skill.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{skill.percentage}</p>
            </div>
            <FaTrash
              onClick={() => deleteSkill(skill.id)}
              style={{ marginTop: "3px" }}
            />
          </div>

          {clickedItemId === skill.ID && (
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
                    onClick={() => updateSkill(skill.id)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div>
        <button
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            margin: "10px",
          }}
          onClick={() => setClickedAddNewSkill(!clickedAddNewSkill)}>
          <h3 style={{ padding: "5px" }}>Add new</h3>
        </button>

        {clickedAddNewSkill && (
          <>
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
                  <div onClick={() => setClickedAddNewSkill(false)}>
                    <FaTimes
                      style={{ marginTop: "5px", marginRight: "20px" }}
                    />
                  </div>
                  <FaPaperPlane
                    style={{ marginTop: "5px", marginRight: "5px" }}
                    onClick={() => createNewSkill()}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillsModal;
