import React, { useState } from "react";
import "./Navbar.css";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { AiFillHome, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai"; 

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleCloseMobileLinks=()=>{
    setOpen(false);
  }

  return (
    <nav className="nav_head">
      <div className="heading">
        <h4 className="logo"> <img src={logo} alt="" /></h4>
        <span> ResumeCraft </span>
      </div>
      <div className={`container ${isOpen ? 'mobile height-custom' : ''}`}>
        <ul className={`nav_links ${isOpen ? 'mobile_links' : ''}`}>
          <li className="list">
            <Link to="/" className="links" onClick={handleCloseMobileLinks}>
              <AiFillHome style={{ color: "#FF5733" }} /> Home
            </Link>
          </li>
          <li className="list">
            <Link to="/about" className="links" onClick={handleCloseMobileLinks}>
              <AiOutlineInfoCircle style={{ color: "purple" }} /> About
            </Link>
          </li>
          <li className="list-btn">
            <Link to="/login" className="button" onClick={handleCloseMobileLinks}> 
              <AiOutlineLogin style={{ color: "whitesmoke" }} /> Log in
            </Link>
          </li>
          <li className="list-btn">
            <Link to="/signup" className="button" onClick={handleCloseMobileLinks}>
              <AiOutlineUserAdd style={{ color: "whitesmoke" }} /> Sign up
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
