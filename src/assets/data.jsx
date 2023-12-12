import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./app.png";
import Work2 from "./web.png";
import Work3 from "./ui.png";

import Theme1 from "./purple.png";
import Theme2 from "./red.png";
import Theme3 from "./blueviolet.png";
import Theme4 from "./blue.png";
import Theme5 from "./goldenrod.png";
import Theme6 from "./magenta.png";
import Theme7 from "./yellowgreen.png";
import Theme8 from "./orange.png";
import Theme9 from "./green.png";
import Theme10 from "./yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Nalaka",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Sampath",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Rathnapura",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "078 8916 150",
  },

  {
    id: 9,
    title: "linkedin : ",
    description: "nalaka-sampath",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Sinhala, English",
  },
  {
    id: 8,
    title: "Mail : ",
    description: "nalakasampathsmp@mail.com",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "7+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "50+",
    title: "Pull <br /> Requests",
  },

  {
    id: 4,
    no: "350+",
    title: " Github <br /> commits",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: "experience",
    year: "2022 - PRESENT",
    title: "Volunteer <span> Leo Club </span>",
    desc: "Contributed to the projects organized by Leo Club of University of Moratuwa",
  },

  {
    id: 3,
    category: "experience",
    icon: "experience",
    year: "2019 - 2020",
    title: "Accountant <span> Nethmini Agro Export Pvt Ltd </span>",
    desc: "As an Accountant , I played a crucial role in managing the financial aspects of the company.",
  },

  {
    id: 2,
    category: "experience",
    icon: "experience",
    year: "2016 - 2018",
    title: "Senior prefect <span> Wajirawansha M.V </span>",
    desc: "As a Senior Prefect, I held a position of responsibility and leadership within the school community.",
  },

  {
    id: 4,
    category: "education",
    icon: "education",
    year: "PRESENT",
    title: "B.sc.(Hons) IT&M <span>University of Moratuwa</span>",
    desc: "I am a second year undergraduate of the University of Moratuwa having Current GPA: 3.15",
  },

  {
    id: 5,
    category: "education",
    icon: "education",
    year: "2021",
    title: "Web development course <span> VICERANT INSTITUTE </span>",
    desc: "I learnt the basics of web development technologies like HTML,CSS,JavaScript,PHP,Bootstrap",
  },

  {
    id: 6,
    category: "education",
    icon: "education",
    year: "2019",
    title: "G.C.E Advanced Level <span> commerce stream </span>",
    desc: "District Rank - 21, ICT-A, Accounting-A, Economics-A ",
  },
];

export const skills = [
  {
    id: 1,
    title: "java",
    percentage: "80",
  },

  {
    id: 2,
    title: "C",
    percentage: "65",
  },

  {
    id: 3,
    title: "React",
    percentage: "80",
  },

  {
    id: 4,
    title: "Node.js",
    percentage: "85",
  },

  {
    id: 5,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 6,
    title: "Flutter",
    percentage: "65",
  },

  {
    id: 7,
    title: "MySQL",
    percentage: "75",
  },

  {
    id: 8,
    title: "MongoDB",
    percentage: "80",
  },
  {
    id: 9,
    title: "ReactNative",
    percentage: "75",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Mobile Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,orum.",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
    photo: [
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "Website Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,orum.",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
    photo: [
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "UI/UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,orum.",
    technology:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
    photo: [
      "https://wallpapers.com/images/high/clobbopus-pokemon-level-1-a4wxcnd8vd3sojpf.webp",
      "https://wallpapers.com/images/high/clobbopus-blue-ydm2uwrk5x4rzhlo.webp",
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
