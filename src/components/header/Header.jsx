import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
// import HeaderSocials from "./HeaderSocials";
import { BsRocketFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="text-name">Hoang Thai Nguyen</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA />
        {/* <HeaderSocials /> */}
        <div className="me">
          <div className="me__bg-img"></div>
          <img src={ME} alt="avatar me" className="me__avatar" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
          <BsRocketFill className="scroll__down-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
