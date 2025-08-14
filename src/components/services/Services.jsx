import React from "react";
import "./services.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start UI/UX Design  */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End UI/UX Design  */}

        {/* Start Web Developer  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End Web Developer  */}

        {/* Start Content Creator  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp size={20} className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End Content Creator  */}
      </div>
    </section>
  );
};

export default Services;
