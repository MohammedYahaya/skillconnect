import React, { useState } from "react";
import Navbar from "../Components/Navbar"


const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const bookings = [
    {
      id: 1,
      provider: "Ama Tailor",
      service: "Dress Sewing",
      date: "27 Nov, 2025",
      time: "4:00 PM",
      status: "Upcoming",
    },
    {
      id: 2,
      provider: "FixPro Plumbing",
      service: "Pipe Repair",
      date: "20 Nov, 2025",
      time: "10:00 AM",
      status: "Past",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              activeTab === "bookings" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            My Bookings
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "messages" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "payments" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("payments")}
          >
            Payments
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "reviews" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </li>
          <li
            className="cursor-pointer text-red-600 font-semibold mt-6"
            onClick={() => alert("Logged out")}
          >
            Logout
          </li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        {activeTab === "bookings" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Upcoming Bookings</h3>
            {bookings
              .filter((b) => b.status === "Upcoming")
              .map((b) => (
                <div
                  key={b.id}
                  className="bg-white p-4 rounded-lg shadow mb-4"
                >
                  <h4 className="font-semibold">{b.service}</h4>
                  <p>Provider: {b.provider}</p>
                  <p>
                    Date: {b.date} | Time: {b.time}
                  </p>
                </div>
              ))}

            <h3 className="text-xl font-bold mt-8 mb-4">Past Bookings</h3>
            {bookings
              .filter((b) => b.status === "Past")
              .map((b) => (
                <div
                  key={b.id}
                  className="bg-gray-50 p-4 rounded-lg shadow mb-4"
                >
                  <h4 className="font-semibold">{b.service}</h4>
                  <p>Provider: {b.provider}</p>
                  <p>
                    Date: {b.date} | Time: {b.time}
                  </p>
                </div>
              ))}
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Messages</h3>
            <p>No new messages</p>
          </div>
        )}

        {activeTab === "payments" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Payments</h3>
            <p>No pending payments</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Reviews</h3>
            <p>No reviews yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
