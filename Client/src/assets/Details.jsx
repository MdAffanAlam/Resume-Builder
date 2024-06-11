import React, { useState } from "react";
import Education from "./resume-details/Education";
import Experiences from "./resume-details/Experiences";
import PersonalDetails from "./resume-details/PersonalDetails";
import Project from "./resume-details/Project";
import Extras from "./resume-details/Extras";
import Success from "./resume-details/Success";
import TemplateSelection from "./SelectTemplate";
import axios from "axios";
import { saveAs } from "file-saver";
import "./Details.css";
import { FaArrowRight, FaArrowLeft, FaDownload } from "react-icons/fa";

const Details = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    template: "",
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",
    exp1_org: "",
    exp1_pos: "",
    exp1_desc: "",
    exp1_dur: "",
    exp2_org: "",
    exp2_pos: "",
    exp2_desc: "",
    exp2_dur: "",
    proj1_title: "",
    proj1_link: "",
    proj1_desc: "",
    proj2_title: "",
    proj2_link: "",
    proj2_desc: "",
    edu1_school: "",
    edu1_year: "",
    edu1_qualification: "",
    edu1_desc: "",
    edu2_school: "",
    edu2_year: "",
    edu2_qualification: "",
    edu2_desc: "",
    extra_1: "",
    extra_2: "",
  });

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Select Template",
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <TemplateSelection formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="text-center">{FormTitle[page]}</h1>
      </div>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "16.67%"
                : page === 1
                ? "33.33%"
                : page === 2
                ? "50%"
                : page === 3
                ? "66.67%"
                : page === 4
                ? "83.33%"
                : "100%",
          }}
        ></div>
      </div>
      <div>{PageDisplay()}</div>
      <div className="d-flex justify-content-center gap-3 py-5">
        <button
          className="btn-main btn-prev-dark"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          <FaArrowLeft style={{ marginRight: "5px" }} /> Prev
        </button>
        <button
          className="btn-main btn-next-primary"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              console.log("Form Data:", formData);

              axios
                .post("https://resume-builder-1-m12b.onrender.com/create-pdf", {
                  template: formData.template,
                  data: formData,
                })
                .then(() =>
                  axios.get(
                    "https://resume-builder-1-m12b.onrender.com/fetch-pdf",
                    {
                      responseType: "blob",
                    }
                  )
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                })
                .catch((error) => {
                  // Log the error for debugging purposes
                  console.error(
                    "Error during PDF generation:",
                    error.response?.data || error.message || error
                  );
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? (
            <>
              Download Pdf <FaDownload style={{ marginLeft: "5px" }} />
            </>
          ) : (
            <>
              Next <FaArrowRight style={{ marginLeft: "5px" }} />
            </>
          )}
        </button>
      </div>
      {success && <Success />}
    </div>
  );
};

export default Details;
