import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";
import styles from "./sidebar.module.css";

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebar__nav}>
        <a href="#" className={styles.sidebar__link} title="GitHub">
          <IoLogoGithub />
        </a>
        <a href="#" className={styles.sidebar__link} title="LinkedIn">
          <IoLogoLinkedin />
        </a>
        <a href="#" className={styles.sidebar__link} title="Twitter">
          <IoLogoTwitter />
        </a>
        <a href="#" className={styles.sidebar__link} title="Dribbble">
          <IoLogoDribbble />
        </a>
        <a href="#" className={styles.sidebar__link} title="YouTube">
          <IoLogoYoutube />
        </a>
        <a href="#" className={styles.sidebar__link} title="Instagram">
          <IoLogoInstagram />
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
