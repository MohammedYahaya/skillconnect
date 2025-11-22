import React from 'react'
import Navbar from "../Components/Navbar"


const Contact = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Navbar />
            <form className="contact-form flex flex-col gap-6 justify-center items-center w-full max-w-md mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100">
  <div className="flex flex-col w-full">
    <label htmlFor="name" className="text-gray-700 font-medium mb-2 text-left">
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="phone" className="text-gray-700 font-medium mb-2 text-left">
      Phone Number
    </label>
    <input
      type="tel"
      name="phone"
      id="phone"
      placeholder="Enter your phone number"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="message" className="text-gray-700 font-medium mb-2 text-left">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      placeholder="Write a message..."
      rows="5"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    ></textarea>
  </div>

  <button
    type="submit"
    className="mb-4 herobtn mt-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
  >
    Send Message
  </button>
</form>

    </section>
  )
}

export default Contact;