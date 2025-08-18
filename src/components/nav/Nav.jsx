import styles from "./nav.module.css"; // import CSS module

import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "#"; // mặc định Home
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      // Nếu đang ở đầu trang thì ép Home active
      if (window.scrollY === 0) {
        current = "#";
      }

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
      >
        Home
      </a>
      <a
        href="#about"
        className={`${styles.navLink} ${
          activeNav === "#about" ? styles.active : ""
        }`}
      >
        About Us
      </a>
      <a
        href="#experience"
        className={`${styles.navLink} ${
          activeNav === "#experience" ? styles.active : ""
        }`}
      >
        Experience
      </a>
      <a
        href="#services"
        className={`${styles.navLink} ${
          activeNav === "#services" ? styles.active : ""
        }`}
      >
        Services
      </a>
      <a
        href="#contact"
        className={`${styles.navLink} ${
          activeNav === "#contact" ? styles.active : ""
        }`}
      >
        Contact
      </a>
    </nav>
  );
};

export default Nav;
