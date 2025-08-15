import React from "react";
import CV from "../../assets/cv-nguyenhoangthai.pdf";
import { LuDownload } from "react-icons/lu";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn cta__btn">
        Download CV <LuDownload className="cta__btn-icon" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
