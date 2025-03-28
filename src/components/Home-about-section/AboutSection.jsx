import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutSection.css";
import AboutImage from "../../assets/about-image.png";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <div className="home-about-section section">
        <div className="home-about-contents container section">
          <div className="home-image-contents">
            <img src={AboutImage} alt="" />
          </div>

          <div className="home-texts-contents">
            <div className="home-about-title">
              <h1>About us</h1>
            </div>
            <div className="home-about-subtitle">
              <h4>
                At Primax Family Dental, we're dedicated to providing exceptional dental care in a comfortable and welcoming environment. Our team of experienced professionals is committed to helping you achieve optimal oral health.
              </h4>
            </div>

            <div className="home-about-paragraph">
              <p className="p-settings">
                With years of experience in the field, our dental practice offers a wide range of services from routine check-ups to advanced dental procedures. We believe in building long-term relationships with our patients, providing personalized care that meets your unique needs. Our state-of-the-art facility and modern equipment ensure you receive the highest quality care in a safe and comfortable setting.
              </p>
            </div>

            <div className="home-about-read-more">
              <NavLink to="/about">Read more about us</NavLink>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
