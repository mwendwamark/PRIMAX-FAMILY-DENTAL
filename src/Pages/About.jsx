import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/about-image.png";
import MeetDoctor from "../components/Home-meet-dentists/MeetDoctor";

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
                At Primax Family Dental, we're dedicated to providing exceptional dental care in a comfortable and welcoming environment. Our team of experienced professionals is committed to helping you achieve optimal oral health.
              </h4>
            </div>

            <div className="home-about-paragraph">
              <p className="p-settings">
                With years of experience in the field, our dental practice offers a wide range of services from routine check-ups to advanced dental procedures. We believe in building long-term relationships with our patients, providing personalized care that meets your unique needs. Our state-of-the-art facility and modern equipment ensure you receive the highest quality care in a safe and comfortable setting.
              </p>
            </div>
          </div>
        </div>

        <div className="about-statistics-section container">
          <div className="about-statistics-header">
            <h4>
              Our mission is to serve the patient as much as possible and
              solving your dental problems fast
            </h4>
          </div>

          <div className="about-statistics">
            <div className="statistics-info">
              <h1>1100+</h1>
              <p>Patients Served</p>
            </div>
            <div className="statistics-info">
              <h1>03</h1>
              <p>Expert Dentists</p>
            </div>
            <div className="statistics-info">
              <h1>35408+</h1>
              <p>Hours Served</p>
            </div>
          </div>
        </div>
        <MeetDoctor />
      </div>
    </>
  );
};

export default About;
