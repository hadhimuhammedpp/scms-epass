import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BusSearch from "./BusSearch";
import AvailableBuses from "./AvailableBuses";
import TripInfo from "./TripInfo";
import BookingForm from "./BookingForm";
import PaymentPage from "./PaymentPage";
import ConfirmationPage from "./ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bus-search" element={<BusSearch />} />
        <Route path="/available-buses" element={<AvailableBuses />} />
        <Route path="/trip-info" element={<TripInfo />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/payment/:busId" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
