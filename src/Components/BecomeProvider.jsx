import React, { useEffect } from "react";
import { FaUsers, FaShieldAlt, FaDollarSign, FaClock } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BecomeProvider = () => {
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const providers = gsap.utils.toArray(".become-provider");
  const pnumbers = gsap.utils.toArray(".provider-number");

  // Cards animation
  gsap.fromTo(
    providers,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".become-provider:first-child",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  // Numbers animation
  gsap.fromTo(
    pnumbers,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".provider-number:first-child",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);


  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 syncopate-bold">
          Become a Service <span className="text-teal-500">Provider</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Turn your skills into income and reach more customers with SkillConnect.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          {
            icon: <FaUsers />,
            title: "Expand Your Reach",
            desc: "Access a large and growing customer base without spending on ads.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Build Credibility",
            desc: "Grow through ratings, reviews, and professional visibility.",
          },
          {
            icon: <FaDollarSign />,
            title: "Secure Payments",
            desc: "Get paid easily with transparent income tracking.",
          },
          {
            icon: <FaClock />,
            title: "Work on Your Terms",
            desc: "Choose your hours, pricing, and service area freely.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 become-provider opacity-0 translate-y-20 bg-teal-500 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center text-center"
          >
            <div className="text-white text-5xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
            <p className="text-white">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl font-bold syncopate-bold text-gray-900 mb-6 text-center">
          How It Works
        </h3>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              number: 1,
              title: "Sign Up",
              desc: "Create your provider account in minutes.",
            },
            {
              number: 2,
              title: "Set Up Profile",
              desc: "Add services, pricing, and availability.",
            },
            {
              number: 3,
              title: "Receive Bookings",
              desc: "Customers discover your services.",
            },
            {
              number: 4,
              title: "Deliver & Earn",
              desc: "Complete jobs and receive secure payments.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center provider-number opacity-0 translate-x-20"
            >
              <div className="text-teal-500 font-bold text-4xl mb-2">
                {item.number}
              </div>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition">
          Start Earning Today
        </button>
      </div>
    </section>
  );
};

export default BecomeProvider;
