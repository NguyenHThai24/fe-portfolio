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

      <MainLayout />

      {/* Copyright */}
      <div className={styles.copyRight}>
        © 2025 Hoang Thai Nguyen — Web Developer
      </div>
    </>
  );
};

export default App;
