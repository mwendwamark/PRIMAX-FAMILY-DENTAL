import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Appointment from "./Pages/Appointment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       <BrowserRouter>
//         <Navbar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
