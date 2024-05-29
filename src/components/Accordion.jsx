import React, { useRef, useState } from "react";
import data from "../assets/AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import "../styles/Accordion.css";

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <div className="question-section" onClick={onClick}>
        <button className={`question-container ${isOpen ? "active" : ""}`}>
          <h4 className="question-content">{question}</h4>
          <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
        </button>
      </div>
      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer-content">
          <p>{answer.description}</p>
          {answer.video ? (
            <iframe
              className="watch-video"
              src={answer.video}
              title="video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="300"
              style={{ border: "none" }}
            ></iframe>
          ) : (
            <p>Video content is not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion-contents">
      <div className="accordion-heading">
        <h1>Our Services</h1>
        <span>
          We offer a comprehensive range of dental services to help you maintain
          optimal oral health. From routine cleanings and preventive care to
          complex surgeries and cosmetic treatments, our experienced team is
          here to ensure your smile stays healthy and beautiful. Explore our
          services below to learn more about how we can assist you.
        </span>
      </div>
      <div className="accordion-container">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
