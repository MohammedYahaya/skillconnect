import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Categories from "./Components/Categories"
import Workflow from "./Components/How it works"
import Provider from "./Components/Provider"
import Happy from "./Components/Happy"
import About from "./Components/About"






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
     <Navbar />
     <Hero />
     <Workflow />
     <Categories />
     <Provider />
     <Happy />
     <About />
    </div>
  )
}
