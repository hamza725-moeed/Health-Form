import React, { useState } from "react";
import "./App.css";
import Mentorform from "./Component/Form/Mentorform";
import Secondform from "./Component/Form2/Secondform";
import Navigation from "./Component/Navbar/Navigation";
import Form3 from "./Component/Form3/Form3";

function App() {
  const [currentForm, setCurrentForm] = useState("mentor");

  return (
    <>
      <Navigation />
      {currentForm === "mentor" && <Mentorform setCurrentForm={setCurrentForm} />}
      {currentForm === "secondform" && <Secondform setCurrentForm={setCurrentForm} />}
      {currentForm === "form3" && <Form3 setCurrentForm={setCurrentForm} />}
    </>
  );
}

export default App;
