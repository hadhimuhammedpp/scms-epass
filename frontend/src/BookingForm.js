import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const busId = new URLSearchParams(location.search).get("bus");
  const [name, setName] = useState("");
  const [seat, setSeat] = useState(1);

  const handleBooking = (e) => {
    e.preventDefault(); // Prevents page reload

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Redirect to Payment Page
    navigate(`/payment/${busId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 shadow-lg w-96 text-center bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
        <p>You are booking a seat on <strong>{busId || "N/A"}</strong>.</p>

        <form onSubmit={handleBooking}>
          <label className="block mb-2">Enter Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="w-full p-2 border rounded mb-4"
          />

          <label className="block mb-2">Select Seat:</label>
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={seat} 
            onChange={(e) => setSeat(e.target.value)} 
            required 
            className="w-full p-2 border rounded mb-4"
          />

          <button 
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
