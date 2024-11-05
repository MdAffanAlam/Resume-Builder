import React from "react";
import "./Hero.css";
import hero from '../assets/images/hero.jpg';
import arrow from '../assets/images/arrow1.png';
import { FaRocket, FaPlay, FaSmile, FaPen } from "react-icons/fa"; // Importing additional icons


import Reviews from "./Reviews";
import Sample from "./Sample";
import Companies from "./Companies";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Hero() {
  const location = useLocation();

  useEffect(() => {
      if (location.state?.registrationSuccess) {
          toast.success("Registration Successfully");
      }
  }, [location.state]);
  return (
    <>
      <div className="hero">

        <div className="content">
          
          <div className="left-hero-content">
            <div className="head">
              <h2>
                <FaPen style={{ color: 'purple'}} size={18}/> Welcome to Resume Builder Application
              </h2>
            </div>
            <div className="intro">
              <p>
                <FaSmile style={{ color: 'green' }} /> We're thrilled to have you here. Crafting a standout resume is a
                crucial step in your career journey, and we're here to make that
                process as seamless and effective as possible.
              </p>
            </div>
            <div className="button-hero">
            <Link to='/login'>
              <button className="btn-hero">
                Get Started <FaRocket style={{ color: 'red'}} />
              </button>
              </Link>
              <Link to="/details">
                <button className="btn-hero">
                  Demo <FaPlay />
                </button>
              </Link>
            </div>
            <div className="arrow"><img src={arrow} alt="" /></div>
          </div>
          <div className="right-hero-content">
            <img src={hero} alt="hero" />
            
          </div>
        </div>
      </div>
      <Sample />
      <Reviews />
      <Companies />
     
    </>
  );
}

export default Hero;
