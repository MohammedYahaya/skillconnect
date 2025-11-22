import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import electricalImage from "../Images/electrical-technician-working-switchboard-with-fuses.webp"
import beauty from "../Images/flat-lay-arrangement-with-make-up-brushes.webp"
import decorations from "../Images/medium-shot-man-watering-plants-home.webp"
import plumbing from "../Images/plumbing-professional-doing-his-job.webp"
import tailor from "../Images/tailoring-processs.webp"
import phoneRepair from "../Images/technician-antistatic-gloves-using-screwdriver-disassemble-borken-mobile-phone-going-repair-motherboard-sitting-his-workplace-laboratory-with-needed-equipment.webp"
import barbering from "../Images/close-up-man-selfcare-products.webp"


export default function Categories({
  images = [
    {
      src: electricalImage,
      title: "Electricals",
      subtitle: "Safe installation, wiring, and electrical troubleshooting.",
    },
    {
      src:beauty,
      title: "Beauty",
      subtitle: "Professional makeup, grooming, and personal care services.",
    },
     {
      src:barbering,
      title: "Barbering",
      subtitle: "Clean fades, sharp cuts, and premium grooming.",
    },
    {
      src: decorations,
      title: "Decorations",
      subtitle: "Creative décor and setups for events, rooms, and spaces.",
    },
    {
      src: plumbing,
      title: "Plumbing",
      subtitle: "Reliable fixes for leaks, pipes, and home water systems.",
    },{
      src: tailor,
      title: "Tailoring",
      subtitle: "Custom clothing, perfect fits, and quick alterations.",
    },{
      src: phoneRepair,
      title: "Phone repairs",
      subtitle: "Fast phone and tablet repairs done by trusted technicians.",
    },
  ],
  autoPlay = true,
  autoPlayInterval = 6000,
}) {
  const [index, setIndex] = useState(0);
  const slideRef = useRef([]);
  const textRef = useRef([]);

  const length = images.length;

  useEffect(() => {
    // fade out all slides
    gsap.to(slideRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(slideRef.current[index], {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.fromTo(
      textRef.current[index],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, [index]);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [length, autoPlay, autoPlayInterval]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);

  return (
    <section className="w-full relative overflow-hidden " id="Categories">
      <h2 className="text-4xl mb-4 font-bold text-center syncopate-bold">Categories</h2>
      <div className="w-full h-[60vh] md:h-screen relative">
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => (slideRef.current[i] = el)}
            className="absolute inset-0 opacity-0"
          >
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="w-full h-full object-cover brightness-75 shadow-2xl shadow-black/40"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div ref={(el) => (textRef.current[i] = el)}>
                <h2 className="text-3xl md:text-6xl font-extrabold syncopate-bold text-white drop-shadow-lg">
                  {img.title}
                </h2>
                <p className="mt-4 text-white/80 text-lg">{img.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={prev}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={next}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
