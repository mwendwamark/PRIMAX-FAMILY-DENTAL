import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import Logo from "../assets/logo2.png";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { BiLogoTiktok } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="footer-section">
          <section className="footer-header-section">
            <div className="footer-logo-image">
              <NavLink to="/">
                <img src={Logo} alt="" />
              </NavLink>
            </div>
          </section>

          <section className="footer-contents-section">
            <div className="footer-pages">
              <h4 className="footer-titles">Pages</h4>
              <ul className="footer-list">
                <li className="page-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="page-item">
                  <NavLink to="/about">About</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/service">Service</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/appointment">Appointment</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>{" "}
              </ul>{" "}
            </div>
            <div className="footer-services">
              <h4 className="footer-titles"> Services</h4>
              <ul className="footer-list">
                <li className="page-item">
                  <NavLink to="/services">Oral Cleaning</NavLink>
                </li>
                <li className="page-item">
                  <NavLink to="/services">Oral Surgery</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Root canal treatment</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Cavity protection</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Braces Installation</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Dental Crowns</NavLink>
                </li>
                <li className="page-item">
                  <NavLink to="/services">Dental Care</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Plaque removal</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/services">Tooth filling</NavLink>
                </li>{" "}
              </ul>
            </div>
            <div className="footer-help">
              <h4 className="footer-titles">Help</h4>
              <ul className="footer-list">
                <li className="page-item">
                  <NavLink to="/about">Contact us</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/service">Privacy Policy</NavLink>
                </li>{" "}
                <li className="page-item">
                  <NavLink to="/appointment">Terms and conditions</NavLink>
                </li>{" "}
              </ul>
            </div>
            <div className="footer-addresses">
              <div className="addresses">
                <h4 className="footer-titles">
                  Address <IoLocationOutline />
                </h4>
                <p>1st Floor Hallo Arcade, Thika </p>
                <p>Opposite Naivas Supermarket</p>
              </div>
              <div className="phone-contacts">
                <h4 className="footer-titles">Phone</h4>
                <p>+254 712 345 678</p>
                <p>+254 712 345 678</p>
              </div>
            </div>
          </section>

          <div className="thin-line">
            <hr />
          </div>

          <section className="footer-bottom-section container">
            <div className="copyright">
              <p>
                Copyright &copy; {new Date().getFullYear()} Primax Family
                Dental. All rights reserved{" "}
              </p>
            </div>
            <div className="footer-icons">
              <NavLink to="https://m.facebook.com/people/Primax-Family-Dental/100075527062391/">
                <FaFacebookF className="f-icons" />
              </NavLink>{" "}
              <NavLink to="https://m.facebook.com/people/Primax-Family-Dental/100075527062391/">
                <RiTwitterXLine className="f-icons" />
              </NavLink>{" "}
              <NavLink to="https://m.facebook.com/people/Primax-Family-Dental/100075527062391/">
                <SlSocialInstagram className="f-icons" />
              </NavLink>{" "}
              <NavLink to="https://m.facebook.com/people/Primax-Family-Dental/100075527062391/">
                <BiLogoTiktok className="f-icons" />
              </NavLink>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
