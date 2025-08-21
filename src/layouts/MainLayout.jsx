import React, { useEffect } from "react";
import Banner from "@/components/banner/Banner";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Products from "@/components/products/Products";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const MainLayout = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let isScrolling = false;

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // delay phải >= thời gian smooth
    };

    let currentIndex = 0;

    const handleWheel = (e) => {
      if (isScrolling) return;
      if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }
      scrollToSection(currentIndex);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
