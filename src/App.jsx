import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;