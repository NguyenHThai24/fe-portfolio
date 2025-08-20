import React from "react";
import styles from "./portfolio.module.css"; // import CSS module
import GITHUB from "../../assets/github.png";
import { PiGithubLogoBold } from "react-icons/pi";

import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: GITHUB,
      title: "Website 1",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: GITHUB,
      title: "Website 2",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: GITHUB,
      title: "Website 3",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: GITHUB,
      title: "Website 4",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: GITHUB,
      title: "Website 5",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: GITHUB,
      title: "Website 6",
      github: "https://github.com",
      demo: "https://github.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioWrapper}`}>
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
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map(({ id, image, title, github, demo }) => (
            <SwiperSlide key={id} className={styles.portfolioItems}>
              <div className={styles.portfolioItem}>
                <div className={styles.portfolioItemImage}>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className={styles.portfolioItemCta}>
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PiGithubLogoBold size={"1.2rem"} /> Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
