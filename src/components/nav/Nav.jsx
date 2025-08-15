import "./nav.css";
import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LuBookMarked } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { LuMessageSquareMore } from "react-icons/lu";

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
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        data-tooltip="Home"
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        data-tooltip="About Me"
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        data-tooltip="Experience"
      >
        <LuBookMarked />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        data-tooltip="Services"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        data-tooltip="Contact"
      >
        <LuMessageSquareMore />
      </a>
    </nav>
  );
};

export default Nav;
