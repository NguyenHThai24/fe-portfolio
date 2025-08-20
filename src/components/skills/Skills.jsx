import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import styles from "./skills.module.css";

const Skills = () => {
  const skills = [
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
    {
      id: 5,
      title: "NodeJS",
      percent: 65,
      color: "#3C873A",
      icon: <FaNodeJs />,
    },
    {
      id: 6,
      title: "SQL Server",
      percent: 60,
      color: "#f29111",
      icon: <FaDatabase />,
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h5>My Skills</h5>
      <h2>What Skills I Have</h2>
      <div className={`container ${styles.skills__grid}`}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skill__card}>
            <div className={styles.skill__header}>
              <div
                className={styles.skill__icon}
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h4>{skill.title}</h4>
            </div>

            <div className={styles.skill__bar}>
              <div
                className={styles.skill__fill}
                style={{ width: `${skill.percent}%`, background: skill.color }}
              ></div>
            </div>

            <span className={styles.skill__percent}>{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
