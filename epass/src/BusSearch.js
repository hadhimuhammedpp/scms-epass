import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusSearch = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = () => {
    if (destination && date) {
      navigate(`/available-buses?destination=${destination}&date=${date}`);
    } else {
      alert("Please select a destination and date.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 shadow-lg w-96 text-center bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Search for Buses</h1>

        {/* Destination Dropdown */}
        <select
          className="w-full p-2 mb-4 border rounded"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          <option value="City Center">City Center</option>
          <option value="Station">Station</option>
          <option value="Mall">Mall</option>
        </select>

        {/* Date Input */}
        <input
          type="date"
          className="w-full p-2 mb-4 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Search Button */}
        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search Bus
        </button>
      </div>
    </div>
  );
};

export default BusSearch;
