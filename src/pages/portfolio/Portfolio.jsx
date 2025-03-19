import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { photos } from "../../assets/data";
import { IoArrowBack } from "react-icons/io5";

const Portfolio = () => {
  const [projectId, setProjectId] = useState(0);
  const [portfolio, setPortfolio] = useState([
    { id: 5, name: "JCGN", photo: photos.jcgnWithLogo },
    { id: 6, name: "Delta Max", photo: photos.deltaMaxLogo },
    { id: 1, name: "ChatVista", photo: photos.ChatVistaWithLogo },
    { id: 2, name: "Oi-Jo", photo: photos.OiJo_withLogo },
    { id: 3, name: "Open Curtains", photo: photos.occWithLogo },
    { id: 4, name: "PMS", photo: photos.pmsWithLogo },
    { id: 7, name: "JCGN Admin Panel", photo: photos.jcgnAdminWithLogo },
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
                  <div className="pharagraphContainer">
                    Chat Vista is an innovative real-time video conferencing and
                    collaboration platform designed to provide users with a
                    seamless and efficient way to conduct online meetings.
                    Unlike traditional paid solutions, Chat Vista is completely
                    free, making it accessible to a wider audience. The platform
                    allows users to create and schedule meetings effortlessly
                    while supporting essential communication features such as
                    voice chat, video sharing, screen sharing, and instant
                    messaging. Additionally, it includes interactive elements
                    like emoji support to enhance user engagement. With its
                    intuitive interface and real-time capabilities, Chat Vista
                    enables teams and individuals to collaborate effectively in
                    a virtual environment.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    The development of Chat Vista involved a robust technology
                    stack to ensure high performance and scalability. The
                    frontend was built using React.js, providing a dynamic and
                    responsive user experience, while the backend was developed
                    with Node.js and Express.js to handle server-side operations
                    efficiently. The platform's database is powered by MySQL,
                    integrated with Sequelize ORM to manage data seamlessly. One
                    of the standout features of Chat Vista is its peer-to-peer
                    video streaming, implemented using WebRTC technology. This
                    allows direct video and screen-sharing connections between
                    users without the need for high server performance, making
                    it a cost-effective and efficient solution. To maintain
                    real-time communication and data synchronization, Socket.io
                    was used to facilitate instant message exchange and
                    connection management between users.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    My role in this project extended across all aspects of
                    development, from conceptualization to implementation. As
                    the creator of Chat Vista, I designed and built the
                    platform, ensuring that it met the functional and technical
                    requirements for smooth real-time communication. I
                    integrated WebRTC for efficient video streaming, reducing
                    server dependency while maintaining high-quality
                    performance. Additionally, I implemented Socket.io to handle
                    real-time messaging and connection sharing, ensuring a
                    lag-free experience for users. To enhance the platform’s
                    aesthetics and user experience, I incorporated animations
                    using Motion Dive, making interactions more engaging and
                    visually appealing.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Chat Vista stands out as a reliable and accessible
                    alternative to paid conferencing tools, offering a rich set
                    of features without compromising performance. By leveraging
                    modern web technologies, the platform delivers a smooth and
                    interactive experience, empowering users to communicate and
                    collaborate effortlessly in real-time.
                  </div>
                </div>{" "}
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, Node.Js, WebRTC, Socket.io, Bootstrap
                    <br />
                    Role: full-stack developer
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
                  <div className="pharagraphContainer">
                    Oi Jo is a car rental management application developed as
                    part of a client project during my internship. The client, a
                    business owner in the car rental industry, required a
                    digital solution to streamline and manage the various
                    aspects of their business operations. The system was
                    designed to accommodate four key user roles: administrators,
                    car owners, customers, and drivers. Each role has specific
                    functionalities to ensure smooth interactions and efficient
                    rental management, making Oi Jo a complete and user-friendly
                    platform for car rental services.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    As a frontend developer on this project, my primary focus
                    was on building and refining the user interface for car
                    owners. This involved designing intuitive and interactive
                    components that allow car owners to register their vehicles,
                    manage availability, track rental requests, and oversee
                    earnings. The team utilized React.js to develop the
                    frontend, ensuring a responsive and seamless user
                    experience. I worked closely with designers and backend
                    developers to integrate the necessary APIs, improve UI/UX,
                    and optimize the overall functionality of the car owner’s
                    dashboard.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    In addition to my frontend contributions, I was also
                    involved in backend development, specifically in
                    implementing the payment gateway for the platform. To enable
                    secure and reliable payment processing, I integrated Stripe,
                    allowing customers to make payments for their rentals and
                    ensuring car owners received their earnings efficiently.
                    This involved setting up secure payment flows, handling
                    transaction processing, and integrating Stripe’s API with
                    the backend system. By implementing this feature, I
                    contributed to making Oi Jo a fully functional and seamless
                    car rental platform with a smooth and secure payment
                    experience for users.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Through my work on both frontend and backend development, I
                    gained hands-on experience in React.js, API integration,
                    backend payment processing, and secure transactions with
                    Stripe. Oi Jo successfully provided a structured and
                    automated solution for the client's car rental business,
                    simplifying operations for all stakeholders involved.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, Stripe, Material Ul
                    <br />
                    Role: Frontend developer
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
                  <div className="pharagraphContainer">
                    Open Curtains is a dynamic online platform designed to
                    connect professionals in the entertainment industry,
                    including actors, directors, and crew members. It serves as
                    a bridge between talent and opportunities, simplifying the
                    casting process and fostering industry connections. With
                    Open Curtains, actors can showcase their skills and apply
                    for roles, directors can cast projects effortlessly and
                    manage auditions virtually, and crew members can network
                    with industry professionals while receiving job
                    notifications. The platform enhances professional
                    visibility, streamlines hiring, and facilitates
                    collaboration within the entertainment sector.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    As part of the development team, my primary contribution was
                    focused on building and refining the features for actors and
                    crew members. To ensure a seamless and engaging user
                    experience, our team utilized React.js for the frontend,
                    enabling a highly responsive and scalable platform.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Through my involvement in Open Curtains, I gained valuable
                    experience in frontend development, UI/UX optimization, and
                    API integration. My contributions helped enhance the overall
                    functionality and user experience of the platform, making it
                    a valuable tool for professionals in the entertainment
                    industry.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, Material UI
                    <br />
                    Role: Frontend developer
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
                  <div className="pharagraphContainer">
                    PMS is a Project Management System developed as part of my
                    second-year software project for Hasthiya IT, a software
                    company that provided the project requirements. The system
                    was designed to help companies efficiently manage their
                    projects and employees while providing essential project
                    tracking and collaboration tools. Key features of the system
                    include a company overview, which provides insights into
                    ongoing projects and employees, a Kanban board for
                    visualizing project progress, an integrated chat system for
                    team collaboration, a timeline view to track project
                    milestones, and a project settings section for managing
                    configurations and permissions.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    As the team leader, I was responsible for overseeing the
                    project, ensuring smooth communication between team members,
                    supervisors, and Hasthiya IT representatives. I managed the
                    development process, coordinated tasks among team members,
                    and ensured the successful completion of the project within
                    the given timeframe. Our team utilized a modern tech stack,
                    including React.js for the frontend, Node.js for the
                    backend, MongoDB for database management, and Material UI
                    (MUI) for styling. Additionally, we used AWS S3 (web bucket)
                    for file storage, allowing users to upload and manage task
                    attachments.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    My primary contributions to this project included the
                    development of the Kanban board and the project settings
                    module. The Kanban board, a crucial feature for visualizing
                    the current state of projects, was implemented using React
                    Redux for state management and React DND (Drag and Drop) to
                    enable smooth task movement between different project
                    stages. For project settings, I worked on configuring access
                    permissions, project preferences, and managing overall
                    system settings. Additionally, I integrated AWS S3 storage
                    to handle task attachments efficiently, ensuring that
                    project-related files could be securely stored and accessed.
                  </div>
                </div>{" "}
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    This project provided me with hands-on experience in
                    full-stack development, state management with Redux,
                    drag-and-drop implementations, cloud storage integration
                    with AWS, and team leadership. Through this experience, I
                    developed strong technical and project management skills,
                    successfully leading the team to deliver a fully functional
                    project management system tailored to the client's needs.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, React DnD, Node.js, mongoDB, Redux, AWS
                    S3 buckets
                    <br />
                    Role: full-stack developer
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
                  <div className="pharagraphContainer">
                    JCGN is a church community services application designed to
                    facilitate seamless engagement between church members and
                    their community. The platform provides various features,
                    including live-streaming of church meetings, secure payment
                    processing for subscriptions, product purchases, and
                    donations, ensuring a smooth digital experience for users.
                    By integrating modern technologies, JCGN enhances
                    accessibility and interaction within church communities.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    In this project, I contributed as both a frontend and
                    backend developer, focusing on two key functionalities:
                    live-streaming integration and secure payment gateway
                    implementation. To enable real-time church meetings, I
                    integrated Agora, a powerful live-streaming technology that
                    provides high-quality video and audio streaming. This
                    allowed church members to participate in services remotely
                    with minimal latency and smooth communication.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Additionally, I developed the payment gateway to handle
                    subscriptions, product purchases, and donations securely.
                    For this, I integrated Stripe, ensuring safe and reliable
                    transactions. This included setting up secure payment flows,
                    managing user subscriptions, and processing donations
                    efficiently. On the backend, I worked with Node.js, MySQL,
                    and Sequelize to manage transaction records and ensure a
                    seamless user experience.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Through my contributions to JCGN, I gained valuable
                    experience in live-streaming integration, secure payment
                    processing, full-stack development, and API implementation.
                    My work helped create a reliable and user-friendly platform
                    that enables churches to connect with their communities more
                    effectively.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, Agora, Stripe, Node, MySQL, Sequelize
                    <br />
                    Role: full-stack developer
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
                  <div className="pharagraphContainer">
                    Delta Max is a fitness challenge and reward platform
                    developed for a supplement supply client. The platform
                    encourages users to set and achieve their fitness goals by
                    competing with others in challenges. Participants who
                    successfully complete challenges earn rewards and gifts,
                    making fitness more engaging and motivating. This system not
                    only promotes a healthy lifestyle but also enhances customer
                    engagement for the supplement brand.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    In this project, my primary contribution was developing the
                    challenge feature, which is the core functionality of the
                    platform. I worked on implementing the logic that allows
                    users to create, join, and track fitness challenges,
                    ensuring a smooth and competitive experience. The backend
                    was developed using Node.js with MySQL and Sequelize,
                    enabling efficient data management and real-time tracking of
                    user progress.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Additionally, I integrated Firebase push notifications to
                    enhance user engagement. This feature keeps users informed
                    about challenge updates, new invitations, and reward
                    notifications, ensuring they stay active and motivated. By
                    leveraging these technologies, I helped create a seamless
                    experience that enables users to participate in fitness
                    challenges effortlessly.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Through my work on Delta Max, I gained hands-on experience
                    in backend development, database management, real-time
                    notifications, and API development. My contributions played
                    a crucial role in making the platform interactive, engaging,
                    and rewarding for fitness enthusiasts.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: Node.Js, MySQL, Sequeliz, Firebase push
                    notification, WooCommerce API
                    <br />
                    Role: Backend Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId == 7 && (
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
                JCGN <span>Admin Panel</span>
              </div>
              <div className="flex_Center">
                <div style={{ width: "70%" }} className=" ">
                  <img src={photos.jcgnAdmin} alt="" />
                </div>
              </div>
              <div className="project_description">
                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    The JCGN Admin Panel is the administrative interface for
                    managing the JCGN church community services platform. This
                    panel provides church administrators with full control over
                    the website’s content and operations, allowing them to
                    efficiently manage various aspects of the platform. Key
                    features include media management, enabling the upload and
                    organization of church-related content, event management,
                    which allows scheduling and handling of church activities,
                    and sermon management, facilitating the organization and
                    publication of sermons for community access.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    In this project, I contributed to developing and refining
                    key admin functionalities, ensuring a seamless and
                    user-friendly experience for administrators. Using React.js
                    and Material UI, I helped create an intuitive and responsive
                    user interface that enables easy navigation and management
                    of the platform’s content. The integration of Material UI
                    components enhanced the overall design and usability, making
                    the admin panel visually appealing and efficient to use.
                  </div>
                </div>

                <div className=" flex_Center">
                  <div className="pharagraphContainer">
                    Through my work on the JCGN Admin Panel, I gained hands-on
                    experience in frontend development, UI/UX design, and admin
                    panel optimization. My contributions ensured that church
                    administrators could effortlessly manage website operations,
                    enhancing the overall functionality and efficiency of the
                    JCGN platform.
                  </div>
                </div>
                <div className=" flex_Center">
                  <div
                    className="pharagraphContainer"
                    style={{ fontWeight: "600  " }}>
                    technologies: React, Material Ul, vite
                    <br />
                    Role: Frontend developer
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
