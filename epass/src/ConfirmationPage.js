import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const busId = new URLSearchParams(location.search).get("bus");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 shadow-lg w-96 text-center bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-green-600">Payment Successful ✅</h1>
        <p>Your bus pass has been booked for <strong>{busId}</strong>.</p>
        <p>Transaction ID: TXN123456</p>
        
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
