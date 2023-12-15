import React, { useState,useEffect } from "react";
import { FaTrash, FaPaperPlane,FaTimes } from "react-icons/fa";
// import { stats } from "../assets/data";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const StatsModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [no, setNo] = useState("");
  const [title, setTitle] = useState("");
  const[stats,setStats] = useState([])

  const statsCollectionRef = collection(db, "stats");
  const getStats = async () => {
    try {
      const data = await getDocs(statsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const sortedPersonalInfo = [...filteredData].sort((a, b) => a.ID - b.ID);

      setStats(sortedPersonalInfo);
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(() => {
      getStats();
    }, []);
  
  
   const updateStats = async (ID) => {
     try {
       const statsDoc = doc(db, "stats", ID);
       await updateDoc(statsDoc, {
         ID: id,
         no:no,
         title: title,
       });
       closeClickedItem();
      getStats();
     } catch (error) {
       console.log(error);
     }
   };



  const clickedItem = (stat) => {
    setClickedItemId(stat.ID);
    setId(stat.ID);
    setNo(stat.no);
    setTitle(stat.title);
  };

  const closeClickedItem = () => {
    setClickedItemId(1222222223);
  };

  return (
    <div
      style={{
        margin: "30px 10px 10px 10px",
        border: "2px solid #f31111",
        borderRadius: "10px",
      }}>
      <h3 style={{ textAlign: "center" }}>Stats</h3>
      <p>ID-No-Title</p>
      {stats.map((stat, index) => (
        <div key={index}>
          <div
            onClick={() => clickedItem(stat)}
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "5px 10px 5px 10px",
              background: "black",
              margin: "5px",
              borderRadius: "10px",
            }}>
            <div style={{ display: "flex" }}>
              <p>{stat.ID}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{stat.no}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{stat.title}</p>
            </div>
          </div>

          {clickedItemId === stat.ID && (
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
                  <label htmlFor="title">No:</label>
                  <input
                    type="text"
                    id="title"
                    value={no}
                    style={{ color: "white" }}
                    onChange={(e) => setNo(e.target.value)}
                  />
                  <br />
                  <label htmlFor="description">Title:</label>
                  <input
                    value={title}
                    type="text"
                    id="description"
                    style={{ color: "white" }}
                    onChange={(e) => setTitle(e.target.value)}
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
                    onClick={() => updateStats(stat.id)}
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

export default StatsModal;
