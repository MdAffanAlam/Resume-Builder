import React from "react";
import "./PersonalDetails.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const PersonalDetails = ({ formData, setFormData }) => {
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      skills: ""
    });
  };

  return (
    <>
      <div className="PersonalDetails-main-container">
        <form className="form-details-PersonalDetails">
          <div className="user-data name-content">
            <label htmlFor="name" className="label">
              <CgProfile style={{ color: 'blue' }}/>  Name :
            </label>
            <input
              type="text"
              className="form-input-control"
              id="name"
              placeholder="Enter your name "
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div className="user-data email-content">
            <label htmlFor="Email" className="label">
              <MdOutlineMarkEmailUnread style={{ color: 'orange' }}/> Email:
            </label>
            <input
              type="email"
              className="form-input-control"
              id="Email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className="user-data phone-number">
            <label htmlFor="phone" className="label">
              <FaPhoneVolume style={{ color: 'green' }}/> Phone:
            </label>
            <input
              type="text"
              className="form-input-control"
              id="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
          </div>
          
          <div className="user-data github-link">
            <label htmlFor="github" className="label">
              <FaGithub style={{ color: 'black' }}/> Github:
            </label>
            <input
              type="text"
              className="form-input-control"
              id="github"
              placeholder="https://github/YOURUSERNAME"
              value={formData.github}
              onChange={(e) => {
                setFormData({ ...formData, github: e.target.value });
              }}
            />
          </div>
          <div className="user-data linkedIn-link">
            <label htmlFor="LinkedIn" className="label">
              <FaLinkedin style={{ color: 'blue' }}/> LinkedIn:
            </label>
            <input
              type="text"
              className="form-input-control"
              id="LinkedIn"
              placeholder="https://linkedIn/YOURUSERNAME"
              value={formData.linkedin}
              onChange={(e) => {
                setFormData({ ...formData, linkedin: e.target.value });
              }}
            />
          </div>
          <div className="user-data skills">
            <label htmlFor="Skills" className="label">
              <GiSkills style={{ color: 'purple' }}/> Skills:
            </label>
            <input
              type="text"
              className="form-input-control"
              id="Skills"
              placeholder="Enter skills and separate each of them with a comma "
              value={formData.skills}
              onChange={(e) => {
                setFormData({ ...formData, skills: e.target.value });
              }}
            />
          </div>
          <div className="reset-btn">
            <button className="button-reset" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
