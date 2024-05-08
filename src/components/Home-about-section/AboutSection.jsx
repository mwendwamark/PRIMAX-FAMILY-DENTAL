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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                vero eveniet beatae sed natus odio velit! Veritatis delectus
                eaque a nam earum quisquam blanditiis!
              </h4>
            </div>

            <div className="home-about-paragraph">
              <p className="p-settings">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                fugit magni consectetur expedita totam delectus, dolor, nostrum
                consequuntur libero harum alias cumque impedit repudiandae nobis
                eius doloribus possimus accusantium blanditiis. Tempore quos
                quas architecto unde doloribus placeat voluptas veniam, pariatur
                maiores. Quaerat ipsam deserunt molestiae commodi cupiditate
                accusantium?
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
