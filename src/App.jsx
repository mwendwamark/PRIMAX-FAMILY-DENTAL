import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Appointment from "./Pages/Appointment";
import Contacts from "./Pages/Contacts";
import Services from "./Pages/Services.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
