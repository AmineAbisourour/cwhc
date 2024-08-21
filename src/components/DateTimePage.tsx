import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DateTimePage() {
  const [city, setCity] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCity = localStorage.getItem("city");
    if (!storedCity) {
      navigate("/booking/city"); // Redirect if no city
    } else {
      setCity(storedCity);
    }
  }, [navigate]);

  const handleDateTimeSelection = (dateTime: string) => {
    localStorage.setItem("dateTime", dateTime);
    navigate("/booking/phone");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  const combinedDateTime = `${selectedDate}T${selectedTime}:00`;

  return (
    <div>
      <h1>Select a date and time for {city}</h1>
      <label htmlFor="selectedDate">Select Date:</label>
      <input
        type="date"
        id="selectedDate"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="selectedTime">Select Time:</label>
      <input
        type="time"
        id="selectedTime"
        value={selectedTime}
        onChange={handleTimeChange}
      />
      <button
        onClick={() => handleDateTimeSelection(combinedDateTime)}
        disabled={!selectedDate || !selectedTime}
      >
        Select Date and Time
      </button>
    </div>
  );
}

export default DateTimePage;
