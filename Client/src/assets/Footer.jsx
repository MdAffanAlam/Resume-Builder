import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope style={{ marginRight: "5px", color: "#EA4335" }} />
            Email:
            <Link
              to={`mailto:mdaffanalam2022@gmail.com`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              mdaffanalam2022@gmail.com
            </Link>
          </p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link
              to="https://www.facebook.com/share/oGzUquCRveJRiJJy/?mibextid=qi2Omg"
              target="_blank"
              style={{ color: "#4267B2" }}
            >
              <FaFacebook size={24} style={{ padding: '0 4px'}}/>
            </Link>
            <Link
              to="https://www.linkedin.com/in/md-affan-alam-839487241"
              target="_blank"
              style={{ color: "#0077B5" }}
            >
              <FaLinkedin size={24} style={{ padding: '0 4px'}} />
            </Link>
            <Link
              to="https://www.instagram.com/i_affan5?igsh=MWVybDc5ZXFkcDZpeg=="
              target="_blank"
              style={{ color: "#C13584" }}
            >
              <FaInstagram size={24} style={{ padding: '0 4px'}}/>
            </Link>
            <Link
              to="https://github.com/MdAffanAlam"
              target="_blank"
              style={{ color: "whitesmoke" }}
            >
              <FaGithub size={24} style={{ padding: '0 4px'}} />
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <h3>Privacy Policy</h3>
          <p>
            Our privacy policy details can be found{" "}
            <Link to="#" style={{ color: "blueviolet" }}>
              here
            </Link>
            .
          </p>
        </div>
        <div className="date">
          © {new Date().getFullYear()} Copyright | ResumeCraft.com | All Rights
          reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
