import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const busData = {
  "KA-01-1234": [
    { name: "Hostel", time: "7:30 AM" },
    { name: "Library", time: "7:45 AM" },
    { name: "Main Gate", time: "8:00 AM" },
  ],
  "KA-02-5678": [
    { name: "Hostel", time: "7:45 AM" },
    { name: "Auditorium", time: "8:00 AM" },
    { name: "Main Gate", time: "8:15 AM" },
  ],
};

function TripInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const busId = new URLSearchParams(location.search).get("bus");

  const stops = busData[busId] || [];

  return (
    <div>
      <h1>Trip Information for {busId}</h1>
      <h2>Trip Stops:</h2>
      <ul>
        {stops.map((stop, index) => (
          <li key={index}>
            {stop.name} - {stop.time}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(`/booking-form?bus=${busId}`)}>
        Proceed to Booking
      </button>
    </div>
  );
}

export default TripInfo;
