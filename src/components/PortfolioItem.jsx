import React, { useState, useEffect } from "react";



import Work1 from "../assets/app.png";
import Work2 from "../assets/web.png";
import Work3 from "../assets/ui.png";


const PortfolioItem = ({ img, title, desc, photo }) => {
  const [modal, setModal] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let intervalId;

    if (modal) {
      intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photo.length);
      }, 1350);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [modal, photo]);


  const getImage = () => {

    switch (img) {
      case "Work1":
        return Work1;
      case "Work2":
        return Work2;
      default:
        return Work3;
    }
  }

  return (
    <div className="portfolio__item__container">
      <div className="portfolio__item">
        <img src={getImage()} alt="" className="portfolio__img" />

        <div className="portfolio__hover" onClick={toggleModal}>
          <h3 className="portfolio__title">{title}</h3>
        </div>

        {modal && (
          <div className="portfolio__modal">
            <div className="portfolio__modal-content">
              <img
                src={Close}
                alt=""
                className="modal__close"
                onClick={toggleModal}
              />
              <h3 className="modal__title">{title}</h3>
              <span className="item__details" style={{ fontWeight: "bold" }}>
                <h4 style={{ fontWeight: "bold", display: "inline" }}>
                  Description:
                </h4>
                {desc}
              </span>
              <br />
              <br />

              <ul className="modal__list ">
                <li className="modal__item">
                  <div>
                    <img
                      src={photo[currentPhotoIndex]}
                      alt=""
                      className="modal__img"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
