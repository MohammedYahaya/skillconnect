import React, { useEffect } from "react";
import rightArrow from "../Images/redo-arrow.webp";
import search from "../Images/Search-amico.svg";
import book from "../Images/Calendar-amico.svg";
import Payment from "../Images/Payment Information-rafiki.svg";
import review from "../Images/Customer Survey-pana.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Workflow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const steps = gsap.utils.toArray(".work");

    gsap.fromTo(
      steps,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".work:first-child", // trigger when first step appears
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const stepsData = [
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
        How It <span className="text-teal-500">Works</span>
      </h2>

      <div className="relative flex flex-wrap items-center justify-center gap-16 w-full max-w-6xl">
        {stepsData.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center w-[14rem] opacity-0 translate-y-20 work relative"
          >
            <img
              src={step.img}
              alt="workflow step"
              loading="lazy"
              className="w-40 h-40 object-contain drop-shadow-md"
            />

            <p className="mt-4 text-lg max-w-[20ch] text-gray-700">{step.text}</p>

            {i < stepsData.length - 1 && (
              <img
                src={rightArrow}
                alt="arrow"
                loading="lazy"
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
