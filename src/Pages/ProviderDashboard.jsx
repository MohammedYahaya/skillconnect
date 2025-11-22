import React, { useState } from "react";
import Navbar from "../Components/Navbar"


const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const bookings = [
    {
      id: 1,
      client: "John Doe",
      service: "Dress Sewing",
      date: "27 Nov, 2025",
      time: "4:00 PM",
      amount: 120,
      status: "Upcoming",
    },
    {
      id: 2,
      client: "Mary Smith",
      service: "Zip Replacement",
      date: "20 Nov, 2025",
      time: "11:00 AM",
      amount: 25,
      status: "Completed",
    },
  ];

  const earningsThisMonth = bookings
    .filter((b) => b.status === "Completed")
    .reduce((total, b) => total + b.amount, 0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Provider Dashboard</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              activeTab === "profile" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            My Profile
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "services" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("services")}
          >
            My Services
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "bookings" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            Bookings
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "portfolio" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "analytics" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("analytics")}
          >
            Analytics
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "financing" ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("financing")}
          >
            Tool Financing
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
        {activeTab === "profile" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Earnings Summary</h3>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <p className="text-2xl font-bold text-green-600">
                GHS {earningsThisMonth} this month
              </p>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Bookings List</h3>
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between"
              >
                <div>
                  <h4 className="font-semibold">{b.service}</h4>
                  <p>Client: {b.client}</p>
                  <p>
                    Date: {b.date} | Time: {b.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">GHS {b.amount}</p>
                  <p
                    className={`${
                      b.status === "Upcoming"
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {b.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "analytics" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Analytics Charts</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>📊 Charts go here (e.g., earnings, bookings trends)</p>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div>
            <h3 className="text-xl font-bold mb-4">My Services</h3>
            <p>No services yet</p>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p>No portfolio items yet</p>
          </div>
        )}

        {activeTab === "financing" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Tool Financing</h3>
            <p>No financing requests yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;
