import "./App.css";
import React, { useState } from "react";
import FirstStep from "./Component/FirstStep";
import SecondStep from "./Component/SecondStep";
import ThirdStep from "./Component/ThirdStep";

import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { handleStep } from "./redux/reducer";

function App() {
  const { step } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialFormData = {
    fullName: "",
    telephone: "",
    state: "",
    city1: "",
    hotel1: "",
    social: "",
    date1: "",
    empAdd: "",
    gender: "",
    postalcode: "",
    civilstatus: "",
    degree: "",
    date2: "",
    salary: "",
    avgHour: "",
    posTitle: "",
    company: "",
    responsibility: "",
    incidentdetail: "",
    incidate: "",
    tdate: "",
    incidenthours: "",
    incidentminutes: "",
    incidentperiods: "",
    starthours: "",
    startminutes: "",
    startperiods: "",
    haveworker: "",
    state2: "",
    city2: "",
    hotel2: "",
    postalcode2: "",
    supervisior: "",
    four: "",
    bodyinjured: "",
    damage: "",
    reason: "",
    answer: "",
    state3: "",
    city3: "",
    postalcode3: "",
    medicalcenter: "",
    staffname: "",
    suit: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://16.171.34.145:5000/api/manager/add-accident-report",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok === false) {
        toast.error("Something went wrong");
      } else {
        toast.success("Accident Report Data Submitted Successfully");
        setFormData(initialFormData);
        dispatch(handleStep(1));
      }
    } catch (error) {
      toast.error("Error submitting form data:", error);
    }
  };
  //console.log(formData);

  return (
    <div className="App">
      <header className="App-header">
        {step === 1 && (
          <FirstStep formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <SecondStep formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <ThirdStep
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </header>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
