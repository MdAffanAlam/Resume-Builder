import React, { useState } from "react";
import "./Signup.css";
import SignupImage from "../assets/images/signup.jpg";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({name:'', email: '', password: '',confirmPassword: ''});
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
      .post("http://localhost:4000/register", formData)
      .then((res) => {
        if (res.data === "success") {
          // console.log("Registration Successfully");
          // navigate("/", { state: { registrationSuccess: true } });
          // navigate("/")
          toast.success("Registration Successfully");
          setFormData({name:'', email: '', password: '',confirmPassword: ''});
        } else {
          // console.log("Registration failed:", res.data);
          toast.error("Registration failed");
        }
      })
      .catch((error) => {
        // console.error("Error during registration:", error);
        toast.error(`Registration failed: ${error.response.data.errors}`);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <ToastContainer position="top-center" theme="dark"/>
      <div className="sub-signup-conatiner">
        <div className="left-side">
          <form className="details-form-signup">
            <h2>Signup</h2>
            <div className="input-icon">
              <label htmlFor="name">
                <FaUser style={{ color: "blue" }} /> Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-signup-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-icon">
              <label htmlFor="email">
                <MdOutlineMarkEmailUnread style={{ color: "orange" }} /> Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-signup-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-icon">
              <label htmlFor="password">
                <FaLock style={{ color: "green" }} /> Password:
              </label>
              <div className="password-input-signup">
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
            <div className="input-icon">
              <label htmlFor="confirm-password">
                <FaLock style={{ color: "green" }} /> Confirm Password:
              </label>
              <div className="password-input-signup">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
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
              <button
                type="submit"
                className="btn-signup"
                onClick={handleSubmit}
              >
                Register <FaPaperPlane />
              </button>
            </div>
          </form>
          <div className="signup-link">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
        <div className="right-side">
          <img src={SignupImage} alt="Right Side" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
