import React, { useState } from "react";
import "../Form3/Form3.css";

export default function Form3({ setCurrentForm, selectedPlan }) {
  const [selectedHealthPlans, setSelectedHealthPlans] = useState([]);
  const [selectedMaternityPlans, setSelectedMaternityPlans] = useState([]);

  const healthPlansData = {
    "Plan A": { hrLimits: "1,000,000", accidentCoverage: "100%", roomBoard: "25,000" },
    "Plan B": { hrLimits: "800,000", accidentCoverage: "90%", roomBoard: "20,000" },
    "Plan C": { hrLimits: "600,000", accidentCoverage: "85%", roomBoard: "15,000" },
    "Plan D": { hrLimits: "400,000", accidentCoverage: "80%", roomBoard: "10,000" },
    "Plan E": { hrLimits: "200,000", accidentCoverage: "75%", roomBoard: "5,000" },
    "Plan F": { hrLimits: "100,000", accidentCoverage: "70%", roomBoard: "3,000" },
  };

  const maternityPlans = [
    { name: "Plan A", normal: 150000, complicated: 250000 },
    { name: "Plan B", normal: 160000, complicated: 260000 },
    { name: "Plan C", normal: 170000, complicated: 270000 },
    { name: "Plan D", normal: 180000, complicated: 280000 },
    { name: "Plan E", normal: 190000, complicated: 290000 },
    { name: "Plan F", normal: 200000, complicated: 300000 },
  ];

  // Handle Health Plan Selection
  const handleSelectHealthPlan = (event) => {
    const selectedPlan = event.target.value;
    if (selectedPlan && !selectedHealthPlans.includes(selectedPlan)) {
      setSelectedHealthPlans([...selectedHealthPlans, selectedPlan]);
    }
  };

  // Remove Health Plan
  const handleRemoveHealthPlan = (plan) => {
    setSelectedHealthPlans(selectedHealthPlans.filter((p) => p !== plan));
  };

  // Handle Maternity Plan Selection
  const handleSelectMaternityPlan = (e) => {
    const selectedPlan = maternityPlans.find((plan) => plan.name === e.target.value);
    if (selectedPlan && !selectedMaternityPlans.some((p) => p.name === selectedPlan.name)) {
      setSelectedMaternityPlans([...selectedMaternityPlans, selectedPlan]);
    }
  };

  // Remove Maternity Plan
  const removeMaternityPlan = (planName) => {
    setSelectedMaternityPlans(selectedMaternityPlans.filter((plan) => plan.name !== planName));
  };

  return (
    <div className="container-fluid secondform" style={{ maxWidth: "1440px" }}>
      <div className="container" style={{ maxWidth: "1125px" }}>
        <div className="backarrow" style={{ padding: "103px 0 0 10px", display: "flex", alignItems: "center" }}>
          <svg width="25" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="#000" strokeWidth="1" />
          </svg>
          <a href="#" onClick={() => setCurrentForm("secondform")} className="text-black poppins-regular"
            style={{ textDecoration: "none", marginLeft: "8px", fontSize: "18px", fontWeight: "400" }}>
            Back
          </a>
        </div>
      </div>

      <div className="row">
        <h1 className="text-center claculatorh1 my-4 inter">Calculate Your Assurance</h1>
      </div>

      <div className="container claculate1">
        <div className="row" style={{ border: "1px solid black", padding: "20px", display: 'flex', justifyContent: "space-between", borderRadius: '5px' }}>
          <div className="col-lg-4 col-sm-12" style={{ backgroundColor: "#F2F4FC", padding: "20px", borderRadius: '10px' }}>
          <h1 className="claculatorh2 poppins-regular">Your Selected Plan Is {selectedPlan === "customized" ? "Custom" : "Unified"}.</h1>
            
            {selectedPlan === "customized" }
            <p className="claculatorp1 poppins-regular">Your Plan Category</p>

            <select className="selcted1 inputform" onChange={handleSelectHealthPlan} style={{ padding: "8px", fontSize: "16px", borderRadius: "5px" }}>
              <option value="" className=" poppins-regular">Select</option>
              {Object.keys(healthPlansData).map((plan) => (
                <option key={plan} value={plan}>{plan}</option>
              ))}
            </select>

            <div style={{ marginTop: "20px" }}>
              {selectedHealthPlans.map((plan, index) => (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  backgroundColor: "#F2F4FC", padding: "8px", marginBottom: "5px",
                  borderRadius: "5px", maxWidth: "250px",minWidth:'100px', border:'1px solid #293FCC'
                }} key={index} className="selected-plan">
                  <span className=" poppins-regular" style={{ fontSize: "16px", fontWeight: "500" }}>{plan}</span>
                  <button   style={{
                    background: "none", border: "none", fontSize: "18px",
                    fontWeight: "bold", cursor: "pointer", color: "black"
                  }} onClick={() => handleRemoveHealthPlan(plan)}>×</button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 d-flex flex-wrap gap-3 mt-sm-4 calculator23 ">
            {selectedHealthPlans.map((plan, index) => (
            <div
            style={{
              width: '220px',
              height: 'auto',
              border: "1px solid #0048ff",
              borderRadius: '10px',
              backgroundColor: "#f8f9fa",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            key={index}
            className="plan-box poppins-regular"
          >
            <div
              className="box-title text-center poppins-regular"
              style={{
                backgroundColor: '#293FCC',
                padding: '12px',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
              }}
            >
              <h1 className=" poppins-regular" style={{ fontSize: '18px', fontWeight: '500', color: 'white', margin: 0 }}>
                {plan}
              </h1>
            </div>
          
            <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px',paddingTop:'5px' }}>
                <p className=" poppins-regular" style={{ fontSize: '14px', margin: '0' }}>H&R Limits <br />(/person & /year)</p>
                <p className=" poppins-regular" style={{ fontSize: '14px', fontWeight: '500', margin: '0', color: '#000000' }}>
                  {healthPlansData[plan].hrLimits}
                </p>
              </div>
          
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px',paddingTop:'5px' }}>
                <p className=" poppins-regular" style={{ fontSize: '14px', margin: '0' }}>HR limits in case of <br />accidental accidents</p>
                <p className="v" style={{ fontSize: '14px', fontWeight: '500', margin: '0', color: '#000000' }}>
                  {healthPlansData[plan].accidentCoverage}
                </p>
              </div>
          
              <div style={{ display: 'flex', justifyContent: 'space-between',paddingTop:'5px' }}>
                <p className=" poppins-regular" style={{ fontSize: '14px', fontWeight: '500', margin: '0', color: '#000000' }}>Room & Board (/day)</p>
                <p className=" poppins-regular" style={{ fontSize: '14px', fontWeight: '500', margin: '0', color: '#000000' }}>
                  {healthPlansData[plan].roomBoard}
                </p>
              </div>
            </div>
          </div>
          
            ))}
          </div>
        </div>
      </div>
      <div className="container claculate1 mt-3">
        <div className="row" style={{ border: "1px solid black", padding: "20px", display: 'flex', justifyContent: "space-between", borderRadius: '5px' }}>
          <div className="col-lg-4 col-sm-12" style={{ backgroundColor: "#F2F4FC", padding: "20px", borderRadius: '10px' }}>
            <h1 className="claculatorh2 poppins-regular">Your Maternity Plan</h1>
            <p className="claculatorp1 poppins-regular">Your Plan Category</p>

            <select className="selcted1 inputform" onChange={handleSelectMaternityPlan} style={{ padding: "8px", fontSize: "16px", borderRadius: "5px" }}>
              <option value="" className=" poppins-regular">Select</option>
              {maternityPlans.map((plan) => (
                <option className=" poppins-regular" key={plan.name} value={plan.name}>{plan.name}</option>
              ))}
            </select>

            <div style={{ marginTop: "20px" }}>
              {selectedMaternityPlans.map((plan) => (
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  backgroundColor: "#F2F4FC", padding: "8px", marginBottom: "5px",
                  borderRadius: "5px", maxWidth: "250px",minWidth:'100px', border:'1px solid #293FCC'
                }} key={plan.name} className="selected-plan">
                  <span className=" poppins-regular" style={{ fontSize: "16px", fontWeight: "500" }}>{plan.name}</span>
                  <button  style={{
                    background: "none", border: "none", fontSize: "18px",
                    fontWeight: "bold", cursor: "pointer", color: "black"
                  }} onClick={() => removeMaternityPlan(plan.name)}>×</button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex flex-wrap gap-3 mt-sm-4 calculator23">
            {selectedMaternityPlans.map((plan) => (
              <div  style={{
                width: '220px', border: "1px solid #0048ff", borderRadius: '10px',
                backgroundColor: "#f8f9fa", height:'130px',
              }} key={plan.name} className="plan-box poppins-regular">
                 <div className="box-title text-center poppins-regular" style={{
                  backgroundColor: '#293FCC', padding: '8px', borderTopRightRadius: '10px', borderTopLeftRadius:'10px'
                }}>
                <h1 className=" poppins-regular" style={{ fontSize: '18px', fontWeight: '500', color: 'white' }}>{plan.name}</h1>
                </div> 
                <div className="boxtext">
  <div className="price-box">
    <p className=" poppins-regular"><span>Normal:</span> <span className="price">{plan.normal}</span></p>
    <p className=" poppins-regular"><span>Complicated:</span> <span className="price">{plan.complicated}</span></p>
  </div>
</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
  className="row py-3 foter3"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%'
  }}
>
  <h1
    className="fh1 inter"
    style={{
      margin: '0',
      flex: '1',
      textAlign: 'left' 
    }}
  >
    Note: Package details without premium coverage will continue.
  </h1>

  <button
    className="inter fbnd"
    onClick={() => setCurrentForm("form4")}
    style={{
      width: "105px",
      height: "42px",
      border: "1px solid #0048FE",
      borderRadius: "8px",
      backgroundColor: "#0048FE",
      fontSize: "14px",
      fontWeight: "400",
      color: 'white'
    }}
  >
    Next
  </button>
</div>


    </div>
  );
}
