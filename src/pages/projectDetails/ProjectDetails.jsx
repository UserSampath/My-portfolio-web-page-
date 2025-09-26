import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { photos } from "../../assets/data";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { projectName } = useParams();

  const [portfolio, setPortfolio] = useState([
    {
      name: "ChatVista",
      desc: `
    <div>
      ChatVista is an innovative real-time video conferencing and collaboration platform designed to deliver a seamless and efficient online meeting experience. Unlike traditional paid solutions, ChatVista is completely free, making it accessible to a wider audience. The platform enables users to create and schedule meetings effortlessly while supporting essential communication features such as voice chat, video conferencing, screen sharing, and instant messaging. It also includes interactive elements like emoji reactions to boost user engagement. With its intuitive interface and real-time capabilities, ChatVista helps teams and individuals collaborate effectively in a virtual environment.
    </div>
    <div>
      My role in this project covered the entire development lifecycle, from conceptualization to deployment. As the creator of ChatVista, I designed and built the platform to ensure it met both functional and technical requirements for smooth real-time communication. I integrated WebRTC for efficient video streaming, reducing server dependency while maintaining high-quality performance. Additionally, I implemented Socket.io to handle real-time messaging and connection sharing, ensuring a lag-free experience for users. To enhance aesthetics and usability, I incorporated animations using Motion Dive, making interactions visually appealing and engaging.
    </div>
    <div>
      ChatVista stands out as a reliable and accessible alternative to paid conferencing tools, offering a comprehensive set of features without compromising performance. By leveraging modern web technologies, the platform delivers a smooth, interactive, and user-friendly experience that empowers individuals and teams to communicate and collaborate effortlessly in real time.
    </div>
  `,
      technologies: "React, Node.js, WebRTC, Socket.io, Bootstrap",
      role: "Full-Stack Developer",
      photo: photos.ChatVista,
    },
    {
      name: "Oi-Jo",
      desc: `
    <div>
      Oi-Jo is a comprehensive car rental management application developed as part of a client project during my internship. The client, a business owner in the car rental industry, required a digital solution to streamline and manage day-to-day operations. The platform was designed to support four key user roles—administrators, car owners, customers, and drivers—each with dedicated functionalities to ensure smooth operations and efficient rental management. This made Oi-Jo a complete and user-friendly platform tailored for car rental services.
    </div>
    <div>
      As a Frontend Developer on this project, my primary responsibility was to design and refine the user interface for car owners. I focused on creating intuitive and interactive components that allowed car owners to register vehicles, manage availability, track rental requests, and monitor earnings. Using React.js, I developed a responsive and seamless UI, collaborating closely with designers and backend developers to integrate APIs, enhance the UI/UX, and optimize the functionality of the car owners’ dashboard.
    </div>
    <div>
      Beyond my frontend role, I also contributed to backend development by implementing the payment gateway. To ensure secure and reliable transactions, I integrated Stripe into the system, enabling customers to make payments for rentals while ensuring car owners received earnings efficiently. This included setting up secure payment flows, handling transaction processing, and integrating Stripe’s API with the backend. My work on this feature enhanced the platform’s credibility and usability by delivering a smooth and secure payment experience.
    </div>
    <div>
      Through my contributions across both frontend and backend development, I gained practical experience in React.js, API integration, payment processing, and secure transaction handling with Stripe. Oi-Jo successfully provided the client with a structured, automated, and scalable solution for managing their car rental business, improving efficiency for all stakeholders involved.
    </div>
  `,
      technologies: "React.js, Stripe, Material UI",
      role: "Frontend Developer",
      photo: photos.OiJo,
    },
    {
      name: "Open Curtains",
      desc: `
    <div>
      Open Curtains is a dynamic online platform designed to connect professionals in the entertainment industry, including actors, directors, and crew members. It acts as a bridge between talent and opportunities, simplifying the casting process and fostering stronger industry connections. Through the platform, actors can showcase their portfolios and apply for roles, directors can manage casting and auditions virtually, and crew members can network with professionals while receiving job notifications. Overall, Open Curtains enhances professional visibility, streamlines hiring, and enables collaboration within the entertainment sector.
    </div>
    <div>
      As a member of the development team, my primary contribution was focused on building and refining features for actors and crew members. To ensure a seamless and engaging user experience, we utilized React.js for the frontend, creating a responsive, scalable, and user-friendly interface that catered to the unique needs of entertainment professionals.
    </div>
    <div>
      Through my involvement in Open Curtains, I gained valuable experience in frontend development, UI/UX optimization, and API integration. My contributions significantly improved the overall functionality and user experience, making Open Curtains a reliable and impactful tool for professionals in the entertainment industry.
    </div>
  `,
      technologies: "React.js, Material UI",
      role: "Frontend Developer",
      photo: photos.occ,
    },
    {
      name: "PMS",
      desc: `
    <div>
      PMS is a Project Management System developed as part of my second-year software project for Hasthiya IT, a software company that provided the project requirements. The system was designed to help companies efficiently manage projects and employees while offering essential project tracking and collaboration tools. Key features include a company overview for insights into ongoing projects and employees, a Kanban board for visualizing project progress, an integrated chat system for team collaboration, a timeline view to track project milestones, and a project settings section for managing configurations and permissions.
    </div>
    <div>
      As the team leader, I was responsible for overseeing the project and ensuring smooth communication between team members, supervisors, and Hasthiya IT representatives. I managed the development process, coordinated tasks among team members, and ensured the successful completion of the project within the given timeframe. Our team used a modern tech stack, including React.js for the frontend, Node.js for the backend, MongoDB for database management, and Material UI (MUI) for styling. Additionally, we integrated AWS S3 (web bucket) for file storage, allowing users to upload and manage task attachments securely.
    </div>
    <div>
      My primary contributions included developing the Kanban board and the project settings module. The Kanban board, a key feature for visualizing project workflows, was implemented using React Redux for state management and React DND (Drag and Drop) to enable smooth task movement across different stages. For the project settings module, I worked on configuring access permissions, project preferences, and system settings. I also integrated AWS S3 to handle file attachments efficiently, ensuring that project-related documents could be stored and retrieved securely.
    </div>
    <div>
      This project provided me with valuable hands-on experience in full-stack development, state management with Redux, drag-and-drop implementations, cloud storage integration with AWS, and team leadership. Through this experience, I enhanced both my technical expertise and project management skills, successfully leading the team to deliver a fully functional project management system tailored to the client’s needs.
    </div>
  `,
      technologies: "React.js, React DnD, Node.js, MongoDB, Redux, AWS S3",
      role: "Full-Stack Developer & Team Leader",
      photo: photos.pms,
    },
    {
      name: "JCGN",
      desc: `
    <div>
      JCGN is a church community services application designed to facilitate seamless engagement between church members and their community. The platform offers a range of features, including live streaming of church services, secure payment processing for subscriptions, product purchases, and donations, ensuring a smooth digital experience. By integrating modern technologies, JCGN enhances accessibility and interaction within church communities.
    </div>
    <div>
      In this project, I contributed as both a frontend and backend developer, with a focus on two core functionalities: live-streaming integration and secure payment gateway implementation. To enable real-time church services, I integrated Agora, a robust live-streaming technology that delivers high-quality video and audio with minimal latency. This allowed church members to participate in services remotely while maintaining smooth and interactive communication.
    </div>
    <div>
      Additionally, I developed the payment gateway to manage subscriptions, product purchases, and donations securely. For this, I integrated Stripe, ensuring safe and reliable transactions. My work included setting up secure payment flows, managing recurring subscriptions, and processing donations efficiently. On the backend, I used Node.js, MySQL, and Sequelize to handle transaction records and maintain a seamless user experience.
    </div>
    <div>
      Through my contributions to JCGN, I gained valuable experience in live-streaming integration, secure payment processing, full-stack development, and API implementation. My work helped build a reliable and user-friendly platform that empowers churches to strengthen their connection with their communities in the digital era.
    </div>
  `,
      technologies: "React, Agora, Stripe, Node.js, MySQL, Sequelize",
      role: "Full-Stack Developer",
      photo: photos.jcgn,
    },
    {
      name: "Delta Max",
      desc: `
    <div>
      Delta Max is a fitness challenge and reward platform developed for a supplement supply client. The platform motivates users to achieve their fitness goals by participating in challenges and competing with others. Participants who successfully complete challenges earn rewards and gifts, making fitness both engaging and rewarding. This system not only promotes a healthier lifestyle but also strengthens customer engagement for the supplement brand.
    </div>
    <div>
      My primary contribution to this project was developing the challenge feature, which serves as the platform’s core functionality. I implemented the logic that allows users to create, join, and track fitness challenges, ensuring a smooth and competitive user experience. The backend was built using Node.js with MySQL and Sequelize, providing efficient data management and real-time progress tracking.
    </div>
    <div>
      Additionally, I integrated Firebase push notifications to boost user engagement. This feature keeps participants informed about challenge updates, invitations, and rewards, ensuring they remain active and motivated. By combining these technologies, I helped deliver a seamless platform where users can participate in fitness challenges effortlessly.
    </div>
    <div>
      Through my work on Delta Max, I gained valuable hands-on experience in backend development, database management, API integration, and real-time notifications. My contributions played a key role in making the platform interactive, engaging, and rewarding for fitness enthusiasts.
    </div>
  `,
      technologies:
        "Node.js, MySQL, Sequelize, Firebase Push Notifications, WooCommerce API",
      role: "Backend Developer",
      photo: photos.deltaMax,
    },
    {
      name: "JCGN Admin Panel",
      desc: `<div>The JCGN Admin Panel is the administrative interface designed to manage the JCGN church community services platform. It empowers church administrators with full control over website content and operations, enabling them to efficiently manage multiple aspects of the platform. Key features include media management for uploading and organizing church-related content, event management for scheduling and handling church activities, and sermon management to organize and publish sermons for the community.</div>
  <div>In this project, I contributed to the development and enhancement of core admin functionalities, ensuring a smooth and user-friendly experience for administrators. Using React.js with Material UI, I helped build an intuitive, responsive interface that simplified content management and navigation. The integration of Material UI components not only improved usability but also added a clean, professional design to the panel.</div>
  <div>Through this project, I gained hands-on experience in frontend development, UI/UX design, and admin panel optimization. My contributions made it easier for church administrators to manage operations effectively, improving the overall functionality and efficiency of the JCGN platform.</div>`,
      technologies: "React, Material UI, Vite",
      role: "Frontend Developer",
      photo: photos.jcgnAdmin,
    },
    {
  name: "Portfolio",
  desc: `<div>This portfolio website was designed and developed to showcase my skills, education, and the projects I have built. The platform highlights my technical expertise while providing visitors with a clear overview of my professional background and practical experience.</div>
  <div>The website features a clean and modern user interface, making it easy to navigate through different sections such as skills, education, and projects. Special emphasis is placed on my project work, where I present detailed descriptions of real-world applications I have developed, along with the technologies used and my specific contributions.</div>
  <div>In this project, I implemented serverless functions with Firebase Cloud Functions and deployed the site using Firebase Hosting, ensuring fast and reliable performance. The use of React enabled me to create a dynamic, responsive, and component-based structure, resulting in a smooth user experience across devices.</div>
  <div>Through building this portfolio, I gained practical experience in frontend development, serverless architecture, and deployment workflows, while also creating a platform that effectively communicates my skills and professional journey.</div>`,
  technologies: "React, Firebase Cloud Functions, Firebase Hosting",
  role: "Full Stack Developer",
  photo: photos.Portfolio,
},
{
  name: "EasyRoom",
  desc: `<div>EasyRoom is a room automation system developed as an experimental project to combine software and hardware for smart environment control. The platform allows users to manage devices either manually or automatically, depending on the type of switch configured.</div>
  <div>The system supports different types of smart switches. For example, temperature- and humidity-sensitive devices such as fans or air conditioners are controlled using data from DHT11 temperature and humidity sensors. Similarly, light-sensitive devices such as lamps are managed through an LDR sensor, enabling automated responses to ambient light conditions. Users also have the option to manually switch devices on or off, offering flexibility in operation.</div>
  <div>The backend was built with Firebase Realtime Database and Cloud Functions to handle device states and real-time updates. On the hardware side, ESP12E microcontrollers programmed via Arduino IDE served as the bridge between sensors and cloud services. The frontend, developed using Next.js, provided an intuitive interface for monitoring and controlling connected devices.</div>
  <div>Through developing EasyRoom, I gained hands-on experience in IoT development, real-time databases, cloud integration, and hardware-software communication. This project allowed me to explore how modern technologies can be combined to create a responsive, automated, and user-friendly smart room system.</div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/5dZx3scqEQU?si=SibzA9XO6fPyZCF9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `,
  technologies: "Next.js, Firebase Realtime Database, Firebase Cloud Functions, ESP12E, Arduino IDE, DHT11, LDR",
  role: "Full Stack & IoT Developer",
  photo: photos.EasyRoom,
},
{
  name: "LuminaButton",
  desc: `<div>LuminaButton is a custom NPM package I developed as both a personal project and a reusable UI component library for my own applications. The goal of the project was to experiment with creating, publishing, and consuming an NPM package while designing a versatile and stylish button system.</div>
  <div>The package provides a wide range of customization options, making it easy to integrate buttons into different projects. It includes multiple built-in variants such as primary, secondary, success, warning, danger, info, light, dark, link, and ghost. To enhance visual appeal, it supports over 15 gradient background combinations, subtle glow effects, and various hover transitions like fill, scale, shadow, glow, wave, and fade. Animations such as pulse, wave, and bounce are also included for interactive user experiences.</div>
  <div>LuminaButton also focuses on flexibility and responsiveness. Developers can choose from multiple sizes (small, medium, large), outline modes, and six levels of corner rounding (from sharp edges to full circle). Additional features include built-in loading states, left/right icon support, and a full-width option for responsive layouts. To maximize customization, the package allows overriding default colors and background styles with custom values.</div>
  <div>Through building LuminaButton, I gained experience in creating reusable UI components, configuring Webpack for package bundling, and working with TypeScript in a production-style setup. It was both a fun and practical project that enhanced my understanding of NPM package development and UI/UX design patterns.</div>`,
  technologies: "Next.js, TypeScript, Webpack",
  role: "Frontend Developer",
  photo: photos.LuminaButton,
},
{
  name: "PocketGuard",
  desc: `<div>PocketGuard is a personal finance management system developed primarily using Next.js and Nest.js. The project was designed to help users efficiently track, organize, and analyze their incomes and expenses, providing a clear overview of their financial situation.</div>
  <div>The platform offers intuitive dashboards and visualizations to give users meaningful insights into their spending habits. Users can categorize income and expense sources, view summaries, and monitor trends over time. Additionally, the system includes an export feature, allowing users to download their financial data as Excel files for further analysis or record-keeping.</div>
  <div>By developing PocketGuard, I gained hands-on experience in full-stack development, integrating Next.js for the frontend, Nest.js for the backend, and MongoDB for database management. This project also strengthened my skills in data visualization, user interface design, and building functional, real-world financial tools.</div>`,
  technologies: "Nest.js, Next.js, MongoDB",
  role: "Full Stack Developer",
  photo: photos.PocketGuard,
},
{
  name: "Career Readiness System",
  desc: `<div>The Career Readiness System was developed as my fourth-year research project, where I served as the project leader of a three-member team. The overall project is titled "AI-Enhanced System for Assessing Industry Readiness of Software Engineers with Continuous Learning" and focuses on evaluating and improving the industry readiness of software engineers.</div>
  <div>The system is composed of three main modules. My primary contribution was developing the Personalized Question Recommendation module. For this, I implemented a hybrid approach that combines collaborative filtering, graph-based filtering, and reinforcement learning to generate adaptive and personalized question recommendations tailored to each user's skills, experience, and learning needs.</div>
  <div>This project provided hands-on experience in AI-driven recommendation systems, user profiling, and integrating multiple data-driven techniques to create a practical and adaptive learning platform. The system leverages Python and Scikit-learn for machine learning, Neo4j for graph-based modeling, DeepFace for facial analysis, FastAPI for backend services, and Next.js for a responsive frontend interface.</div>`,
  technologies: "Python, Scikit-learn, Neo4j, DeepFace, FastAPI, Next.js",
  role: "Project Leader & Recommendation System Developer",
  photo: photos.CareerReadinessSystem,
}
  ]);

  return (
    <section className="section">
      {portfolio.map((item, index) => {
        if (item.name === projectName) {
          return (
            <div key={index}>
              <h2 style={{ margin: "0" }} className="section__title">
                <span>{item.name}</span>
              </h2>
              <div className="flex_Center">
                <div  className=" project_details_img ">
                  <img src={item.photo} alt="" />
                </div>
              </div>
              <div className="project_description">
                {item.desc && (
                  <div
                    className="portfolio_desc"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  ></div>
                )}
                <div className=" flex_Center portfolio_desc">
                  <div style={{ fontWeight: "600  " }}>
                    Technologies: {item.technologies}
                    <br />
                    Role: {item.role}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className=" flex_Center " style={{ marginTop: "20px" }}>
        <Link to="/portfolio" className="button">
          Back to Projects
          <span className="button__icon">
            <FaArrowLeft />
          </span>{" "}
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
