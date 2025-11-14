import React, { useState } from "react";
import styles from "./collection.module.css";

// Import ảnh từ thư mục assets
import TEAMVOLLEYBALL from "../../assets/lac-ty-ii-company/team-volleyball.jpg";

const activities = [
  {
    time: "08/2023",
    title: "Tham gia giải bóng chuyền công ty",
    description:
      "Đội tuyển bóng chuyền văn phòng công ty đã đạt giải nhất toàn đoàn trong hội thao nội bộ.",
    images: [TEAMVOLLEYBALL, TEAMVOLLEYBALL],
  },
];

const Collection = () => {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <section id="collection">
      <div className="container">
        <h2 className={styles.heading}>Bộ sưu tập thành tích & hoạt động</h2>
        <div className={styles.timeline}>
          {activities.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.images}>
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={item.title}
                      onClick={() => setZoomImg(img)} // click để zoom
                      className={styles.zoomable}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal zoom ảnh */}
      {zoomImg && (
        <div className={styles.modal} onClick={() => setZoomImg(null)}>
          <span className={styles.close}>&times;</span>
          <img src={zoomImg} alt="Zoom" className={styles.modalContent} />
        </div>
      )}
    </section>
  );
};

export default Collection;
