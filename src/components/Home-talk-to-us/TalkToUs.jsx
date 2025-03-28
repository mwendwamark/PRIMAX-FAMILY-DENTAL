import React from "react";
import "./TalkToUs.css";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import DocImage3 from "../../assets/doc-image3.jpg";

const TalkToUs = () => {
  return (
    <>
      <div className="talk-to-us-container">
        <div className="talk-to-us container">
          <div className="talk-to-us-image-section">
            <img src={DocImage3} alt="" />
            <div className="image-text-contents">
              <h4>
                Top quality dental services with 100% customer satisfaction
              </h4>
            </div>
          </div>

          <div className="talk-to-us-contents-section">
            <h1>Have Questions to ask?</h1>
            <p>
              We're here to help with any questions you have about our services.
              Whether you're curious about our procedures, need to schedule an
              appointment, or have any other inquiries, feel free to reach out
              to us.{" "}
            </p>
            <p className="talk-to-us-email">
              <LuMail className="talk-to-us-email-icon" />{" "}
              primaxfamilydental@gmail.com
            </p>
            <p className="talk-to-us-phone">
              <MdOutlinePhone className="talk-to-us-phone-icon" /> 0113 116911
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalkToUs;
