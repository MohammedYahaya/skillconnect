import Hero from "./Hero"
import Categories from "./Categories"
import Workflow from "./How it works"
import Provider from "./Provider"
import Happy from "./Happy"
import About from "./About"
import Navbar from "./Navbar"
import BecomeProvider from "./BecomeProvider"
import Faq from "./Faq"
import Footer from "./Footer"
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Home = () => {

	useEffect(()=>{

		gsap.registerPlugin(ScrollTrigger)
			
			ScrollTrigger.create({
  				trigger: ".panel",
  				start: "top top",
  				 onEnter: () => {
    const nav = document.querySelector(".nav");
    nav?.classList.add("isnav");
  },
          onLeaveBack: () =>{
            const nav = document.querySelector(".nav");
            nav?.classList.remove("isnav");
          }
});
		
	},[])
  return (
    <div className="panel">
     <Navbar />
     <Hero />
     <Workflow />
     <Categories />
     <Provider />
     <Happy />
     <About />
     <BecomeProvider />
     <Faq />
     <Footer />
    </div>
  )
}

export default Home;