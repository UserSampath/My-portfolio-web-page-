import React, { useEffect, useState } from "react";
import { FaTrash, FaPaperPlane, FaTimes } from "react-icons/fa";
import PhotosModal from "./PhotosModal";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const PortfolioModal = () => {
  const [clickedItemId, setClickedItemId] = useState("");
  const [id, setId] = useState("");
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [photo, setPhoto] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

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
      console.log(sortedPortfolio, "ssssss");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePortfolio = (portfolioItem) => {
    console.log(portfolioItem.id);
    getPortfolioData();
  };

  const updatePortfolio = async (portfolioItem) => {
    try {
      const portfolioDoc = doc(db, "portfolio", portfolioItem.id);
      await updateDoc(portfolioDoc, {
        ID: id,
        desc: desc,
        title: title,
      });

      closeClickedItem();
      getPortfolioData();
    } catch (error) {
      console.log(error);
    }
  };

  const addPhoto = async (id, photUrl, photo) => {
    try {
      if (photUrl != "") {
        const portfolioDoc = doc(db, "portfolio", id);

        const newPhoto = [...photo, photUrl];
        console.log(newPhoto);

        await updateDoc(portfolioDoc, {
          photo: newPhoto,
        });

        setShowPhotoModal(false);
        closeClickedItem();
        getPortfolioData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePhoto = async (ID, photUrl, photo) => {
    console.log(ID, photUrl, photo);

    try {

       const portfolioDoc = doc(db, "portfolio", ID);

const updatedPhoto = photo.filter((url) => url !== photUrl);
       console.log(updatedPhoto);
       await updateDoc(portfolioDoc, {
         photo: updatedPhoto,
       });

       setShowPhotoModal(false);
       closeClickedItem();
       getPortfolioData();
     
    } catch (error) {
      console.log(error);
    }
  };

  const clickedItem = (portfolioItem) => {
    // console.log(id);
    setClickedItemId(portfolioItem.ID);
    setId(portfolioItem.ID);
    setID(portfolioItem.id);
    setTitle(portfolioItem.title);
    setDesc(portfolioItem.desc);
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
          id={ID}
          setPhoto={setPhoto}
          addPhoto={addPhoto}
          deletePhoto={deletePhoto}
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
              <p>{portfolioItem.ID}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.title}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>{portfolioItem.desc}</p>
            </div>
            <FaTrash
              onClick={() => deletePortfolio(portfolioItem)}
              style={{ marginTop: "3px" }}
            />
          </div>

          {clickedItemId === portfolioItem.ID && (
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
                    onClick={() => updatePortfolio(portfolioItem)}
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
