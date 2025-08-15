import "./app.css";
import React from "react";
import LeafEffect from "@/components/leaf/LeafEffect";
import MainLayout from "@/layouts/MainLayout";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <>
      <LeafEffect />
      <SideBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          // top: "px",
          left: "12px",
          zIndex: 999,
          gap: "0.3rem",
        }}
      >
        <img
          src="./logo.svg"
          alt="logo image"
          style={{ width: "50px", height: "50px" }}
        />

        <h1
          className="animate-gradient"
          style={{
            fontWeight: 900,
            fontSize: "3.2rem",
          }}
        >
          Portfolio
        </h1>
      </div>
      <MainLayout />
      {/* Copyright */}
      <div
        style={{
          position: "fixed",
          bottom: "2px",
          right: "10px",
          fontSize: "0.6rem",
          color: "#666",
        }}
      >
        © 2025 Hoang Thai Nguyen — Web Developer
      </div>
    </>
  );
};

export default App;
