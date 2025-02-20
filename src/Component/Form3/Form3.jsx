import React from "react";
import "../Form3/Form3.css";


export default function Form3({ setCurrentForm }) {
  return (
    <div className="container-fluid secondform" style={{ maxWidth: "1440px" }}>
      <div className="container" style={{ maxWidth: "1125px" }}>
        <div className="backarrow" style={{
          width: "120px",
          height: "27px",
          paddingTop: "53px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <svg width="25" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="#000" strokeWidth="1" />
          </svg>
          <a href="#" onClick={() => setCurrentForm("secondform")} className="text-black poppins-regular" style={{
            textDecoration: "none",
            marginLeft: "8px",
            marginTop: "-3px",
            fontSize: "18px",
            fontWeight: "400"
          }}>
            Back
          </a>
        </div>
      </div>

      <div className="row secondform3" style={{ maxWidth: "1120px" }}>
        <div className="secondform2 col-lg-6 col-md-6 col-sm-12" style={{ maxWidth: "640px", height: "388px" }}>
          <h1 className="secondformh1 inter">Plan Categories</h1>
<div className="boxes">
    <div className="box1 mt-4">
<h1 className="form3h1 inter pt-3">Unified Plan</h1>
<p  className="form3p inter pt-4">Age</p>
<h3 className="form3h3 inter">18-29</h3>
    </div>
    <div className="box1 mt-4">
    <h1 className="form3h1 inter pt-3">Customize Plan</h1>
<p className="form3p inter pt-4">Age</p>
<h3 className="form3h3 inter">18-29</h3>
    </div>
</div>
          <div className="form-group pt-3">
            <p className="pb-0 mb-0 poppins-regular" style={{ fontSize: "18px", fontWeight: "400" }}>Numbers of lives</p>
            <select className="inputform pt-0 mt-1 selectform" style={{ height: "40px",  }}>
              <option value="" disabled selected>Select lives</option>
              <option value="8-12">8-12</option>
              <option value="12-16">12-16</option>
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
            <button className="inter" style={{
              width: "105px",
              height: "42px",
              border: "1px solid #BBBCBE",
              borderRadius: "8px",
              backgroundColor: "#BBBCBE",
              fontSize: "14px",
              fontWeight: "400",
              color: "white"
            }}>
              Next
            </button>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 secondform4">
          <img src="/Assests/form.png" alt="" className="from-img" />
        </div>
      </div>
    </div>
  );
}
