import React from "react";
import "../styles/Contacts.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import Map from "../components/Map";

const Contacts = () => {
  return (
    <>
      <div className="contacts-page">
        <div className="contacts-contents">
          <div className="contacts-heading">
            <h1>Contact Us</h1>
            <p>
              We are here to assist you with any questions or concerns. Feel
              free to reach out to us through any of the following methods.
            </p>
          </div>

          <div className="contacts-information">
            <div className="contact-item">
              <div className="contact-icon">
                <IoLocationOutline className="c-icon" />
              </div>{" "}
              <h4 className="c-item-header">Address</h4>
              <p>
                1st Floor Hallo Arcade, Thika <br />
                Opposite Naivas Supermarket
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MdOutlinePhone className="c-icon" />
              </div>{" "}
              <h4 className="c-item-header">Call Us</h4>
              <p>
                +254 113 116911
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <LuMail className="c-icon" />
              </div>

              <h4 className="c-item-header">Email Us</h4>
              <p>
                primaxfamilydental@gmail.com
                {/* primax123@gmail.com */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Map/>
    </>
  );
};

export default Contacts;
