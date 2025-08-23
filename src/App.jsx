import React, { useState } from "react";
// import LeafEffect from "@/components/leaf/LeafEffect";
import MainLayout from "@/layouts/MainLayout";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      {/* <LeafEffect /> */}

      <MainLayout />

      {/* Copyright */}
      <div className={styles.copyRight}>
        © 2025 Hoang Thai Nguyen — Web Developer
      </div>
    </>
  );
};

export default App;
