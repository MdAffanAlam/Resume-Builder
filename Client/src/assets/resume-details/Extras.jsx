import React from "react";
import { FaLanguage, FaHeart } from 'react-icons/fa';
import "./Extras.css";

const Extras = ({ formData, setFormData }) => {
  const resetForm = () => {
    setFormData({
      extra_1: "",
      extra_2: "",
    });
  };

  return (
    <>
      <div className="extra-main-container">
        <form className="form-details-extra">
          <div className="extra-first-info">
            <h3>Languages you can speak:</h3>
            <label htmlFor="extra_1" className="form-label-extra">
              <FaLanguage style={{ color: 'blue' }} /> Languages
            </label>
            <input
              type="text"
              className="form-control-extra"
              id="extra_1"
              placeholder="Enter the languages you can speak"
              value={formData.extra_1}
              onChange={(e) => {
                setFormData({ ...formData, extra_1: e.target.value });
              }}
            />
          </div>
          
          <div className="extra-second-info">
            <h3>Things you like to do:</h3>
            <label htmlFor="extra_2" className="form-label-extra">
              <FaHeart style={{ color: 'red' }} /> Hobbies
            </label>
            <input
              type="text"
              className="form-control-extra"
              id="extra_2"
              placeholder="Enter your hobbies"
              value={formData.extra_2}
              onChange={(e) => {
                setFormData({ ...formData, extra_2: e.target.value });
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

export default Extras;
