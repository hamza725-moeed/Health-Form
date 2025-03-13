import React from 'react'
import "../Form6/Form6.css";

export default function Form6({ setCurrentForm }) {
  return (
    <div>
       <div className="container-fluid secondform" style={{ maxWidth: "1440px" }}>
        <div className="container" style={{ maxWidth: "1125px" }}>
          <div className="backarrow" style={{ padding: "103px 0 0 10px", display: "flex", alignItems: "center" }}>
            <svg width="25" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="#000" strokeWidth="1" />
            </svg>
            <a 
              href="#" 
              onClick={() => setCurrentForm("form5")} 
              className="text-black poppins-regular"
              style={{ textDecoration: "none", marginLeft: "8px", fontSize: "18px", fontWeight: "400" }}
            >
              Back to website
            </a>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
  <div className="row d-flex flex-column align-items-center" style={{ maxWidth: "794px" }}>
    <h1 className="form6h1 inter" style={{ color: "#0048ff" }}>THANK YOU</h1>
    <h1 className="form6h2 inter">Thank you for confirming! Our representative will contact you within 24 hours regarding this custom package.</h1>
    <div className="d-flex justify-content-center">
      <img src="/Assests/contact 1.png" alt="" style={{ maxWidth: "482px", width: "100%", height: "auto" }} />
    </div>
  </div>
</div>
    </div>
  )
}
