import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cities = ["New York", "Los Angeles", "Chicago", "Houston"];

function CitySelectionPage() {
  const [selection, setSelection] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSelection = localStorage.getItem("bookingSelection");
    if (!storedSelection) {
      navigate("/booking/select"); // Redirect if no selection
    } else {
      setSelection(storedSelection);
    }
  }, [navigate]);

  const handleCitySelection = (city: string) => {
    localStorage.setItem("city", city);
    navigate("/booking/datetime");
  };

  return (
    <div>
      <h1>Select a city for {selection}</h1>
      {cities.map((city) => (
        <button key={city} onClick={() => handleCitySelection(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default CitySelectionPage;
