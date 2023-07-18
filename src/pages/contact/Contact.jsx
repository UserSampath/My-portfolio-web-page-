import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            <p className="contact__description">
              Feel free to get in touch with me.Feel free to get in touch with
              me.Feel free to get in touch with me.Feel free to get in touch
              with me.
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
              <a href="" className="contact__social-link">
                <FaFacebookF />
              </a>
              <a href="" className="contact__social-link">
                <FaTwitter />
              </a>
              <a href="" className="contact__social-link">
                <FaYoutube />
              </a>
              <a href="" className="contact__social-link">
                <FaDribbble />
              </a>
            </div>
          </h3>
        </div>
        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
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
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"></textarea>
          </div>
          <button className="button">
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
