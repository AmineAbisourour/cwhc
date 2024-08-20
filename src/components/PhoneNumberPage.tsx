import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PhoneNumberPage = () => {
  const [countryCode, setCountryCode] = useState("US"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const countryCodes = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    // Add more country codes as needed
  ];

  const handlePhoneNumberSubmit = () => {
    // Basic phone number validation (you can use a more robust regex)
    const phoneRegex = /^\d{10}$/; // Basic US phone number format
    if (!phoneRegex.test(phoneNumber)) {
      // Handle invalid phone number
      console.error("Invalid phone number");
      return;
    }

    // Format phone number with country code
    const formattedPhoneNumber = `+${countryCode}${phoneNumber}`;

    // Handle phone number submission logic
    localStorage.setItem("phoneNumber", formattedPhoneNumber);
    navigate("/booking/summary");
  };

  // Access dateTime from localStorage on component mount
  useEffect(() => {
    const storedDateTime = localStorage.getItem("dateTime");
    if (!storedDateTime) {
      // Handle missing dateTime (redirect or error message?)
    }
  }, []);

  return (
    <div>
      <h1>Enter your phone number</h1>
      <select
        aria-label="Country Code"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handlePhoneNumberSubmit}>Next</button>
    </div>
  );
};

export default PhoneNumberPage;
