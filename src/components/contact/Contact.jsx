import React from "react";
import styles from "./contact.module.css"; // dùng CSS Module
import { TbMailShare } from "react-icons/tb";
import { LuUserRoundPen } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="car__left"></div>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${styles.contact__container}`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <TbMailShare className={styles.contact__optionIcon} />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="mailto:thaingh2402@gmail.com">Send a message</a>
          </article>

          <article className={styles.contact__option}>
            <TbMailShare className={styles.contact__optionIcon} />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="mailto:thaingh2402@gmail.com">Send a message</a>
          </article>

          <article className={styles.contact__option}>
            <TbMailShare className={styles.contact__optionIcon} />
            <h4>Email</h4>
            <h5>thaingh2402@gmail.com</h5>
            <a href="mailto:thaingh2402@gmail.com">Send a message</a>
          </article>
        </div>
        {/* End contact options  */}

        <form action="">
          <div className={styles.form__input}>
            <LuUserRoundPen className={styles.form__inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className={styles.form__input}>
            <MdOutlineMailOutline className={styles.form__inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.form__textarea}>
            <TiMessages className={styles.form__textareaIcon} />
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
