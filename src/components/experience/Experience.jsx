import React from "react";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="car__right"></div>
      <h5 className={styles.title}>Education And Experience</h5>
      <h2>My Journey in Tech</h2>

      <div className={`container ${styles.timeline}`}>
        {/* Box 1 */}
        <div className={`${styles.timelineItem} ${styles.left} ${styles.red}`}>
          <div className={`${styles.content} ${styles.border__red}`}>
            <h3>10/2020 - 12/2024</h3>
            <p>
              <b>Đại học Cần Thơ</b> – Ngành Kỹ Thuật Phần Mềm
            </p>
            <small>
              Tập trung vào Web Development, CSDL, và các công nghệ hiện đại
            </small>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className={`${styles.timelineItem} ${styles.right} ${styles.green}`}
        >
          <div className={`${styles.content} ${styles.border__green}`}>
            <h3>5/2024 - 7/2024</h3>
            <p>
              <b>Thực tập sinh Front-end</b> – Trung Tâm Kỹ Thuật Phần Mềm, ĐHCT
            </p>
            <small>
              Tham gia phát triển giao diện web bằng ReactJS, tối ưu UI/UX
            </small>
          </div>
        </div>

        {/* Box 3 */}
        <div
          className={`${styles.timelineItem} ${styles.left} ${styles.yellow}`}
        >
          <div className={`${styles.content} ${styles.border__yellow}`}>
            <h3>12/2024 - Nay</h3>
            <p>
              <b>Lập trình viên Fullstack Web</b> – Công ty TNHH Lạc Tỷ 2
            </p>
            <small>
              Phát triển, bảo trì và triển khai hệ thống nội bộ, sử dụng NodeJS,
              ASP.NET, SQL Server, ReactJS
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
