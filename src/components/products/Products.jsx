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
      image: tourVN,
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
      image: tourVN,
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
      <div className="car__left"></div>
      <h5>My Recent Work</h5>
      <h2>My Products</h2>

      <div className={`container ${styles.productWrapper}`}>
        {/* Box chi tiết full section */}
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

          {/* 👉 Swiper nằm bên trong detailBox, góc dưới phải */}
          <div className={styles.cardSlider}>
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
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {data.map(({ id, image, title }) => (
                <SwiperSlide key={id} className={styles.productItems}>
                  <div className={styles.productItem}>
                    <div className={styles.productItemImage}>
                      <img src={image} alt={title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
