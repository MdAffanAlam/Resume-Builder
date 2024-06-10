import React from "react";
import { FaSchool, FaCalendarAlt, FaGraduationCap, FaRegFileAlt } from "react-icons/fa";
import "./Education.css";

const Education = ({ formData, setFormData }) => {
  const resetForm = () => {
    setFormData({
      edu1_school: "",
      edu1_year: "",
      edu1_qualificatin: "",
      edu1_desc: "",
      edu2_school: "",
      edu2_year: "",
      edu2_qualificatin: "",
      edu2_desc: ""
    });
  };

  return (
    <>
      <div className="education-main-container">
        <form className="form-details-education">
          <div className="institue-info">
            <div className="first-institue">
              <h3 className="first">First Education</h3>
              <div className="institue-name margin">
                <label htmlFor="edu1_name" className="form-label">
                  <FaSchool className="icon" style={{ color: 'blue' }} /> Institute name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu1_name"
                  placeholder="Enter Institute Name"
                  value={formData.edu1_school}
                  onChange={(e) => {
                    setFormData({ ...formData, edu1_school: e.target.value });
                  }}
                />
              </div>
              <div className="grad-year margin">
                <label htmlFor="edu1_year" className="form-label">
                  <FaCalendarAlt className="icon" style={{ color: 'orange' }} /> Graduation Year:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu1_year"
                  placeholder="Enter Graduation Year"
                  value={formData.edu1_year}
                  onChange={(e) => {
                    setFormData({ ...formData, edu1_year: e.target.value });
                  }}
                />
              </div>
              <div className="degree margin">
                <label htmlFor="edu1_degree" className="form-label">
                  <FaGraduationCap className="icon" style={{ color: 'green' }} /> Degree:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu1_degree"
                  placeholder="Enter Your Degree"
                  value={formData.edu1_qualificatin}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      edu1_qualificatin: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="degree-desc margin">
                <label htmlFor="edu1_desc" className="form-label">
                  <FaRegFileAlt className="icon" style={{ color: 'purple' }} /> Description:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu1_desc"
                  placeholder="Enter Some Description"
                  value={formData.edu1_desc}
                  onChange={(e) => {
                    setFormData({ ...formData, edu1_desc: e.target.value });
                  }}
                />
              </div>
              <div className="reset-btn">
                <button className="button-reset" type="button" onClick={resetForm}>
                  Reset
                </button>
              </div>
            </div>
            <div className="second-institue">
              <h3 className="second">Second Education</h3>
              <div className="institue-name margin">
                <label htmlFor="edu2_name" className="form-label">
                  <FaSchool className="icon" style={{ color: 'blue' }} /> Institute name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu2_name"
                  placeholder="Enter Institute Name"
                  value={formData.edu2_school}
                  onChange={(e) => {
                    setFormData({ ...formData, edu2_school: e.target.value });
                  }}
                />
              </div>
              <div className="grad-year margin">
                <label htmlFor="edu2_year" className="form-label">
                  <FaCalendarAlt className="icon" style={{ color: 'orange' }} /> Graduation Year:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="edu2_year"
                  placeholder="Enter Graduation Year"
                  value={formData.edu2_year}
                  onChange={(e) => {
                    setFormData({ ...formData, edu2_year: e.target.value });
                  }}
                />
              </div>
              <div className="degree margin">
                <label htmlFor="edu2_degree" className="form-label">
                  <FaGraduationCap className="icon" style={{ color: 'green' }} /> Degree:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu2_degree"
                  placeholder="Enter Your Degree"
                  value={formData.edu2_qualificatin}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      edu2_qualificatin: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="degree-desc margin">
                <label htmlFor="edu2_desc" className="form-label">
                  <FaRegFileAlt className="icon" style={{ color: 'purple' }} /> Description:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edu2_desc"
                  placeholder="Enter Some Description"
                  value={formData.edu2_desc}
                  onChange={(e) => {
                    setFormData({ ...formData, edu2_desc: e.target.value });
                  }}
                />
              </div>
              <div className="reset-btn">
                <button className="button-reset" type="button" onClick={resetForm}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Education;
