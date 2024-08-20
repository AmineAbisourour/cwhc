import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SummaryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (!storedPhoneNumber) {
      navigate("/booking/phone"); // Redirect if no phone number
    }
  }, [navigate]);

  const handleStartOver = () => {
    localStorage.clear(); // Clear all stored data
    navigate("/booking/select");
  };

  const handleConfirm = () => {
    // Handle booking confirmation logic here, e.g., API call, database update
    console.log("Booking confirmed!"); // Replace with actual confirmation logic
    localStorage.clear(); // Clear data after confirmation
    navigate("/booking/confirmation"); // Redirect to confirmation page
  };

  return (
    <div>
      <h1>Booking Summary</h1>
      <p>Selection: {localStorage.getItem("bookingSelection")}</p>
      <p>City: {localStorage.getItem("city")}</p>
      <p>Date and Time: {localStorage.getItem("dateTime")}</p>
      <p>Phone Number: {localStorage.getItem("phoneNumber")}</p>
      <button onClick={handleStartOver}>Start Over</button>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}

export default SummaryPage;
