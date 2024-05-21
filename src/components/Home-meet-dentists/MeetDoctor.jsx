import React from "react";
import { NavLink } from "react-router-dom";
import "./MeetDoctors.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import DocImage1 from "../../assets/doc-image1.jpg"
import DocImage2 from "../../assets/doc-image2.jpg"
import DocImage3 from "../../assets/doc-image3.jpg";

const MeetDoctor = () => {
  return (
    <>
      <div className="meet-doctors">
        <div className="meet-doctors-section container">
          <div className="meet-doc-title">
            <h1>Meet our experienced dentists</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto officia voluptas alias consequuntur omnis repudiandae
              molestiae id debitis quia praesentium
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
                <div className="doc-name"><h4>Patrick Williamson</h4></div>
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
                <div className="doc-name"><h4>Karla Haden</h4></div>
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
                <div className="doc-name"><h4>Mark Wallace</h4></div>
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
