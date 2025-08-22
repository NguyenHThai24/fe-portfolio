import React from "react";
import styles from "./footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.footer__logo}>
        PORTFOLIO
      </a>

      <ul className={styles.permalinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.footer__socials}>
        <a href="https://facebook.com">
          <FaSquareFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com">
          <FaSquareTwitter />
        </a>
      </div>

      <div className={styles.footer__copyright}>
        <small>&copy; Tahi Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
