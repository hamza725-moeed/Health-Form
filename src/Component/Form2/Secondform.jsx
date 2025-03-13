import React, { useState } from 'react';
import "../Form2/Secondform.css";

export default function Secondform({ setCurrentForm, setSelectedPlan }) {
  const [planType, setPlanType] = useState(""); // Stores the selected plan type
  const [showSpouseAgeBand, setShowSpouseAgeBand] = useState(false);

  const handlePlanChange = (event) => {
    const selectedValue = event.target.value;
    setPlanType(selectedValue);
    setSelectedPlan(selectedValue); // Pass the selection to Form3
  };

  // Function to handle radio button change for maternity coverage
  const handleMaternityChange = (event) => {
    setShowSpouseAgeBand(event.target.value === "yes");
  };

  return (
    <div>
      <div className="container-fluid secondform" style={{ maxWidth: "1440px" }}>
        <div className="container" style={{ maxWidth: '1125px' }}>
          <div className="backarrow" style={{
            width: "120px",
            height: "27px",
            paddingTop: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="25" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="#000" strokeWidth="1" />
            </svg>
            <a href="#" onClick={() => setCurrentForm("mentor")} className="text-black poppins-regular" style={{
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

        <div className="row secondform3" style={{ maxWidth: '1120px', minHeight: "500px" }}>
          <div className="secondform2 col-lg-6 col-md-6 col-sm-12" style={{ maxWidth: '640px', minHeight: "420px" }}>
            <div className="form-group pt-4">
              <p className='pb-0 mb-0 poppins-regular' style={{ fontSize: '18px', fontWeight: '400' }}>Your Plan</p>
              <select
                className="inputform pt-0 mt-1 selectform poppins-regular"
                style={{ height: "40px" }}
                value={planType}
                onChange={handlePlanChange}
              >
                <option value="" disabled>
                  Plan for
                </option>
                <option className='poppins-regular' value="unified">Unified Option</option>
                <option className='poppins-regular' value="customized">Customized Option</option>
              </select>
            </div>
            <div className="form-group pt-4">
              <p className='poppins-regular'>Do you want maternity coverage?</p>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="custom-radio">
                    <input type="radio" name="maternity" value="yes" onChange={handleMaternityChange} />
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                  </div>
                  <span className='poppins-regular' style={{ color: '#6F6F6F' }}>Yes</span>
                </label>

                <label className='px-3' style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="custom-radio">
                    <input type="radio" name="maternity" value="no" onChange={handleMaternityChange} />
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                  </div>
                  <span className='poppins-regular' style={{ color: '#6F6F6F' }}>No</span>
                </label>
              </div>
            </div>

            <div className="form-group pt-3">
              <p className='pb-0 mb-0 poppins-regular' style={{ fontSize: '18px', fontWeight: '400' }}>Plan Type</p>
              <select className="inputform pt-0 mt-1 selectform" style={{ height: '40px' }}>
                <option value="" disabled>Select Age</option>
                <option value="unified">8-12</option>
                <option value="customized">12-16</option>
                <option value="unified">16-22</option>
                <option value="customized">22-30</option>
                <option value="customized">30+</option>
              </select>
            </div>

            {showSpouseAgeBand && (
              <div className="form-group pt-3">
                <p className='pb-0 mb-0 poppins-regular' style={{ fontSize: '18px', fontWeight: '400' }}>Spouse age band</p>
                <select className="inputform pt-0 mt-1 selectform" style={{ height: '40px' }}>
                  <option value="" disabled>Select Age</option>
                  <option value="unified">8-12</option>
                  <option value="customized">12-16</option>
                  <option value="unified">16-22</option>
                  <option value="customized">22-30</option>
                  <option value="customized">30+</option>
                </select>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <button className='inter' onClick={() => setCurrentForm("form3")} style={{
                width: "105px",
                height: "42px",
                border: "1px solid #0048FE",
                borderRadius: "8px",
                backgroundColor: "#0048FE",
                fontSize: "14px",
                fontWeight: "400",
                color: 'white'
              }}>
                Next
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 secondform4">
            <h1 className='secondformh1 inter text-center'>Calculate Your Assurance</h1>
            <img src="/Assests/form.png" alt="" className='from-img' />
            <div className="btnfrom2 text-center">
              <button className='inter fbnd' style={{
                width: "125px",
                height: "42px",
                border: "1px solid #0048FE",
                borderRadius: "12px",
                backgroundColor: "#0048FE",
                fontSize: "15px",
                fontWeight: "400",
                color: 'white'
              }}>
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="container-fluid my-2">
        <div className="row">
          <h1 className='secondfromfooterh1 inter text-center' style={{ marginBottom: showSpouseAgeBand ? "0px" : "0px" }}>
            Note: Minimum number of spouses needs to be five in order to give the Maternity benefit.
          </h1>
        </div>
      </div>
    </div>
  );
}
