import React from "react";
import "./banner.css";
import CTA from "./CTA";
import ME from "../../assets/me.svg";

import { BsRocketFill } from "react-icons/bs";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="banner__container">
          <div className="banner__info">
            <h5>NGUYEN HOANG THAI</h5>
            <h1 className="text__name">HELLO! I'M THAI</h1>
            <h1 className="text__job">I'M A FRONTEND DEVELOPER</h1>
            <p>
              I love building websites that not only look good but also bring
              real value to users. With a strong focus on design and
              performance, I always aim to deliver smooth and engaging
              experiences.
            </p>
            <CTA />
          </div>
          <div className="me">
            <div className="me__bg-img"></div>
            <img src={ME} alt="avatar me" className="me__avatar" />
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
          <BsRocketFill className="scroll__down-icon" />
        </a>
      </div>
    </section>
  );
};

export default Banner;
