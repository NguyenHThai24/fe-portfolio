import styles from "./header.module.css";
import React from "react";
import Nav from "@/components/nav/Nav";

//icon
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.header__container}`}>
        <a href="#home" className={styles.logo}>
          <span>T</span>ahi<span>N</span>uhota
        </a>
        <Nav />
        <div className={styles.header__socials}>
          <a href="#">
            <FaGithubSquare
              color="white"
              className={styles.header__socialsIcon}
            />
          </a>
          <a href="#">
            <FaFacebookSquare
              color="white"
              className={styles.header__socialsIcon}
            />
          </a>
          <a href="#">
            <FaLinkedin color="white" className={styles.header__socialsIcon} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
