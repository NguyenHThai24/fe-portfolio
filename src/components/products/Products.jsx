import React, { useState } from "react";
import styles from "./products.module.css";
import GITHUB from "../../assets/github.png";
import tourVN from "../../assets/image-product/website-tour.jpg";
import { PiGithubLogoBold } from "react-icons/pi";

import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Products = () => {
  const data = [
    {
      id: 1,
      image: GITHUB,
      title: "Website 1",
      github: "https://github.com",
      demo: "https://github.com",
      desc: "Mô tả chi tiết Website 1...",
    },
    {
      id: 2,
      image: tourVN,
      title: "Website Quản lý và Đặt tour du lịch Việt Nam",
      github: "https://github.com",
      demo: "https://github.com",
      desc: "Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...Mô tả chi tiết Website 2...",
    },
    {
      id: 3,
      image: GITHUB,
      title: "Website 3",
      github: "https://github.com",
      demo: "https://github.com",
      desc: "Mô tả chi tiết Website 3...",
    },
    // ...
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="product">
      <h5>My Recent Work</h5>
      <h2>My Products</h2>

      <div className={`container ${styles.productWrapper}`}>
        {/* Panel hiển thị chi tiết dự án */}
        <div className={styles.detailBox}>
          <h3>{data[activeIndex].title}</h3>
          <p>{data[activeIndex].desc}</p>
          <div className={styles.detail__boxBtn}>
            <a
              href={data[activeIndex].github}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <PiGithubLogoBold size={"1.2rem"} /> Github
            </a>
            <a
              href={data[activeIndex].demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Slider hiển thị 1 card */}
        <div>
          <Swiper
            className={styles.portfolioContainer}
            modules={[Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1} // 👉 chỉ 1 card
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 👉 update index
          >
            {data.map(({ id, image, title }) => (
              <SwiperSlide key={id} className={styles.productItems}>
                <div className={styles.productItem}>
                  <div className={styles.productItemImage}>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;
