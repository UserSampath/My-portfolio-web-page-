import React from "react";
import { FaTrash } from "react-icons/fa";

import { personalInfo } from "../../assets/data";
import PersonalInfoModal from "../../components/PersonalInfoModal";
import Stats from "../../components/Stats";
import StatsModal from "../../components/StatsModal";
import ResumeModal from "../../components/ResumeModal";
import SkillsModal from "../../components/SkillsModal";
import PortfolioModal from "../../components/PortfolioModal";
import Auth from "../../components/Auth";
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
        <h2 className="section__title">
          Admin <span>Settings</span>
        </h2>
<Auth/>

        <PersonalInfoModal />
        <StatsModal />
        <ResumeModal />
        <SkillsModal />
        <PortfolioModal />
      </div>
    </div>
  );
};

export default Admin;
