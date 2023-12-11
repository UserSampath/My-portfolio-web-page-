import React, { useState, useEffect } from "react";

import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, desc, technology, photo }) => {
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
      }, 1500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [modal, photo]);

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

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
              </h4>{" "}
              {desc}
            </span>
            <br />
            <span className="item__details" style={{ fontWeight: "bold" }}>
              <h4 style={{ fontWeight: "bold", display: "inline" }}>
                Technology:
              </h4>{" "}
              {technology}
            </span>

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
  );
};

export default PortfolioItem;
