import React, { useState } from "react";
import "../Form/Mentorform.css";

export default function Mentorform({ setCurrentForm }) {
  const [selectedCode, setSelectedCode] = useState("+92");

  return (
    <div>
      <div
        className="container-fluid mainform"
        style={{
          maxWidth: "1440px",
        
        }}
      >
      <div className="container" style={{
        maxWidth:'1125px'
      }}>

      
        <div className="backarrow" style={{ width: "120px", height: "27px",  paddingTop: "53px", display: "flex", alignItems: "center", justifyContent: "center",
          
         }}>
  <svg width="25" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="#000" stroke-width="1"/>
  </svg>
  <a href="" className="text-black poppins-regular" style={{ textDecoration: "none", marginLeft: "8px", marginTop: "-3px", fontSize:'18px', fontWeight:"400" }} > Back </a>
</div>
</div>
        <div
          className="row mainform2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "922px",
            paddingTop: "88px",
          
            height: "483px",
            margin:'auto'
          }}
        >
          <div className="formh1 mb-3" style={{}}>
            <h1 className="formh1 inter">My Basic Info</h1>
          </div>
          <div
            className="form-container"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              paddingTop: "20px",
              maxWidth:'922px'
            }}
          >
            {/* First Column */}
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              style={{ flex: 1,}}
            >
              <div className="form-group">
                <p className="formp poppins-regular">First Name</p>
                <input type="text" className="inputform poppins-regular" placeholder="First name" style={{
                   border:'1px solid black', height:'40px'
                }}/>
              </div>

              <div className="form-group">
      <p className="formp poppins-regular">Mobile No</p>
      <div className="phone-input " >
        {/* Country Code Dropdown */}
        <select
          className="country-code px-1 poppins-regular"
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
        >
          <option value="+92">+92</option>
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+971">+971</option>
        </select>

        {/* Mobile Number Input */}
        <input
          type="text"
          className="inputform1 poppins-regular"
          placeholder="Enter mobile number"
           style={{
            minWidth:'222px', border:'1px solid black', height:'40px'
           }}
        />
      </div>
    </div>

              <div className="form-group">
                <p className="formp poppins-regular">Company</p>
                <input type="text" className="inputform poppins-regular"  placeholder="Company name"  style={{
                  border:'1px solid black', height:'40px'
                }}/>
              </div>
            </div>

            {/* Second Column */}
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              style={{ flex: 1,}}
            >
              <div className="form-group">
                <p className="formp poppins-regular">Last Name</p>
                <input type="text" className="inputform poppins-regular" placeholder="Last name"   style={{
                border:'1px solid black', height:'40px'
                }}/>
              </div>

              <div className="form-group ">
                <p className="formp poppins-regular">Email</p>
                <input type="text" className="inputform poppins-regular"  placeholder="em@il"   style={{
            border:'1px solid black', height:'40px'
                }}/>
              </div>
            </div>
          </div>
          <div
            className="row mt-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth:'922px'
            }}
          >
            <button className="inter"
              style={{
                width: "105px",
                height: "42px",
                border: "1px solid black",
                borderRadius: "8px",
                backgroundColor: "#BBBCBE",
                fontSize: "14px",
                fontWeight: "400",
                color:'white'
              }}
            >
              Back
            </button>
            <button className="inter" onClick={() => setCurrentForm("secondform")} 
              style={{
                width: "105px",
                height: "42px",
                border: "1px solid #0048FE",
                borderRadius: "8px",
                backgroundColor: "#0048FE",
                fontSize: "14px",
                fontWeight: "400",
                color:'white'
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
