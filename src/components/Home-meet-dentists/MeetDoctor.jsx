import React from "react";
import { NavLink } from "react-router-dom";
import "./MeetDoctors.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import DocImage1 from "../../assets/maleDoc.jpg"
import DocImage2 from "../../assets/femaleDoc.jpg"
import DocImage3 from "../../assets/maleDoc.jpg";

const MeetDoctor = () => {
  return (
    <>
      <div className="meet-doctors">
        <div className="meet-doctors-section container">
          <div className="meet-doc-title">
            <h1>Meet our experienced dentists</h1> 
            <h4>
              Our team of experienced dentists brings years of expertise and a passion for oral health to every patient interaction. Each member of our team is dedicated to providing compassionate, personalized care that meets your unique dental needs.
            </h4>
          </div>

          <div className="doctors-contents">
            <div className="doctor-item">
              <div className="doctor-image">
                <img
                  src={DocImage1}
                  alt="Doctor"
                />
              </div>
              <div className="doctor-details">
                <div className="doc-name"><h4>Patrick Mugendi</h4></div>
                <div className="doc-experties"><p>Braces Expert</p></div>
                <div className="doc-handles">
                  <NavLink to="/">
                    <FaFacebookF />
                  </NavLink>
                  <NavLink to="/">
                    <FaXTwitter />
                  </NavLink>
                  <NavLink to="/">
                    <FaLinkedinIn />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="doctor-item">
              <div className="doctor-image">
                <img
                  src={DocImage2}
                  alt="Doctor"
                />
              </div>
              <div className="doctor-details">
                <div className="doc-name"><h4>Karla</h4></div>
                <div className="doc-experties"><p>General Dentistry</p></div>
                <div className="doc-handles">
                  <NavLink to="/">
                    <FaFacebookF />
                  </NavLink>
                  <NavLink to="/">
                    <FaXTwitter />
                  </NavLink>
                  <NavLink to="/">
                    <FaLinkedinIn />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="doctor-item">
              <div className="doctor-image">
                <img
                  src={DocImage3}
                  alt="Doctor"
                />
              </div>
              <div className="doctor-details">
                <div className="doc-name"><h4>Dennis Wachira</h4></div>
                <div className="doc-experties"><p>Dental Specialist</p></div>
                <div className="doc-handles">
                  <NavLink to="/">
                    <FaFacebookF />
                  </NavLink>
                  <NavLink to="/">
                    <FaXTwitter />
                  </NavLink>
                  <NavLink to="/">
                    <FaLinkedinIn />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetDoctor;
