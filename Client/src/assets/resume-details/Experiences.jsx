import React from "react";
import "./Experiences.css";
import { FaBuilding, FaBriefcase, FaRegFileAlt, FaClock } from "react-icons/fa";

const Experiences = ({ formData, setFormData }) => {
  const resetForm = () => {
    setFormData({
      exp1_org: "",
      exp1_pos: "",
      exp1_desc: "",
      exp1_dur: "",
      exp2_org: "",
      exp2_pos: "",
      exp2_desc: "",
      exp2_dur: "",
    });
  };

  return (
    <>
      <div className="experience-main-container">
        <form className="form-details-expe">
          <div className="experience-info">
            <div className="first-experience">
              <h3 className="first">First Experience</h3>
              <div className="org-name">
                <label htmlFor="exp1_org" className="form-lebel-expe">
                  <FaBuilding className="icon-expe" style={{ color: "blue" }} />{" "}
                  Organization:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp1_org"
                  placeholder="Enter Organization Name"
                  value={formData.exp1_org}
                  onChange={(e) => {
                    setFormData({ ...formData, exp1_org: e.target.value });
                  }}
                />
              </div>
              <div className="position">
                <label htmlFor="exp1_pos" className="form-lebel-expe">
                  <FaBriefcase
                    className="icon-expe"
                    style={{ color: "orange" }}
                  />{" "}
                  Position:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp1_pos"
                  placeholder="Enter Position"
                  value={formData.exp1_pos}
                  onChange={(e) => {
                    setFormData({ ...formData, exp1_pos: e.target.value });
                  }}
                />
              </div>
              <div className="description">
                <label htmlFor="exp1_desc" className="form-lebel-expe">
                  <FaRegFileAlt
                    className="icon-expe"
                    style={{ color: "green" }}
                  />{" "}
                  Description:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp1_desc"
                  placeholder="Enter Some Description"
                  value={formData.exp1_desc}
                  onChange={(e) => {
                    setFormData({ ...formData, exp1_desc: e.target.value });
                  }}
                />
              </div>
              <div className="duration">
                <label htmlFor="exp1_dur" className="form-lebel-expe">
                  <FaClock className="icon-expe" style={{ color: "purple" }} />{" "}
                  Duration:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp1_dur"
                  placeholder="Enter Work Duration"
                  value={formData.exp1_dur}
                  onChange={(e) => {
                    setFormData({ ...formData, exp1_dur: e.target.value });
                  }}
                />
              </div>
              <div className="reset-btn">
                <button
                  className="button-reset"
                  type="button"
                  onClick={resetForm}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="second-experience">
              <h3 className="second">Second Experience</h3>
              <div className="org-name">
                <label htmlFor="exp2_org" className="form-lebel-expe">
                  <FaBuilding className="icon-expe" style={{ color: "blue" }} />{" "}
                  Organization:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp2_org"
                  placeholder="Enter Organization Name"
                  value={formData.exp2_org}
                  onChange={(e) => {
                    setFormData({ ...formData, exp2_org: e.target.value });
                  }}
                />
              </div>
              <div className="position">
                <label htmlFor="exp2_pos" className="form-lebel-expe">
                  <FaBriefcase
                    className="icon-expe"
                    style={{ color: "orange" }}
                  />{" "}
                  Position:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp2_pos"
                  placeholder="Enter Postion"
                  value={formData.exp2_pos}
                  onChange={(e) => {
                    setFormData({ ...formData, exp2_pos: e.target.value });
                  }}
                />
              </div>
              <div className="description">
                <label htmlFor="exp2_desc" className="form-lebel-expe">
                  <FaRegFileAlt
                    className="icon-expe"
                    style={{ color: "green" }}
                  />{" "}
                  Description:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp2_desc"
                  placeholder="Enter Some Description"
                  value={formData.exp2_desc}
                  onChange={(e) => {
                    setFormData({ ...formData, exp2_desc: e.target.value });
                  }}
                />
              </div>
              <div className="duration">
                <label htmlFor="exp2_dur" className="form-lebel-expe">
                  <FaClock className="icon-expe" style={{ color: "purple" }} />{" "}
                  Duration:
                </label>
                <input
                  type="text"
                  className="form-control-expe"
                  id="exp2_dur"
                  placeholder="Enter Work Duration"
                  value={formData.exp2_dur}
                  onChange={(e) => {
                    setFormData({ ...formData, exp2_dur: e.target.value });
                  }}
                />
              </div>
              <div className="reset-btn">
                <button
                  className="button-reset"
                  type="button"
                  onClick={resetForm}
                >
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

export default Experiences;
