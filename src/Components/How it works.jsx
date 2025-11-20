import React,{useEffect} from "react";
import rightArrow from "../Images/redo-arrow.webp";
import leftArrow from "../Images/arrow-left.webp";

import search from "../Images/Search-amico.svg";
import book from "../Images/Calendar-amico.svg";
import Payment from "../Images/Payment Information-rafiki.svg";
import review from "../Images/Customer Survey-pana.svg";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Workflow = () => {

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    const works = gsap.utils.toArray(".work")


      gsap.matchMedia().add("(min-width:481px)",()=>{

      works.forEach((work,i)=>{
        gsap.to(".work",{
          opacity:1,
          y:0,
          delay: 1,
          ease:"sine.inOut",
          stagger:0.2,
          scrollTrigger:{
            trigger:".work",
            start:"top 80%",
            end:"center center",
        }
      })
    })
    })

    gsap.matchMedia().add("(max-width:680px)",()=>{

      works.forEach((work,i)=>{
        gsap.to(work,{
          opacity:1,
          y:0,
          duration: 3 + i,
          ease:"sine.inOut",
          scrollTrigger:{
            trigger:work,
            start:"top 80%",
            end:"top 70%",
            scrub:true
        }
      })
    })
    })

  },[])

  const steps = [
    {
      img: search,
      text: "Find nearby professionals instantly.",
    },
    {
      img: book,
      text: "Select a service, date, and time.",
    },
    {
      img: review,
      text: "Review details and confirm your booking.",
    },
    {
      img: Payment,
      text: "Make secure payments via MoMo or card.",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 flex flex-col items-center gap-16">
      <h2 className="text-4xl font-bold text-center syncopate-bold">
        How It <span className="text-blue-600">Works</span>
      </h2>

      <div className="relative flex flex-wrap items-center justify-center gap-16 w-full max-w-6xl">

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center w-[14rem] opacity-0 translate-y-20 work relative">
            <img
              src={step.img}
              alt="workflow step"
              className="w-40 h-40 object-contain drop-shadow-md"
            />

            <p className="mt-4 text-lg max-w-[20ch] text-gray-700">
              {step.text}
            </p>

            {i < steps.length - 1 && (
              <img
                src={rightArrow}
                alt="arrow"
                className="hidden lg:block w-10 absolute right-[-4.5rem] top-[50%] -translate-y-1/2"
              />
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default Workflow;
