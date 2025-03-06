import React from "react";
import { useNavigate } from "react-router-dom";

const buses = [
  {
    id: "KA-01-1234",
    seatsLeft: 5,
    pickupTime: "7:30 AM",
    destinationTime: "6:45 PM",
    stops: [
      { name: "Hostel", time: "7:30 AM" },
      { name: "Library", time: "7:45 AM" },
      { name: "Main Gate", time: "8:00 AM" },
    ],
  },
  {
    id: "KA-02-5678",
    seatsLeft: 3,
    pickupTime: "7:45 AM",
    destinationTime: "7:00 PM",
    stops: [
      { name: "Hostel", time: "7:45 AM" },
      { name: "Auditorium", time: "8:00 AM" },
      { name: "Main Gate", time: "8:15 AM" },
    ],
  },
];

function AvailableBuses() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Available Buses</h1>
      <p>Destination: City Center | Date: {new Date().toISOString().split("T")[0]}</p>
      {buses.map((bus) => (
        <div key={bus.id} style={{ marginBottom: "20px" }}>
          <h2
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => navigate(`/booking-form?bus=${bus.id}`)}
          >
            {bus.id}
          </h2>
          <p>Seats Left: {bus.seatsLeft}</p>
          <p>
            Pickup: {bus.pickupTime} | Destination: {bus.destinationTime}
          </p>
          <button onClick={() => navigate(`/trip-info?bus=${bus.id}`)}>
            View Trip Info
          </button>
        </div>
      ))}
    </div>
  );
}

export default AvailableBuses;
