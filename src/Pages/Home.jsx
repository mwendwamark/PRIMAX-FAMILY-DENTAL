import React from "react";
import IntroSection from "../components/Home-intro-section/intro-section";
import AboutSection from "../components/Home-about-section/AboutSection";
import ServicesSection from "../components/Home-quality-service/ServicesSection";
import BookSection from "../components/Home-book-appointment/BookSection";

const Home = () => {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <BookSection />
    </>
  );
};

export default Home;
