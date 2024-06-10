import React from "react";
import "./Companies.css";

import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaAirbnb,
  FaUber,
  FaDropbox,
  FaSpotify,
  FaPaypal,
  FaSalesforce,
  FaSlack,
  FaEbay,
  FaReddit,
  FaPinterest,
} from "react-icons/fa";

function Companies() {
  return (
    <>
      <div className="main-comp">
        <h3 className="heading-comp">Our resumes have been accepted by these companies:</h3>
        <div className="sub-comp-data">
          <FaApple size={30} style={{ color: "#000000" }} />
          <FaGoogle size={30} style={{ color: "#4285F4" }} />
          <FaMicrosoft size={30} style={{ color: "#F25022" }} />
          <FaAmazon size={30} style={{ color: "#FF9900" }} />
          <FaFacebook size={30} style={{ color: "#4267B2" }} />
          <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
          <FaLinkedin size={30} style={{ color: "#0077B5" }} />
          <FaGithub size={30} style={{ color: "#181717" }} />
          <FaAirbnb size={30} style={{ color: "#FF5A5F" }} />
          <FaUber size={30} style={{ color: "#000000" }} />
          <FaDropbox size={30} style={{ color: "#0061FF" }} />
          <FaSpotify size={30} style={{ color: "#1DB954" }} />
          <FaPaypal size={30} style={{ color: "#00457C" }} />
          <FaSalesforce size={30} style={{ color: "#00A1E0" }} />
          <FaSlack size={30} style={{ color: "#4A154B" }} />
          <FaEbay size={30} style={{ color: "#E53238" }} />
          <FaReddit size={30} style={{ color: "#FF4500" }} />
          <FaPinterest size={30} style={{ color: "#E60023" }} />
        </div>
      </div>
      <div className="underline"></div>
    </>
  );
}

export default Companies;
