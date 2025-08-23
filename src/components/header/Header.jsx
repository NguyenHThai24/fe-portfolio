import styles from "./header.module.css";
import React from "react";
import Nav from "@/components/nav/Nav";

//icon
import { PiGithubLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

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
            <PiGithubLogoFill
              color="white"
              className={styles.header__socialsIcon}
            />
          </a>
          <a href="#">
            <FaFacebookF color="white" className={styles.header__socialsIcon} />
          </a>
          <a href="#">
            <FaLinkedinIn
              color="white"
              className={styles.header__socialsIcon}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
