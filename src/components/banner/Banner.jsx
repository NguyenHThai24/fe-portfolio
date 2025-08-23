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
            <h1 className={styles.text__job}>I'M A FRONTEND DEVELOPER</h1>
            <p>
              My focus is on creating user-friendly and responsive websites that
              make the web a little more enjoyable and bring a touch of
              creativity to every project.
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
