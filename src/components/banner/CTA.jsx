import React from "react";
import CV from "../../assets/cv-nguyenhoangthai.pdf";
import { LuDownload } from "react-icons/lu";
import styles from "./banner.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className={`btn ${styles.cta__btn}`}>
        Download CV <LuDownload className={styles.cta__btnIcon} />
      </a>
      <a href="#product" className="btn btn-primary">
        View Projects
      </a>
    </div>
  );
};

export default CTA;
