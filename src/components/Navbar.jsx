import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import { MdOutlinePhone } from "react-icons/md";
// IMPORT FILES
import Logo from "../assets/file.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="logo-section">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Service</NavLink>
            </li>
            <li>
              <NavLink to="/appointment">Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>

        <div className="book-appointment-section">
          <ul>
            <li>
              <div className="emergency-call-contents">
                <MdOutlinePhone className="phone-icon" />{" "}
                <p>+254 113 116911</p>
              </div>
            </li>
            <li className="appointment-btn">
              <NavLink to="/appointment">Book an Appointment</NavLink>
            </li>
          </ul>
        </div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <IoMdClose /> : <IoMdMenu />}{" "}
          {/* Show close icon when navbar is open */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
