import React from "react";
import "./Sample.css";
import { Link } from "react-router-dom";

function Sample() {
  return (
    <>
      <div className="sample-container">
          <div className="sample-text"><h2>Some Examples Templates:</h2></div>
        <div className="sample-content">
          <div className="grid-box box-1">
            <h3 className="use-template">Use Template</h3>
            <button className="use-template-btn">
              <Link to="/details">Click Here</Link>
            </button>
          </div>
          <div className="grid-box box-2">
            <h3 className="use-template">Use Template</h3>
            <button className="use-template-btn">
              <Link to="/details">Click Here</Link>
            </button>
          </div>
          <div className="grid-box box-3">
            <h3 className="use-template">Use Template</h3>
            <button className="use-template-btn">
              <Link to="/details">Click Here</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sample;
