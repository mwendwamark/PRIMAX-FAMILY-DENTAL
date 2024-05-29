import React from "react";
import "./ServicesSection.css";
import { NavLink } from "react-router-dom";
// import icons
import { FaArrowRight } from "react-icons/fa6";
// import images
import Surgery from "../../assets/dental-surgery.png";
import Crown from "../../assets/dental-crown.png";
import Filling from "../../assets/filling.png";
import Toothbrushing from "../../assets/toothbrushing.png";
import Braces from "../../assets/braces.png";
import Xray from "../../assets/x-ray.png";
import DentalCare from "../../assets/dental-service.png";
import PlaqueRemoval from "../../assets/plaque.png";
import ToothFilling from "../../assets/tooth-filling.png";

const ServicesSection = () => {
  return (
    <>
      <div className="home-services-section">
        <div className="home-services-contents container">
          <div className="home-services-headings">
            <h1>The Best Quality Services</h1>
            <p className="p-settings">
              Our dental services offer comprehensive care tailored to your
              needs.
            </p>
          </div>

          <div className="home-services-listing">
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Toothbrushing} alt="tooth-brushing" />
              </div>
              <div className="services-title">
                <h4>Oral Cleaning & Whitening</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Regular cleaning removes plaque, tartar, and brightens your
                  smile for improved oral hygiene.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Surgery} alt="oral-surgery" />
              </div>
              <div className="services-title">
                <h4>Oral Surgery</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Surgical procedures for impacted teeth, jaw issues, and facial
                  trauma, providing effective solutions.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Xray} alt="dental-xray" />
              </div>
              <div className="services-title">
                <h4>Root Canal Treatment</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Root canal therapy to save damaged teeth by removing infected
                  pulp, restoring oral health and function.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Filling} alt="tooth-filling" />
              </div>
              <div className="services-title">
                <h4>Cavity Protection</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  High-quality fillings to repair cavities, restoring tooth
                  strength and preventing decay.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Braces} alt="dental-braces" />
              </div>
              <div className="services-title">
                <h4>Braces Installation</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Orthodontic treatment with braces to correct teeth alignment
                  and bite issues for improved aesthetics and function.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={Crown} alt="dental-crown" />
              </div>
              <div className="services-title">
                <h4>Dental Crowns</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Custom-made crowns to restore damaged teeth, providing
                  strength, function, and natural appearance.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={DentalCare} alt="dental-care" />
              </div>
              <div className="services-title">
                <h4>Comprehensive Dental Care</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Preventive, restorative, and cosmetic treatments for overall
                  oral health and well-being.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item">
              <div className="services-img">
                {" "}
                <img src={PlaqueRemoval} alt="plaque-removal" />
              </div>
              <div className="services-title">
                <h4>Plaque Removal</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Professional cleaning to remove plaque and tartar buildup,
                  promoting healthy gums and preventing gum disease.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
            <div className="services-list-item display-none">
              <div className="services-img">
                {" "}
                <img src={ToothFilling} alt="tooth-filling" />
              </div>
              <div className="services-title">
                <h4>Tooth Filling</h4>
              </div>
              <div className="service-paragraph">
                <p>
                  Tooth-colored fillings to restore tooth structure and
                  function, providing durable and aesthetic cavity treatment.
                </p>
              </div>
              <div className="learn-more-services">
                <NavLink to="/services">learn more</NavLink>
                <FaArrowRight />
              </div>
            </div>
          </div>

          <div className="more-services-btn">
            <NavLink to="/services">More about Services</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
