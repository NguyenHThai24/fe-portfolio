import React, { useState } from "react";
import LeafEffect from "@/components/leaf/LeafEffect";
import MainLayout from "@/layouts/MainLayout";
import SideBar from "./components/sidebar/SideBar";
import styles from "./App.module.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <LeafEffect />
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Logo + Title */}
      <div className={styles.logoWrapper} onClick={toggleSidebar}>
        <img src="./logo.svg" alt="logo" className={styles.logoImg} />
        <h1 className={styles.animateGradient}>Portfolio</h1>
      </div>

      <MainLayout />

      {/* Copyright */}
      <div className={styles.copyRight}>
        © 2025 Hoang Thai Nguyen — Web Developer
      </div>
    </>
  );
};

export default App;
