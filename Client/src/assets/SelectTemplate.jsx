import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SelectTemplate.css";

function SelectTemplate({ formData, setFormData }) {
  const [selectedTemplate, setSelectedTemplate] = useState(formData.template);

  const handleSelectTemplate = (templateNumber) => {
    setFormData({ ...formData, template: templateNumber });
    setSelectedTemplate(templateNumber);
  };

  return (
    <div className="main-template">
      <div
        className={`resume-template resume-1 ${
          selectedTemplate === "template-1" ? "selected" : ""
        }`}
      >
        <div className="resume-template-content">
          <h2 className="resume-title">Resume Template 1</h2>

          <Link to="/details">
            <button
              className="select-button"
              onClick={() => handleSelectTemplate("template-1")}
            >
              Select
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`resume-template resume-2 ${
          selectedTemplate === "template-2" ? "selected" : ""
        }`}
      >
        <div className="resume-template-content">
          <h2 className="resume-title">Resume Template 2</h2>
          <Link to="/details">
            <button
              className="select-button"
              onClick={() => handleSelectTemplate("template-2")}
            >
              Select
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`resume-template resume-3 ${
          selectedTemplate === "template-3" ? "selected" : ""
        }`}
      >
        <div className="resume-template-content">
          <h2 className="resume-title">Resume Template 3</h2>

          <Link to="/details">
            <button
              className="select-button"
              onClick={() => handleSelectTemplate("template-3")}
            >
              Select
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectTemplate;
