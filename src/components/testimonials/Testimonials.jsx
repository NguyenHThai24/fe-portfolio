import "./testimonials.css";
import AVATAR from "../../assets/avatar.svg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR,
    name: "abc",
    review: "asdfghjkl",
  },
  {
    avatar: AVATAR,
    name: "abc",
    review: "asdfghjkl",
  },
  {
    avatar: AVATAR,
    name: "abc",
    review: "asdfghjkl",
  },
  {
    avatar: AVATAR,
    name: "abc",
    review: "asdfghjkl",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="client__name">{name}</h3>
              <h5 className="client__review">{review}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
