import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SelectPage from "./components/SelectPage";
import CitySelectionPage from "./components/CitySelectionPage";
import DateTimePage from "./components/DateTimePage";
import PhoneNumberPage from "./components/PhoneNumberPage";
import SummaryPage from "./components/SummaryPage";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/booking/select" replace />} />
        <Route path="/booking/select" element={<SelectPage />} />
        <Route path="/booking/city" element={<CitySelectionPage />} />
        <Route path="/booking/datetime" element={<DateTimePage />} />
        <Route path="/booking/phone" element={<PhoneNumberPage />} />
        <Route path="/booking/summary" element={<SummaryPage />} />
        <Route path="/booking/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
