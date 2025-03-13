import React, { useState } from "react";
import "./App.css";
import Mentorform from "./Component/Form/Mentorform";
import Secondform from "./Component/Form2/Secondform";
import Navigation from "./Component/Navbar/Navigation";
import Form3 from "./Component/Form3/Form3";
import Form4 from "./Component/Form4/Form4";
import Form5 from "./Component/Form5/Form5";
import Form6 from "./Component/Form6/Form6";

function App() {
  const [currentForm, setCurrentForm] = useState("mentor");
  const [selectedPlan, setSelectedPlan] = useState(""); // State for storing the selected plan

  return (
    <>
      <Navigation />
      {currentForm === "mentor" && <Mentorform setCurrentForm={setCurrentForm} />}
      {currentForm === "secondform" && (
        <Secondform setCurrentForm={setCurrentForm} setSelectedPlan={setSelectedPlan} />
      )}
      {currentForm === "form3" && <Form3 setCurrentForm={setCurrentForm} selectedPlan={selectedPlan} />}
      {currentForm === "form4" && <Form4 setCurrentForm={setCurrentForm} />}
      {currentForm === "form5" && <Form5 setCurrentForm={setCurrentForm} />}
      {currentForm === "form6" && <Form6 setCurrentForm={setCurrentForm} />}
    </>
  );
}

export default App;
