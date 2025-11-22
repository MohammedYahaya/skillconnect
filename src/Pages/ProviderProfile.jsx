import React from "react";
import Navbar from "../Components/Navbar"


const ProviderProfile = () => {
  const provider = {
    name: "Ama Tailor",
    rating: 4.5,
    reviews: 45,
    location: "Kumasi",
    photo:
      "https://via.placeholder.com/400x300",
    bio: "Experienced fashion designer with 5+ years in tailoring, custom dresses, and traditional wear.",
    services: [
      { name: "Dress Sewing", price: "GHS 120" },
      { name: "Zip Replacement", price: "GHS 25" },
    ],
    portfolio: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    reviewsList: [
      { stars: 5, text: "Great work!" },
      { stars: 4, text: "Good but delayed" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Navbar />
      <button
        onClick={() => window.history.back()}
        className="mb-4 text-blue-600 font-medium"
      >
        ← Back
      </button>

      <div className="bg-white p-4 rounded-lg shadow mb-4 flex gap-4">
        <img
          src={provider.photo}
          alt={provider.name}
          className="w-40 h-40 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold">{provider.name}</h1>
          <p className="text-yellow-600 font-semibold">
            ⭐ {provider.rating} ({provider.reviews} reviews)
          </p>
          <p className="text-gray-600">
            📍 {provider.location}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="font-semibold text-lg mb-2">About</h2>
        <p className="text-gray-700">{provider.bio}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="font-semibold text-lg mb-2">Services & Pricing</h2>

        {provider.services.map((service, i) => (
          <div
            key={i}
            className="flex justify-between border-b py-2 last:border-none"
          >
            <span>{service.name}</span>
            <span className="font-semibold">{service.price}</span>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="font-semibold text-lg mb-3">Portfolio</h2>
        <div className="grid grid-cols-3 gap-2">
          {provider.portfolio.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Portfolio"
              className="w-full h-28 object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="font-semibold text-lg mb-3">Reviews</h2>
        {provider.reviewsList.map((rev, i) => (
          <div key={i} className="mb-3">
            <p className="text-yellow-600 font-semibold">
              {"⭐".repeat(rev.stars)}{" "}
              {"☆".repeat(5 - rev.stars)}
            </p>
            <p className="text-gray-700">{rev.text}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow">
        BOOK NOW
      </button>
    </div>
  );
};

export default ProviderProfile;
