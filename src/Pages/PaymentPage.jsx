import React, { useState } from "react";
import Navbar from "../Components/Navbar"

const PaymentPage = () => {
  const [method, setMethod] = useState("momo");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 text-center">
        Payment Checkout
      </h2>

      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h3 className="font-semibold mb-2">Payment Summary</h3>
        <p>Service: Dress Sewing</p>
        <p>Provider: Ama Tailor</p>
        <p>Price: <strong>GHS 120</strong></p>
        <p>Date: 27 Nov, 2025</p>
        <p>Time: 4:00 PM</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Select Payment Method</h3>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            value="momo"
            checked={method === "momo"}
            onChange={() => setMethod("momo")}
          />
          MTN Mobile Money
        </label>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            value="vodafone"
            checked={method === "vodafone"}
            onChange={() => setMethod("vodafone")}
          />
          Vodafone Cash
        </label>

        <label className="flex items-center gap-2 mb-2">
          <input
            type="radio"
            value="card"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          Visa / Mastercard
        </label>
      </div>

      {(method === "momo" || method === "vodafone") && (
        <div className="mb-6">
          <label className="block mb-2 font-medium">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter MoMo number"
            className="w-full border p-2 rounded-md mb-4"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Send Payment Prompt
          </button>
        </div>
      )}

      {method === "card" && (
        <div className="mb-6">
          <label className="block mb-2 font-medium">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full border p-2 rounded-md mb-4"
          />

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-medium">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border p-2 rounded-md mb-4"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-medium">CVV</label>
              <input
                type="password"
                placeholder="123"
                className="w-full border p-2 rounded-md mb-4"
              />
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
