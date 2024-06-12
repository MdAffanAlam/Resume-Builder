import React, { useState } from "react";
import "./Login.css";
import loginImage from '../assets/images/login.jpg';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  FaLock,
  FaPaperPlane,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <><div className="login-container">
      <div className="sub-login-conatiner">
        <div className="left-side">
          <img src={loginImage} alt="Left Side" />
        </div>
        <div className="right-side">
          <form className="details-form-login">
            <h2>Login</h2>
            <div className="input-icon">
              <label htmlFor="email">
              <MdOutlineMarkEmailUnread style={{ color: 'orange' }}/> Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-login-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-icon">
              <label htmlFor="password">
                <FaLock style={{ color: 'green' }}/> Password:
              </label>
              <div className="password-input-login">
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
            <div className="btn-center">
              <button type="submit" className="btn-login">
                Submit
                <span>
                  <FaPaperPlane />
                </span>
              </button>
            </div>
          </form>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
