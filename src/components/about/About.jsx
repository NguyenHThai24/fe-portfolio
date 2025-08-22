import React from "react";
import ME from "../../assets/me.svg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { LuFolderTree } from "react-icons/lu";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="car__right"></div>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__me}>
          <div className={styles.about__me_image}>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h4>Education</h4>
              <small>
                Studied at <br /> Dai Hoc Can Tho
              </small>
            </article>

            <article className={styles.about__card}>
              <BsAwardFill className={styles.about__icon} />
              <h4>Experience</h4>
              <small>1 Year Working</small>
            </article>

            <article className={styles.about__card}>
              <LuFolderTree className={styles.about__icon} />
              <h4>Projects</h4>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate web developer with 1 year of industry experience.
            Skilled in building responsive web applications using React,
            Node.js, and SQL. I enjoy learning new technologies and contributing
            to projects that make an impact.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
