import "./contact.css";
import React from "react";
import { TbMailShare } from "react-icons/tb";
import { LuUserRoundPen } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TbMailShare className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact__option">
            <TbMailShare className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="">Send a message</a>
          </article>
          <article className="contact__option">
            <TbMailShare className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="">Send a message</a>
          </article>
        </div>
        {/* End contact options  */}

        <form action="">
          <div className="form__input">
            <LuUserRoundPen className="form__input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form__input">
            <MdOutlineMailOutline className="form__input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form__textarea">
            <TiMessages className="form__textarea-icon" />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message <SiMinutemailer />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
