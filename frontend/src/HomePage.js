import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
        🚍 E-Pass System
      </h1>

      {/* Card Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-96">
        <p className="text-gray-600 mb-6">Book your weekend bus pass online with ease.</p>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => navigate("/bus-search")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
