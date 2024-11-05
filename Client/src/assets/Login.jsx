import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/images/login.jpg";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLock, FaPaperPlane, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form data being sent:", formData);
    axios
      .post("http://localhost:4000/login", formData)
      .then((res) => {
        if (res.data === "success") {
          toast.success("Login Successfully");
          setFormData({
            email: "",
            password: "",
          });
          // navigate("/");
        }else {
          toast.error("Incorrect Credentials");
        }
      })
      .catch((error) => {
        // console.error("Error during registration:", error);
        toast.error(`Login failed: ${error.response.data}`);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login-container">
      <ToastContainer position="top-center" theme="dark"/>
        <div className="sub-login-conatiner">
          <div className="left-side">
            <img src={loginImage} alt="Left Side" />
          </div>
          <div className="right-side">
            <form className="details-form-login">
              <h2>Login</h2>
              <div className="input-icon">
                <label htmlFor="email">
                  <MdOutlineMarkEmailUnread style={{ color: "orange" }} />{" "}
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-login-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-icon">
                <label htmlFor="password">
                  <FaLock style={{ color: "green" }} /> Password:
                </label>
                <div className="password-input-login">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
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
                <button type="submit" className="btn-login" onClick={handleSubmit}>
                  Login
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
