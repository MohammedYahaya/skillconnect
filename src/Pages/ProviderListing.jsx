import React, { useState } from "react";
import Navbar from "../Components/Navbar"


const ProviderListing = () => {
  const [search, setSearch] = useState("");

  const categories = [
    "Plumbing",
    "Tailoring",
    "Barbering",
    "Electricals",
    "Mobile Repairs",
    "Decorations",
  ];

  const providers = [
    {
      id: 1,
      name: "FixPro Plumbing",
      category: "Plumbing",
      rating: 4.5,
      price: "$$",
      location: "Accra",
      image:
        "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Stitch Master",
      category: "Tailoring",
      rating: 4.8,
      price: "$$",
      location: "Kumasi",
      image:
        "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      <div className="w-full flex mt-12 items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
        <h1 className="text-2xl font-bold">Providers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Filter
        </button>
      </div>

      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="Search providers..."
          className="w-full p-3 border rounded-lg bg-white shadow"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow h-fit">
          <h2 className="font-bold mb-3">Filters</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Category</h3>
            {categories.map((cat, index) => (
              <label key={index} className="flex items-center space-x-2 mb-1">
                <input type="checkbox" />
                <span>{cat}</span>
              </label>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input type="range" min="1" max="5" className="w-full" />
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Rating</h3>
            <input type="range" min="1" max="5" className="w-full" />
          </div>

          <div>
            <h3 className="font-semibold mb-2">Availability</h3>
            <select className="w-full p-2 border rounded">
              <option>Any time</option>
              <option>Weekends</option>
              <option>Weekdays</option>
              <option>Today</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers
            .filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((provider) => (
              <div
                key={provider.id}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold">{provider.name}</h3>
                <p className="text-gray-600">{provider.category}</p>
                <p className="text-yellow-600 font-semibold">
                  ⭐ {provider.rating}
                </p>
                <p className="text-sm text-gray-500">{provider.location}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderListing;
