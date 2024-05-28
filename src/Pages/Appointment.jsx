import React, { useRef, useState, useEffect } from "react";
import TalkToUs from "../components/Home-talk-to-us/TalkToUs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appointment.css";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Appointment = () => {
  const form = useRef();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let successTimeout;
    let errorTimeout;

    if (isSuccess) {
      successTimeout = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    if (isError) {
      errorTimeout = setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    return () => {
      clearTimeout(successTimeout);
      clearTimeout(errorTimeout);
    };
  }, [isSuccess, isError]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wmvkm1d", "template_m3k6kqf", form.current, {
        publicKey: "dpxx1mCJz_BtrNyGF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
          setIsError(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
          setIsSuccess(false);
        }
      );

    form.current.reset();
    setSelectedDate(null);
  };

  return (
    <>
      <div className="book-appointment-page ">
        <div className="book-appointment-contents container">
          <div className="book-appointment-header">
            <h1>Book an Appointment</h1>
            <p>
              Let us know your problem, make an appointment and receive the best
              advice from our specialists.
            </p>
          </div>

          <div className="book-appointment-form">
            <form onSubmit={sendEmail} ref={form}>
              {isSuccess && (
                <div className="success-animation">
                  <p>Email sent successfully!</p>{" "}
                  <FaCheck fontSize="16px" color="green" />
                </div>
              )}
              {isError && (
                <div className="error-animation">
                  <p>Failed to send email. Please try again.</p>
                  <IoClose />
                </div>
              )}
              <div className="book-appointment-form-contents">
                <div className="name-and-contact">
                  <div className="name-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact">Your Contact</label>
                    <input
                      required
                      name="contact"
                      type="text"
                      id="contact"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div className="treatment-type-and-time">
                  <div className="treatment-type-field">
                    <label htmlFor="treatment-type">Treatment Type</label>
                    <select
                      id="treatment-type"
                      name="treatment_option"
                      required
                    >
                      <option value="">Select Treatment</option>
                      <option value="Oral Cleaning & Whitening">
                        Oral Cleaning & Whitening
                      </option>
                      <option value="Oral Surgery (Tooth Extraction)">
                        Oral Surgery (Tooth Extraction)
                      </option>
                      <option value="Root canal Treatment">
                        Root canal Treatment
                      </option>
                      <option value="Braces Installation">
                        Braces Installation
                      </option>
                      <option value="Cavity Protection">
                        Cavity Protection
                      </option>
                      <option value="Dental Crowns">Dental Crowns</option>
                      <option value="Plaque Removal">Plaque Removal</option>
                      <option value="Bleeding Gums">Bleeding Gums</option>{" "}
                    </select>
                  </div>
                  <div className="time-field">
                    <label htmlFor="time">Select Time</label>
                    <select id="time" name="time" required>
                      <option value="">Select Time</option>
                      <option value="">Select Time</option>
                      <option value="8am-10am">8am-10am</option>
                      <option value="10am-11am">10am-11am</option>
                      <option value="11am-1pm">11am-1pm</option>
                      <option value="1pm-2pm">1pm-2pm</option>
                      <option value="2pm-4pm">2pm-4pm</option>
                      <option value="4pm-5pm">4pm-5pm</option>
                      <option value="5pm-7pm">5pm-7pm</option>
                      <option value="7pm-8pm">7pm-8pm</option>
                    </select>
                  </div>
                </div>

                <div className="calendar-field">
                  <label htmlFor="calendar">Select Date</label>
                  <DatePicker
                    id="calendar"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()} // Disable past dates
                    placeholderText="Select Date"
                    name="date"
                    required
                  />
                </div>

                <div className="description-field">
                  <label htmlFor="description">Describe Your Issue</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="book-appointment-button">
                  <button type="submit">Book appointment</button>
                </div>
              </div>
            </form>

            <div className="call-us-now">
              <div className="call-us-now-title">
                <h5>
                  <span>Or</span> Call us now
                </h5>
              </div>
              <div className="call-us-now-number">
                <p>+254 712 345 678</p>
              </div>
              <div className="call-us-now-text">
                <p>
                  If you have any questions or need further assistance, please
                  feel free to contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs />
    </>
  );
};

export default Appointment;
