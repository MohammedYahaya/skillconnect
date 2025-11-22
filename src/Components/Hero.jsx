import React,{useEffect} from "react";
import HeroImage from "../Images/Gemini_Generated_Image_r0hozkr0hozkr0ho-removebg-preview.png";
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'


const Hero = () => {

  useEffect(()=>{

    gsap.registerPlugin(SplitText)

    const tl = gsap.timeline({
      delay:0.4
    })

    document.fonts.ready.then(()=>{
      const HHsplit = new SplitText(".hero-heading",{
        type:"lines",
        autoSplit:true,
        mask:"lines"
      })

      gsap.set(".hero-heading", { opacity: 1, visibility: "visible" });

      tl.from(HHsplit.lines,{
      y:40,
      ease:"power2.in",
      opacity:1
    }).to(".hero-text",{
      opacity:1,
      y:0,
      ease:"sine.inOut"
    },"+=1").to(".hero-image",{
      opacity:1,
      y:0,
      ease:"sine.inOut"
    })
    })

  },[])

  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-6 -mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(240,240,240,0.9),_rgba(230,230,230,1))] -z-30"></div>

      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 flex justify-center gap-32 opacity-20">
          <div className="bg-gray-300 h-full w-[1px]"></div>
          <div className="bg-gray-300 h-full w-[1px]"></div>
          <div className="bg-gray-300 h-full w-[1px]"></div>
          <div className="bg-gray-300 h-full w-[1px]"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center gap-32 opacity-20">
          <div className="bg-gray-300 w-[90%] h-[1px] mx-auto shadow"></div>
          <div className="bg-gray-300 w-[90%] h-[1px] mx-auto shadow"></div>
          <div className="bg-gray-300 w-[90%] h-[1px] mx-auto shadow"></div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-10%] top-[20%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] 
        bg-blue-500 opacity-20 blur-[100px] rounded-full animate-pulse"></div>

        <div className="absolute right-[-10%] bottom-[10%] w-[28vw] h-[28vw] max-w-[480px] max-h-[480px] 
        bg-teal-400 opacity-30 blur-[100px] rounded-full animate-pulse-slow"></div>

        <div className="absolute left-[30%] top-[70%] w-[15vw] h-[15vw] max-w-[280px]
        bg-pink-400 opacity-10 blur-[80px] rounded-full animate-bounce-slow"></div>
      </div>

      <div className="absolute top-[20%] w-[40vw] h-[40vw] bg-white opacity-40 blur-3xl rounded-full -z-10"></div>

      <h2 className="hero-heading mt-[3em] hero-title syncopate-bold z-20 text-4xl md:text-7xl font-extrabold leading-tight">
        Find <span className="text-teal-500 drop-shadow-sm">Skilled</span> Experts
        <br />
        In Your Community
      </h2>

      <p className="hero-text opacity-0 translate-y-6 z-20 font-jakarta text-lg md:text-xl max-w-2xl tracking-wide text-gray-600 mt-6 mb-10">
        Connect instantly with trusted micro-service providers. fast, reliable, and right near you.
      </p>

      <a href="/providers" className="relative hero-text opacity-0 translate-y-6 z-40 bg-orange-400 hover:bg-orange-500 font-jakarta transition px-8 py-3 text-white text-lg rounded-full shadow-xl flex items-center gap-2 group">
        Explore Services
        <svg
          fill="currentColor"
          className="w-6 h-6 group-hover:translate-x-1 transition"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/>
        </svg>
      </a>

      <img
        src={HeroImage}
        alt="Hero"
        className="w-[26em] hero-image opacity-0 translate-y-6 md:w-[30em] -mt-20 z-20 drop-shadow-2xl animate-float"
      />
    </section>
  );
};

export default Hero;
