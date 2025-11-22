import React, { useEffect } from "react";
import phone from "../Images/close-up-man-working-computer-chips.webp";
import barber from "../Images/young-african-american-man-visiting-barbershop.webp";
import electricals from "../Images/worker-refilling-hvac-system-refrigerant.webp";
import tailor from "../Images/two-african-dressmaker-woman-sews-clothes-sewing-machine-looking-designer-album-tailor-office-black-seamstress-girls.webp";
import star from "../Images/R.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Provider = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const providers = gsap.utils.toArray(".provider");

    gsap.fromTo(
      providers,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".provider:first-child",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.matchMedia().add("(max-width:480px)", () => {
      gsap.fromTo(
        providers,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".provider:first-child",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const ProviderArr = [
    {
      img: phone,
      title: "FixIt Mobile Care",
      subtitle: "Trusted technicians restoring your devices with precision and speed.",
    },
    {
      img: electricals,
      title: "VoltPro Electricians",
      subtitle: "Safe, fast, and reliable electrical solutions for homes & businesses.",
    },
    {
      img: barber,
      title: "SharpLine Barbers",
      subtitle: "Crisp fades, clean cuts, and premium grooming experience.",
    },
    {
      img: tailor,
      title: "PerfectStitch Tailors",
      subtitle: "Custom fits, clean finishes, and premium-quality craftsmanship.",
    },
  ];

  return (
    <section className="relative min-h-[120vh] bg-white gap-12 flex flex-col justify-center items-center w-full px-6 py-16 lg:px-20">
      <h2 className="text-4xl font-bold text-center syncopate-bold">
        Top <span className="text-teal-500">providers</span>
      </h2>
      <div className="grid gap-20 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {ProviderArr.map((provider, index) => (
          <div
            key={index}
            className="w-full provider opacity-0 translate-y-20 max-w-[20em] h-[20em] relative rounded-2xl overflow-hidden group shadow-xl"
          >
            <img
              src={provider.img}
              alt="Service Provider"
              loading="lazy"
              className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-600 to-transparent"></div>

            <a
              href="#"
              className="absolute flex justify-center items-center bg-teal-600 hover:bg-teal-700 duration-300 top-4 right-4 w-10 h-10 rounded-full shadow-lg"
            >
              <svg
                fill="white"
                className="w-6 h-6"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                </g>
              </svg>
            </a>

            <img
              src={star}
              alt="rating"
              className="absolute bottom-[6em] left-5 w-16 h-4 duration-300 group-hover:-translate-y-1"
            />

            <div className="absolute bottom-0 p-5 text-white">
              <h1 className="text-xl font-bold leading-7 mb-2 duration-300 group-hover:-translate-y-1">
                {provider.title}
              </h1>
              <p className="text-sm leading-5 opacity-90">{provider.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/providers" className="mt-14 bg-orange-400 group about-element translate-x-20 flex justify-center gap-1 items-center opacity-0 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
          see more <svg 
            fill="currentColor"
      className="w-6 h-6 group-hover:translate-x-1 transition"
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2" id="Layer_2">
        <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/>
      </g>
    </svg>
        </a>
    </section>
  );
};

export default Provider;
