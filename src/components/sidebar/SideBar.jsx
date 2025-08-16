import React from "react";
import styles from "./SideBar.module.css";
import { BsRocketFill } from "react-icons/bs";
const SideBar = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.line}>
        <span>Projects</span>
      </div>
      {/* Nội dung sidebar */}
      <nav className={styles.sidebarContent}>
        <a href="#about">Weather</a> <a href="#about">Weather</a>
      </nav>
      {/* Nút đóng */}
      <button className={styles.closeBtn} onClick={onClose}>
        <BsRocketFill className={styles.closeBtnIcon} /> Close
      </button>
    </div>
  );
};

export default SideBar;
