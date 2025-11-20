import React,{useEffect} from "react";
import aboutImage from "../Images/latino-hair-salon-owner-taking-care-client (1).webp"; // replace with your image
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const About = () => {

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".aboutImage",{
      x:0,
      opacity:1,
      ease:"sine.inOut",
      scrollTrigger:{
        trigger:".aboutImage",
        start:"top 70%",
        end:"top top",
      }
    })

    const aboutElement = gsap.utils.toArray(".about-element")

    aboutElement.forEach((element)=>{
            gsap.to(element,{
              x:0,
              opacity:1,
              ease:"sine.inOut",
              scrollTrigger:{
              trigger:element,
              start:"top 70%",
              end:"top top",
      }
    })
    })

  },[])

  return (
    <section className="relative min-h-[80vh] overflow-hidden px-6 py-20 lg:px-20 flex flex-col lg:flex-row items-center gap-12 bg-gray-50">
      
      {/* Left: Image / Illustration */}
      <div className="flex-1 flex justify-center">
        <img src={aboutImage} alt="About Us Illustration" className="aboutImage -translate-x-20 opacity-0 w-full max-w-md rounded-2xl shadow-xl" />
      </div>

      {/* Right: Text Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl about-element translate-x-20 opacity-0 syncopate-bold md:text-5xl font-bold text-gray-800">
          Why Choose <span className="text-blue-600">SkillConnect</span>
        </h2>
        <p className="text-gray-600 about-element translate-x-20 opacity-0 text-lg max-w-xl leading-relaxed">
          SkillConnect connects you with verified micro-service providers in your community. 
          Enjoy fast, reliable, and safe services right at your doorstep, with providers you can trust.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          
          <div className="flex gap-4 items-start">
            <div className="bg-teal-500 about-element translate-x-20 opacity-0 text-white p-3 rounded-full shadow-lg">
              {/* Example icon: ✅ */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 about-element translate-x-20 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold  about-element translate-x-20 opacity-0 text-lg text-gray-800">Verified Experts</h3>
              <p className="text-gray-600 text-sm about-element translate-x-20 opacity-0">All providers are screened and trusted for quality work.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-teal-500 about-element translate-x-20 opacity-0 text-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 about-element translate-x-20 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l2 9h12l2-9h1M5 6h14l1 4H4l1-4z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold about-element translate-x-20 opacity-0 text-lg text-gray-800">Fast Booking</h3>
              <p className="text-gray-600 about-element translate-x-20 opacity-0 text-sm">Quickly find and book the right provider near you.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-teal-500 about-element translate-x-20 opacity-0 text-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 about-element translate-x-20 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg about-element translate-x-20 opacity-0 text-gray-800">Reliable & On-Time</h3>
              <p className="text-gray-600 about-element translate-x-20 opacity-0 text-sm">Providers show up when expected, delivering consistent service quality.</p>
            </div>
          </div>

        </div>

        {/* Optional CTA */}
        <button className="mt-8 bg-teal-500 about-element translate-x-20 opacity-0 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg w-max transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
