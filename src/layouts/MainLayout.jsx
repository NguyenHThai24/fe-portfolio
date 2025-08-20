import React from "react";
import Banner from "@/components/banner/Banner";

import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />

        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
