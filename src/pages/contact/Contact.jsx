import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";
import { FiSend, FiGithub } from "react-icons/fi";
import { SiSololearn } from "react-icons/si";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
   const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xleydleb");
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            <p className="contact__description">
             Get in{" "}
              <span onClick={() => navigate("/admin")}>touch</span> via email or
              phone, and let's connect and create something amazing together!
            </p>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">nalakasampathsmp@gmail.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">+94 788 916 150</h4>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/nalaka-sampath/"
                className="contact__social-link">
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/UserSampath"
                className="contact__social-link">
                <FiGithub />
              </a>
              <a
                href="https://www.sololearn.com/profile/29184409"
                className="contact__social-link">
                <SiSololearn />
              </a>
              <a
                href="https://medium.com/@nalakasampathsmp"
                className="contact__social-link">
                <FaMedium />
              </a>
            </div>
          </h3>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
              />
            </div>

            <div className="form__input-div">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"></textarea>
          </div>
          <button className="button" disabled={state.submitting}>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
