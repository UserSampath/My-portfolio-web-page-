import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { photos } from "../../assets/data";
import { IoArrowBack } from "react-icons/io5";

const Portfolio = () => {
  const [projectId, setProjectId] = useState(0);
  const [portfolio, setPortfolio] = useState([
    { id: 1, name: "ChatVista", photo: photos.ChatVistaWithLogo },
    { id: 2, name: "Oi-Jo", photo: photos.OiJo_withLogo },
    { id: 3, name: "Open Curtains", photo: photos.occWithLogo },
    { id: 4, name: "PMS", photo: photos.pmsWithLogo },
    { id: 5, name: "JCGN", photo: photos.jcgnWithLogo },
    { id: 6, name: "Delta Max", photo: photos.deltaMaxLogo },
  ]);

  return (
    <section className="portfolio section">
      {projectId == 0 && (
        <h2 className="section__title">
          My <span>Portfolio</span>
        </h2>
      )}
      <div className=" container ">
        {projectId == 0 && (
          <div className="flex_Center">
            <div className="portfolio_grid">
              {portfolio.map((item) => {
                return (
                  <div
                    className="portfolio_grid_item"
                    onClick={() => setProjectId(item.id)}>
                    <img
                      className="portfolio_grid_img"
                      src={item.photo}
                      style={{ height: "100%", width: "100%" }}
                      alt=""
                    />
                    <div className="portfolio_item_title">{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {projectId == 1 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                Chat <span>Vista</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.ChatVista} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 2 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                Oi <span>Jo</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.OiJo} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 3 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                Open <span>Curtains</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.occ} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 4 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                <span>PMS</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.pms} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 5 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                <span>JCGN</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.jcgn} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 6 && (
          <div className=" flex_Center ">
            <div>
              <div
                className="project__title"
                style={{ position: "relative", paddingInline: "15%" }}>
                <div
                  onClick={() => setProjectId(0)}
                  style={{ position: "absolute", marginTop: "5px" }}
                  className="project_back_button">
                  <IoArrowBack />
                </div>
                Delta <span>Max</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.deltaMax} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div
                    style={{
                      width: "70%",
                      textAlign: "justify",
                      // margin: "20px",
                      marginTop: "10px",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore deserunt quas, magnam quidem maxime expedita officiis
                    suscipit odit fuga qui consequuntur sapiente pariatur veniam
                    nobis quam facilis cum, dolores doloribus, explicabo et!
                    Velit natus, blanditiis similique illo nobis mollitia
                    sapiente ullam aliquam accusantium esse ipsam, facilis
                    cupiditate tenetur quisquam ipsa labore at, rem corrupti.
                    Alias est, ad sint autem cum vero vel repellat, architecto,
                    cupiditate vitae voluptates minus veritatis illum? Vero,
                    sit! Minima maxime modi perferendis a labore itaque magni,
                    id suscipit maiores accusantium dignissimos aperiam repellat
                    ex reiciendis fugiat similique quaerat reprehenderit! Ipsam
                    expedita atque numquam porro voluptate aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
