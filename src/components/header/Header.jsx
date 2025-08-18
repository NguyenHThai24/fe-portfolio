import styles from "./header.module.css";
import React from "react";
import Nav from "@/components/nav/Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>T</span>ahi<span>N</span>uhota
      </div>
      <Nav />
      <div></div>
    </header>
  );
};

export default Header;
