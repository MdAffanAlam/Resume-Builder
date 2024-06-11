import React, { useState } from "react";
import "./Signup.css";
import SignupImage from '../assets/images/signup.jpg';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPaperPlane,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="sub-signup-conatiner">
        <div className="left-side">
          <form className="details-form-signup">
            <h2>Signup</h2>
            <div className="input-icon">
              <label htmlFor="name">
                <FaUser style={{color:"blue"}}/> Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-signup-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-icon">
              <label htmlFor="email">
              <MdOutlineMarkEmailUnread style={{ color: 'orange' }}/> Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-signup-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-icon">
              <label htmlFor="password">
                <FaLock style={{ color: 'green' }}/> Password:
              </label>
              <div className="password-input-signup">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-signup-control"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="input-icon">
              <label htmlFor="confirm-password">
                <FaLock style={{ color: 'green' }}/> Confirm Password:
              </label>
              <div className="password-input-signup">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  className="form-signup-control"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="btn-center">
              <button type="submit" className="btn-signup">
                Register <FaPaperPlane />
              </button>
            </div>
          </form>
          <div className="signup-link">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
        <div className="right-side">
          <img src={SignupImage}alt="Right Side" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
