import "./app.css";
import React from "react";
import LeafEffect from "./components/leaf/LeafEffect";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <LeafEffect />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: "5px",
          left: "12px",
          zIndex: 999,
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
            fontFamily: '"Pacifico", cursive',
            fontWeight: 700,
          }}
        >
          Portfolio
        </h1>
      </div>

      {/* Nội dung */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

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
