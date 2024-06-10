import React from "react";
import { FaProjectDiagram, FaLink, FaPen } from 'react-icons/fa';
import './Project.css';

const Project = ({ formData, setFormData }) => {
  const resetForm = () => {
    setFormData({
      proj1_title: "",
      proj1_link: "",
      proj1_desc: "",
      proj2_title: "",
      proj2_link: "",
      proj2_desc: ""
    });
  };

  return (
    <>
      <div className="project-main-container">
        <form className="form-details-project">
          <div className="project-first-info">
            <label htmlFor="proj1_title" className="form-label-project">
              <FaProjectDiagram style={{ color: 'blue' }} /> Project Title:
            </label>
            <input
              type="text"
              className="form-control-project"
              id="proj1_title"
              placeholder="Enter the title of your project"
              value={formData.proj1_title}
              onChange={(e) => {
                setFormData({ ...formData, proj1_title: e.target.value });
              }}
            />

            <label htmlFor="proj1_link" className="form-label-project">
              <FaLink style={{ color: 'green' }} /> Project Link:
            </label>
            <input
              type="text"
              className="form-control-project"
              id="proj1_link"
              placeholder="Enter the link for your project"
              value={formData.proj1_link}
              onChange={(e) => {
                setFormData({ ...formData, proj1_link: e.target.value });
              }}
            />

            <label htmlFor="proj1_desc" className="form-label-project">
              <FaPen style={{ color: 'orange' }} /> Project Description:
            </label>
            <textarea
              className="form-control-project"
              id="proj1_desc"
              placeholder="Enter a description for your project"
              value={formData.proj1_desc}
              onChange={(e) => {
                setFormData({ ...formData, proj1_desc: e.target.value });
              }}
            ></textarea>
            <div className="reset-btn">
                <button className="button-reset" type="button" onClick={resetForm}>
                  Reset
                </button>
              </div>
          </div>

          <div className="project-second-info">
            <label htmlFor="proj2_title" className="form-label-project">
              <FaProjectDiagram style={{ color: 'blue' }} /> Project Title:
            </label>
            <input
              type="text"
              className="form-control-project"
              id="proj2_title"
              placeholder="Enter the title of your project"
              value={formData.proj2_title}
              onChange={(e) => {
                setFormData({ ...formData, proj2_title: e.target.value });
              }}
            />

            <label htmlFor="proj2_link" className="form-label-project">
              <FaLink style={{ color: 'green' }} /> Project Link:
            </label>
            <input
              type="text"
              className="form-control-project"
              id="proj2_link"
              placeholder="Enter the link for your project"
              value={formData.proj2_link}
              onChange={(e) => {
                setFormData({ ...formData, proj2_link: e.target.value });
              }}
            />

            <label htmlFor="proj2_desc" className="form-label-project">
              <FaPen style={{ color: 'orange' }} /> Project Description:
            </label>
            <textarea
              className="form-control-project"
              id="proj2_desc"
              placeholder="Enter a description for your project"
              value={formData.proj2_desc}
              onChange={(e) => {
                setFormData({ ...formData, proj2_desc: e.target.value });
              }}
            ></textarea>
            <div className="reset-btn">
                <button className="button-reset" type="button" onClick={resetForm}>
                  Reset
                </button>
              </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Project;
