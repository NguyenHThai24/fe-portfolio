import React from "react";
import styles from "./skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";

const Skills = () => {
  const frontend = [
    { id: 1, title: "HTML", percent: 90, color: "#e34c26", icon: <FaHtml5 /> },
    { id: 2, title: "CSS", percent: 85, color: "#264de4", icon: <FaCss3Alt /> },
    {
      id: 3,
      title: "JavaScript",
      percent: 75,
      color: "#f0db4f",
      icon: <FaJsSquare />,
    },
    {
      id: 4,
      title: "ReactJS",
      percent: 70,
      color: "#61DBFB",
      icon: <FaReact />,
    },
  ];

  const backend = [
    {
      id: 5,
      title: "NodeJS",
      percent: 65,
      color: "#3C873A",
      icon: <FaNodeJs />,
    },
  ];

  const database = [
    {
      id: 6,
      title: "SQL Server",
      percent: 60,
      color: "#f29111",
      icon: <FaDatabase />,
    },
  ];

  const tools = [
    { id: 7, title: "Git", percent: 70, color: "#f1502f", icon: <FaGitAlt /> },
    {
      id: 8,
      title: "VS Code",
      percent: 80,
      color: "#007ACC",
      icon: <BiLogoVisualStudio />,
    },
    {
      id: 9,
      title: "Visual Studio",
      percent: 75,
      color: "#5C2D91",
      icon: <DiVisualstudio />,
    },

    {
      id: 10,
      title: "Figma",
      percent: 65,
      color: "#F24E1E",
      icon: <FaFigma />,
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div key={skill.id} className={styles.skills__card}>
        <div className={styles.skills__header}>
          <div className={styles.skills__icon} style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <h4 className={styles.skills__name}>{skill.title}</h4>
        </div>

        <div className={styles.skills__bar}>
          <div
            className={styles.skills__fill}
            style={{ width: `${skill.percent}%`, background: skill.color }}
          ></div>
        </div>

        <span className={styles.skills__percent}>{skill.percent}%</span>
      </div>
    ));

  return (
    <section id="skills" className={styles.skills}>
      <h5 className={styles.skills__subtitle}>My Skills</h5>
      <h2 className={styles.skills__heading}>What Skills I Have</h2>

      <div className={`container ${styles.skills__container}`}>
        {/* FRONTEND */}
        <div className={styles.skills__column}>
          <h3 className={styles.skills__groupTitle}>Frontend</h3>
          <div className={styles.skills__list}>{renderSkills(frontend)}</div>
        </div>

        {/* BACKEND */}
        <div className={styles.skills__column}>
          <h3 className={styles.skills__groupTitle}>Backend</h3>
          <div className={styles.skills__list}>{renderSkills(backend)}</div>
        </div>

        {/* DATABASE */}
        <div className={styles.skills__column}>
          <h3 className={styles.skills__groupTitle}>Database</h3>
          <div className={styles.skills__list}>{renderSkills(database)}</div>
        </div>

        {/* TOOLS */}
        <div className={styles.skills__column}>
          <h3 className={styles.skills__groupTitle}>Tools</h3>
          <div className={styles.skills__list}>{renderSkills(tools)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
