import React,{ useState } from "react";
import Navbar from "../Components/Navbar"


const BookingPage = () => {
  const services = [
    "Dress Sewing",
    "Zip Replacement",
    "Button Repair",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleBooking = () => {
    if (!service || !date || !time) {
      alert("Please complete all required fields");
      return;
    }

    console.log({
      provider: "Ama Tailor",
      service,
      date,
      time,
      notes,
    });

    alert("Booking confirmed!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">
        Booking: Ama Tailor
      </h1>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <label className="font-semibold block mb-2">
          Select Service
        </label>
        <select
          className="w-full border p-2 rounded"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Choose service...</option>
          {services.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <label className="font-semibold block mb-2">
          Select Date
        </label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <label className="font-semibold block mb-2">
          Select Time
        </label>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((t, i) => (
            <button
              key={i}
              onClick={() => setTime(t)}
              className={`p-2 border rounded text-center ${
                time === t
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <label className="font-semibold block mb-2">
          Notes (optional)
        </label>
        <textarea
          rows="4"
          className="w-full border p-2 rounded"
          placeholder="Any extra details..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button
        onClick={handleBooking}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
