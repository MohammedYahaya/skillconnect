import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from "./Components/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Register"
import ProviderListing from "./Pages/ProviderListing"
import ProviderProfile from "./Pages/ProviderProfile"
import BookingPage from "./Pages/BookingPage"
import PaymentPage from "./Pages/PaymentPage"
import ClientDashboard from "./Pages/ClientDashboard"
import ProviderDashboard from "./Pages/ProviderDashboard"
import Contact from "./Pages/Contact"



import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  }, [])

  return (
    <div className="">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/providers" element={<ProviderListing />}></Route>
            <Route path="/Provider-profile" element={<ProviderProfile />}></Route>
            <Route path="/Booking-page" element={<BookingPage />}></Route>
            <Route path="/Payment-page" element={<PaymentPage />}></Route>
            <Route path="/Client-dashboard" element={<ClientDashboard />}></Route>
            <Route path="/Provider-dashboard" element={<ProviderDashboard />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
