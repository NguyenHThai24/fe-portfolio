import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuBookMarked, LuMessageSquareMore } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import styles from "./nav.module.css"; // import CSS module

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "#";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveNav(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <a
        href="#"
        className={`${styles.navLink} ${
          activeNav === "#" ? styles.active : ""
        }`}
        data-tooltip="Home"
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={`${styles.navLink} ${
          activeNav === "#about" ? styles.active : ""
        }`}
        data-tooltip="About Me"
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        className={`${styles.navLink} ${
          activeNav === "#experience" ? styles.active : ""
        }`}
        data-tooltip="Experience"
      >
        <LuBookMarked />
      </a>
      <a
        href="#services"
        className={`${styles.navLink} ${
          activeNav === "#services" ? styles.active : ""
        }`}
        data-tooltip="Services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`${styles.navLink} ${
          activeNav === "#contact" ? styles.active : ""
        }`}
        data-tooltip="Contact"
      >
        <LuMessageSquareMore />
      </a>
    </nav>
  );
};

export default Nav;
