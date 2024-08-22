import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MatDes from "./components/MatDes";
import SelectPage from "./components/SelectPage";
import CitySelectionPage from "./components/CitySelectionPage";
import DateTimePage from "./components/DateTimePage";
import PhoneNumberPage from "./components/PhoneNumberPage";
import SummaryPage from "./components/SummaryPage";
import ConfirmationPage from "./components/ConfirmationPage";
import LandingPage from "./components/landing-page";
import BookingPage from "./components/BookingPage";
import BookingComponent from "./components/BookingComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/booking/select" replace />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking1" element={<BookingComponent />} />
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
