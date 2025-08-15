import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.svg";
import HeaderSocials from "./HeaderSocials";
import { BsRocketFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hoang Thai Nguyen</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CTA />
        {/* <HeaderSocials /> */}
        <div className="me">
          <img src={ME} alt="avatar me" />
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
