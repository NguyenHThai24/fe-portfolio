import { useState, useEffect } from "react";
import styles from "./nav.module.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveNav(id ? `#${id}` : "#");
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // ít nhất 60% section vào viewport thì mới active
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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
        href="#skills"
        className={`${styles.navLink} ${
          activeNav === "#skills" ? styles.active : ""
        }`}
      >
        Skills
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
        href="#product"
        className={`${styles.navLink} ${
          activeNav === "#product" ? styles.active : ""
        }`}
      >
        Products
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
