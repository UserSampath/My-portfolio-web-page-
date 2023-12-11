import React from "react";
import { FaTrash } from "react-icons/fa";

import { personalInfo } from "../../assets/data";
import PersonalInfoModal from "../../components/PersonalInfoModal";
import Stats from "../../components/Stats";
import StatsModal from "../../components/StatsModal";
import ResumeModal from "../../components/ResumeModal";
import SkillsModal from "../../components/SkillsModal";
import PortfolioModal from "../../components/PortfolioModal";
const Admin = () => {
  console.log(personalInfo);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          marginTop: "30px",

          width: "700px",
          background: "#212121",
          borderRadius: "10px",
        }}>
              <PersonalInfoModal />
              <StatsModal />
              <ResumeModal />
        <SkillsModal />
        <PortfolioModal/>

      </div>
    </div>
  );
};

export default Admin;
