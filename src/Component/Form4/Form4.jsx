import React, { useState } from "react";
import "../Form4/Form4.css";

export default function Form4({ setCurrentForm }) {
  const [valuesPlanA1, setValuesPlanA1] = useState([0, 0, 0, 0, 0]);
  const [valuesPlanA2, setValuesPlanA2] = useState([0, 0, 0, 0, 0]);

  const handleIncrementPlanA1 = (index) => {
    setValuesPlanA1((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] += 1;
      return newValues;
    });
  };

  const handleDecrementPlanA1 = (index) => {
    setValuesPlanA1((prevValues) => {
      const newValues = [...prevValues];
      if (newValues[index] > 0) {
        newValues[index] -= 1;
      }
      return newValues;
    });
  };

  const handleIncrementPlanA2 = (index) => {
    setValuesPlanA2((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] += 1;
      return newValues;
    });
  };

  const handleDecrementPlanA2 = (index) => {
    setValuesPlanA2((prevValues) => {
      const newValues = [...prevValues];
      if (newValues[index] > 0) {
        newValues[index] -= 1;
      }
      return newValues;
    });
  };

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
              onClick={() => setCurrentForm("form3")} 
              className="text-black poppins-regular"
              style={{ textDecoration: "none", marginLeft: "8px", fontSize: "18px", fontWeight: "400" }}
            >
              Back
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">

<div className="container-fluid d-flex flex-column align-items-center" style={{ margin: "auto", width: "100%" }}>
  
  <div style={{ maxWidth: "880px", width: "100%", textAlign: "left", }}>
    <h1 className="claculatorh1 my-4 inter">Calculate Your Assurance</h1>
  </div>
         <div
  className="row form4main1"
  style={{
    border: "1px solid black",
    borderRadius: "10px",
    display: "flex", justifyContent:'center', alignItems:'center', margin:'auto'
  }}
>
              <p className=" poppins-regular slectp">Your Selected Plan Is Unified</p>
              <div className="col-lg-4 collg4  col-sm-6 col-md-4 poppins-regular">
                <div className="box-title text-center"
                  style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: "blue",
                    color: "white",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Age Band
                </div>
                <div className="lives"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    padding: "5px 10px",}}>
                  <p style={{ margin: "18px 0", paddingBottom: "5px", borderBottom: "1px solid #ccc" }}>0-17</p>
                  <p style={{ margin: "18px 0", paddingBottom: "5px", borderBottom: "1px solid #ccc" }}>18-29</p>
                  <p style={{ margin: "18px 0", paddingBottom: "5px", borderBottom: "1px solid #ccc" }}>40-49</p>
                  <p style={{ margin: "18px 0", paddingBottom: "5px", borderBottom: "1px solid #ccc" }}>60-64</p>
                  <p style={{ margin: "18px 0" }}>65</p>
                </div>
              </div>
              <div className="col-lg-4 collg4  col-sm-6 col-md-4">
                <div className="box-title text-center poppins-regular"
                  style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: "black",
                    color: "white",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan A (Lives)
                </div>
                <div className="lives"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    borderBottomRightRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  {valuesPlanA1.map((num, index) => (
                    <div key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderBottom: index !== 4 ? "1px solid #ccc" : "none",
                      }}
                    >
                      <p style={{ margin: "0", flex: 1, textAlign: "left", fontSize: "14px" }}>{num}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                        <p style={{ margin: "0", fontSize: "14px", cursor: "pointer" }} onClick={() => handleIncrementPlanA1(index)}>+</p>
                        <p style={{ margin: "0", fontSize: "14px", cursor: "pointer" }} onClick={() => handleDecrementPlanA1(index)}>-</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 collg4  col-sm-6 col-md-4">
                <div className="box-title text-center poppins-regular"
                  style={{
                    width: "200px",
                    height: "50px",
                    backgroundColor: "black",
                    color: "white",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Plan A (Lives)
                </div>
                <div className="lives"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    borderBottomRightRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  {valuesPlanA2.map((num, index) => (
                    <div key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px 10px",
                        borderBottom: index !== 4 ? "1px solid #ccc" : "none",
                      }}
                    >
                      <p style={{ margin: "0", flex: 1, textAlign: "left", fontSize: "14px" }}>{num}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                        <p style={{ margin: "0", fontSize: "14px", cursor: "pointer" }} onClick={() => handleIncrementPlanA2(index)}>+</p>
                        <p style={{ margin: "0", fontSize: "14px", cursor: "pointer" }} onClick={() => handleDecrementPlanA2(index)}>-</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container py-3" style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}}>
  <div
  className="row footer2"
>
  <h1 className="fh1 inter"
    style={{
      margin: "0",
      flex: "1", 
    }}
  >
    Note: Package details without premium coverage will continue.
  </h1>

    <button
      className="inter fbnd"
      onClick={() => setCurrentForm("form5")}
      style={{
        width: "105px",
        height: "42px",
        border: "1px solid #0048FE",
        borderRadius: "8px",
        backgroundColor: "#0048FE",
        fontSize: "14px",
        fontWeight: "400",
        color: "white",
      }}
    >
      Next
    </button>
</div>
</div>

    </div>
  );
}
