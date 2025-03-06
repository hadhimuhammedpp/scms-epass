import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { busId } = useParams(); // Get Bus ID from the URL
  const [upiApp, setUpiApp] = useState(""); // Store selected UPI option

  const handlePayment = () => {
    if (!upiApp) {
      alert("Please select a UPI payment method.");
      return;
    }

    // Simulate UPI Payment URL (replace with actual UPI deep link)
    const upiUrl = `upi://pay?pa=yourupi@upi&pn=BusService&mc=1234&tid=987654321&tr=TXN123456&tn=BusBooking&am=100&cu=INR`;

    // Open Payment App (simulate redirect)
    window.location.href = upiUrl;

    // Redirect to confirmation page after payment
    setTimeout(() => {
      navigate(`/confirmation?bus=${busId}`);
    }, 5000); // Simulated delay (user paying)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 shadow-lg w-96 text-center bg-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Complete Payment</h1>
        <p>Bus ID: <strong>{busId}</strong></p>
        <p>Amount: ₹100</p>

        {/* UPI Payment Options */}
        <div className="mt-4">
          <label className="block mb-2">
            <input type="radio" name="upi" value="Google Pay" onChange={(e) => setUpiApp(e.target.value)} />
            Google Pay
          </label>
          <label className="block mb-2">
            <input type="radio" name="upi" value="PhonePe" onChange={(e) => setUpiApp(e.target.value)} />
            PhonePe
          </label>
          <label className="block mb-2">
            <input type="radio" name="upi" value="Paytm" onChange={(e) => setUpiApp(e.target.value)} />
            Paytm
          </label>
        </div>

        {/* Pay Now Button */}
        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
