// import React from "react";
import { useNavigate } from "react-router-dom";

function SelectPage() {
  const navigate = useNavigate();

  const handleSelection = (selection: string) => {
    localStorage.setItem("bookingSelection", selection);
    navigate("/booking/city");
  };

  return (
    <div>
      <h1>Select Your Booking</h1>
      <button onClick={() => handleSelection("car")}>Book a Car</button>
      <button onClick={() => handleSelection("house")}>Book a House</button>
    </div>
  );
}

export default SelectPage;
