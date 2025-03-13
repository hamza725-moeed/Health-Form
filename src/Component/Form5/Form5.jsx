import React, { useState, useEffect } from "react";
import "../Form5/Form5.css";

export default function Form5({ setCurrentForm }) {
  const totalSeconds = 40 * 60; // 40 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Calculate progress percentage
  const progress = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  // Format MM:SS time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
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
              onClick={() => setCurrentForm("form4")} 
              className="text-black poppins-regular"
              style={{ textDecoration: "none", marginLeft: "8px", fontSize: "18px", fontWeight: "400" }}
            >
              Back
            </a>
          </div>
        </div>
      </div>

<div className="container-fluid form51">
    <div className="container">
    <div className="container-fluid form51">
    <div className="container">
<div className="row form52">
    <div className="col-lg-3   form54" style={{display:'flex',flexDirection:'column'}}>
<h1 className="form5h1 inter">My Basic Info</h1>
<p className="form5p poppins-regular" style={{color:'black'}}> Full Name</p>
<p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> Hamza Moeed</p>
<p className="form5p poppins-regular" style={{color:'black'}}> Mobile No</p>
<p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> 03468502325</p>
<p className="form5p poppins-regular" style={{color:'black'}}> Email</p>
<p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> hamzasial725@gmail.com</p>
<p className="form5p poppins-regular" style={{color:'black'}}> Company Name</p>
<p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> Methologik</p>
    </div>
    <div className="col-lg-3 form54" style={{display:'flex',flexDirection:'column'}}>
        <h1 className="form5h1 inter">Assurance For</h1>
        <p className="form5p poppins-regular" style={{color:'black'}}> Plan For</p>
        <p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> Employee and Spouses</p>
        <p className="form5p poppins-regular" style={{color:'black'}}> Maternity</p>
        <p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> Yes</p>
        <p className="form5p poppins-regular" style={{color:'black'}}> Plan Category</p>
<p className="form5p poppins-regular" style={{color:'#BBBCBE'}}> Customized Plan</p>
        </div>
        <div className="col-lg-3 form54">
        <img src="/Assests/vector (20).png" alt="" className='from5-img' />
        </div>
</div>
    </div>
</div>
    </div>
</div>

<div className="container-fluid form51" style={{ maxWidth: "1440px", }}>
  <div className="container" style={{ maxWidth: "925px"  }}>
  <div className="row align-items-start g-5">
    <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-start">
  <h1 className="discount-text inter" style={{ color: "#293FCC", textAlign: "left" }}>Buy Now & Get A</h1>
  <div className="imgbox d-flex align-items-center flex-lg-row flex-column w-100">
  <img 
    src="/Assests/percentdiscont.png" 
    alt="" 
    className="form5img2 mb-0 mb-lg-0" 
    style={{ marginRight: "0px" }} 
  />
  <h1 
    className="discount-text w-100 text-lg-start text-end inter" 
    style={{ paddingBottom: "15px" }}
  >
    Discount
  </h1>
</div>
{/* timer */}
<div className="timer-container">
      <svg className="circle-svg" viewBox="0 0 100 100">
        {/* Dotted Circle */}
        <circle className="dotted-circle" cx="50" cy="50" r="45" />

        {/* Progress Path */}
        <circle
          className="progress-circle"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="282.74" // Full circumference (2 * π * 45)
          strokeDashoffset={(1 - progress / 100) * 282.74} // Adjust for progress
        />
      </svg>

      {/* Timer Display */}
      <div className="timer-text">{formatTime(timeLeft)}</div>
    </div>

</div>
<div className="col-lg-6 col-sm-12" >
  <h1 className="text-start inter">Customize Plans</h1>
  <div className="boxfrom5 d-flex justify-content-start gap-4">
    <div
      style={{
        width: "140px",
        border: "2px solid #0048ff",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#f8f9fa",
        height: "auto",
      }}
      className="plan-box poppins-regular"
    >
      <div
        className="box-title text-center poppins-regular"
        style={{
          backgroundColor: "#293FCC",
          padding: "8px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <h1
          className="poppins-regular"
          style={{ fontSize: "18px", fontWeight: "500", color: "white" }}
        >
          Plan A
        </h1>
      </div>
      <div className="boxtext">
        <div className="price-box">
          <p className="poppins-regular" style={{ fontSize: "18px", fontWeight: "600" }}>
            <span>RS:</span> <span>782,238</span>
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        width: "140px",
        border: "2px solid #0048ff",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#f8f9fa",
        height: "auto",
      }}
      className="plan-box poppins-regular"
    >
      <div
        className="box-title text-center poppins-regular"
        style={{
          backgroundColor: "#293FCC",
          padding: "8px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <h1
          className="poppins-regular"
          style={{ fontSize: "18px", fontWeight: "500", color: "white" }}
        >
          Plan B
        </h1>
      </div>
      <div className="boxtext">
        <div className="price-box">
          <p className="poppins-regular" style={{ fontSize: "18px", fontWeight: "600" }}>
            <span>RS:</span> <span>582,238</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Maternity Plans Section (Left Aligned) */}
  <h1 className="text-start mt-4 inter">Maternity Plans</h1>
  <div className="boxfrom5 d-flex justify-content-start gap-4">
    <div
      style={{
        width: "140px",
        border: "2px solid #0048ff",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#f8f9fa",
        height: "auto",
      }}
      className="plan-box poppins-regular"
    >
      <div
        className="box-title text-center poppins-regular"
        style={{
          backgroundColor: "#293FCC",
          padding: "8px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <h1
          className="poppins-regular"
          style={{ fontSize: "18px", fontWeight: "500", color: "white" }}
        >
          Plan A
        </h1>
      </div>
      <div className="boxtext">
        <div className="price-box">
          <p className="poppins-regular" style={{ fontSize: "18px", fontWeight: "600" }}>
            <span>RS:</span> <span>582,238</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Packages Total Section (Left Aligned) */}
  <div className="d-flex justify-content-start my-4">
    <div className="packagestotal text-start">
      <h1 className="packh1 inter">Packages Total</h1>
      <h1 className="packh2 poppins-regular" style={{ color: "#0048FE" }}>Rs: 1,397,452</h1>
      <button
        className="inter"
        onClick={() => setCurrentForm("form6")}
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
        Buy Now
      </button>
    </div>
  </div>
</div>


    </div>
  </div>
</div>

    </div>
  )
}
