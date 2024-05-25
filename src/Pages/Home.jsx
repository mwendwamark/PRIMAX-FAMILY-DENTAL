import React from "react";
import IntroSection from "../components/Home-intro-section/intro-section";
import AboutSection from "../components/Home-about-section/AboutSection";
import ServicesSection from "../components/Home-quality-service/ServicesSection";
import BookSection from "../components/Home-book-appointment/BookSection";
import MeetDoctor from "../components/Home-meet-dentists/MeetDoctor";
import TalkToUs from "../components/Home-talk-to-us/TalkToUs";

const Home = () => {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <MeetDoctor />
      <BookSection />
      <TalkToUs />
    </>
  );
};

export default Home;
