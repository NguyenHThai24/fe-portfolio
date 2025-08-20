import React from "react";
import styles from "./experience.module.css"; // dùng CSS Module
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I Worked</h5>
      <h2>Experience</h2>

      <div className={`container ${styles.experience__container}`}>
        {/* Cột 1: Dự án cá nhân */}
        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h3>Personal Projects</h3>
            <small></small>
          </div>
          <ul className={styles.experience__list}>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Portfolio Website</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>AI-Powered Daily Routine Optimizer</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Small E-commerce UI Clone</p>
            </li>
          </ul>
        </article>

        {/* Cột 2: Thực tập */}
        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h3>Internship - CUSC</h3>
            <small>Software Technology Center Can Tho University</small>
          </div>
          <ul className={styles.experience__list}>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Backend with Node.js & Express</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Database Design (SQL Server)</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Team Collaboration with Git</p>
            </li>
          </ul>
        </article>

        {/* Cột 3: Làm việc chính thức */}
        <article className={styles.experience}>
          <div className={styles.experience__head}>
            <h3>IT Office</h3>
            <small>Lac Ty 2 Co., Ltd.</small>
          </div>
          <ul className={styles.experience__list}>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Maintain Internal Systems</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Support Office Network</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp
                size={20}
                className={styles.experience__listIcon}
              />
              <p>Assist Staff with IT Issues</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
