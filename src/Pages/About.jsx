import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <>
      <div className="about-section">
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
          </div>
        </div>

        <div className="about-statistics-section container">
          <div className="about-statistics-header">
            <h4>
              Our mission is to sreve the patient as much as possible and
              solving your dental problems fast
            </h4>
          </div>

          <div className="about-statistics">
            <div className="statistics-info">
              <h1>3048+</h1>
              <p>Patients Served</p>
            </div>
            <div className="statistics-info">
              <h1>03</h1>
              <p>Expert Dentists</p>
            </div>
            <div className="statistics-info">
              <h1>12408+</h1>
              <p>Hours Served</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
