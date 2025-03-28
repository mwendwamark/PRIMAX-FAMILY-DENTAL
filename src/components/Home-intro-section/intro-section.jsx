import React from "react";
import { NavLink } from "react-router-dom";
import "./intro-section.css";
import image1 from "../../assets/h-image-1.jpg";
import image2 from "../../assets/h-image-2.jpeg";
import image3 from "../../assets/h-image-3.png";


import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";


const IntroSection = () => {
  return (
    <>
      <div className="home-page">
        <div className="home-section">
          <div className="home-intro-section content-container section">
            <div className="intro-section">
              <div className="home-content-texts">
                <div className="home-content-title">
                  <h1>A better life begins with a beautiful smile</h1>
                </div>

                <div className="home-content-paragraph">
                  <p className="p-settings">
                    Welcome to our dental practice, where smiles are crafted and
                    confidence is restored. At <span>Primax Family Dental</span>,
                    we're dedicated to providing exceptional dental care
                    tailored to your unique needs. Discover the difference a
                    healthy smile can make in your life – schedule your
                    appointment today!
                  </p>
                </div>

                <div className="home-content-btn">
                  <NavLink to="/appointment">Book an appointment</NavLink>
                </div>
              </div>

              <div className="home-intro-images">
                <div className="self-image">
                  <img src={image1} alt="smiling-woman" />
                </div>

                <div className="double-image">
                  <img src={image2} className="d-image-1" alt="dentist" />
                  <img src={image3} className="d-image-2" alt="child" />
                </div>
              </div>
            </div>

            <div className="home-table-info section">
              <div className="working-hours">
                <div className="table-title">
                  <h4>Working hours</h4>
                </div>
                <div className="table-contents">
                  <div className="table-icon">
                    <IoMdTime className="table-icon-i" />
                  </div>
                  <div className="table-text">
                    <p className="p-settings">Monday - Saturday</p>
                    <p className="table-lower-text">8am - 8pm</p>
                  </div>
                </div>
              </div>
              <div className="book-appointment">
                <div className="table-title">
                  <h4>Book an Appointment</h4>{" "}
                  <FaArrowCircleRight className="table-right-i" />
                </div>
                <div className="table-contents">
                  <div className="table-icon">
                    <MdPermContactCalendar className="table-icon-i" />
                  </div>
                  <div className="table-text">
                    <p className="p-settings">Book an Appointment</p>
                    <p className="table-lower-text">With us</p>
                  </div>
                </div>
              </div>
              <div className="emergency-service">
                <div className="table-title">
                  <h4>Contact Us</h4>{" "}
                  <FaArrowCircleRight className="table-right-i" />
                </div>
                <div className="table-contents">
                  <div className="table-icon">
                    <MdOutlinePhone className="table-icon-i" />
                  </div>
                  <div className="table-text">
                    <p className="p-settings">Emergency-line</p>
                    <p className="table-lower-text">0113 116911</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
