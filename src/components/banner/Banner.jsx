import React from "react";
import styles from "./banner.module.css";
import CTA from "./CTA";
import ME from "../../assets/me-banner.svg";

const Banner = () => {
  return (
    <section id="home">
      <div className="car__left"></div>
      <div className="container">
        <div className={styles.banner__container}>
          <div className={styles.banner__info}>
            <h5>NGUYEN HOANG THAI</h5>
            <h1 className={styles.text__name}>HELLO! I'M THAI</h1>
            <h1 className={styles.text__job}>I'M A WEB DEVELOPER</h1>
            <p>
              I love building websites that not only look good but also bring
              real value to users. With a strong focus on design and
              performance, I always aim to deliver smooth and engaging
              experiences.
            </p>
            <CTA />
          </div>
          <div className={styles.me}>
            <div className={styles.me__hexagon}></div> {/* khung */}
            <img src={ME} alt="avatar me" className={styles.me__avatar} />{" "}
            {/* ảnh nổi */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
