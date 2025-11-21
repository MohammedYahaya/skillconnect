import React, { useEffect } from "react";
import happyImage from "../Images/positive-emotions-portrait-happy-young-dark-skinned-man-with-afro-haircut-casual-stylish-outfit-spreading-hands-with-excitement-screaming-cheering-favorite-football-team (1).webp";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Happy = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    document.fonts.ready.then(() => {
      const header1 = new SplitText(".header1", { type: "lines", mask: "lines" });
      const header2 = new SplitText(".header2", { type: "lines", mask: "lines" });

      gsap.from(header1.lines, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".header1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(header2.lines, {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".header2",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="relative bg-teal-500 py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12 min-h-screen">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={happyImage}
          alt="happy customers"
          loading="lazy"
          className="w-10/12 md:w-9/12 lg:w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left gap-6">
        <h2 className="header1 text-4xl syncopate-bold sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Happy customers
        </h2>
        <h2 className="header2 syncopate-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Reliable. <span className="font-extrabold">Services</span>
        </h2>
        <p className="text-white text-lg md:text-xl mt-4">
          Our customers trust us for fast, reliable, and professional service. See why everyone is smiling!
        </p>

        {/* CTA button */}
        <button className="mt-6 bg-white text-teal-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Join Us
        </button>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full border-4 border-white opacity-20"></div>
      <div className="absolute bottom-10 -right-10 w-48 h-48 rounded-full border-4 border-white opacity-20"></div>
    </section>
  );
};

export default Happy;
