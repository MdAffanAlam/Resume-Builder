import React from "react";
import "./About.css";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaStar,
  FaImage,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to ResumeCraft, your go-to destination for crafting
          professional and impactful resumes. Our mission is to empower job
          seekers by providing an easy-to-use platform that helps you create
          polished and compelling resumes that stand out in today's competitive
          job market. Our team of career experts and tech enthusiasts are
          committed to delivering cutting-edge tools and personalized guidance
          to support you in every step of your job search journey. Whether
          you're entering the workforce for the first time or looking to advance
          your career, ResumeCraft is here to help you showcase your skills and
          achievements with confidence.
        </p>
      </section>

      <section className="feedback-container">
        <div className="sub-feedback-container">
          <div className="feedback-form-left">
            <h2>Feedback</h2>
            <form>
              <div className="input-group">
                <label htmlFor="name">
                  <FaUser style={{ color: "blue" }} /> Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-feedback-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="profession">
                  <FaBriefcase style={{ color: "brown" }} /> Profession:
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  className="form-feedback-control"
                  placeholder="Enter your profession"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="description">
                  <FaComment style={{ color: "green" }} /> Write Reviews:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-feedback-control"
                  placeholder="Enter your description"
                  required
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="rating">
                  <FaStar style={{ color: "gold" }} /> Rating:
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  className="form-feedback-control"
                  placeholder="Enter your rating"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="images">
                  <FaImage style={{ color: "purple" }} /> Images:
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="form-feedback-control"
                  multiple
                  required
                />
              </div>
              <button className="btn-feedback-form">
                Submit <FaPaperPlane />
              </button>
            </form>
          </div>
          <div className="feedback-image">
            <img src="./src/images/feedback.jpg" alt="Feedback" />
          </div>
        </div>
      </section>

      <section className="contact-container">
        <div className="sub-contact-container">
          <div className="contact-image">
            <img src="./src/images/contact.jpg" alt="Contact Us" />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="input-group">
                <label htmlFor="name">
                  <FaUser style={{ color: "blue" }} /> Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-feedback-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">
                  <FaEnvelope style={{ color: "rebeccapurple" }} /> Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-feedback-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">
                  <FaComment style={{ color: "green" }} /> Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-feedback-control"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button className="btn-contact-form">
                Send <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
