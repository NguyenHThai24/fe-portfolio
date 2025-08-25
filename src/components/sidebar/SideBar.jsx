import React from "react";
import styles from "./sideBar.module.css";
import { TiWeatherPartlySunny } from "react-icons/ti";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebarContent}>
        <a href="#">
          <TiWeatherPartlySunny className={styles.icon} />
          <span className={styles.tooltip}>Weather</span>
        </a>
      </nav>
      <div></div>
    </div>
  );
};

export default SideBar;
