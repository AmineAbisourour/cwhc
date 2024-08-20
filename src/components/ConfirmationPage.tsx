import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Redirect to homepage or another desired page
    navigate("/");
  };

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Your booking has been successfully confirmed.</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default ConfirmationPage;
