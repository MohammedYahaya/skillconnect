import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faqImage from "../Images/FAQs.gif";

const faqs = [
  { question: "How do I become a service provider?", answer: "Sign up on SkillConnect, complete your profile, add your services, and start accepting bookings." },
  { question: "How do payments work?", answer: "Payments are processed securely through MoMo or card after job completion. You can track your earnings in real-time." },
  { question: "Can I set my own schedule?", answer: "Yes! You decide your working hours, service area, and pricing. You are fully in control." },
  { question: "What if a customer is unsatisfied?", answer: "You can communicate with the customer through SkillConnect. We also provide support to resolve disputes." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    faqRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-white" id="faqs">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold syncopate-bold text-gray-900">
          Frequently Asked <span className="text-teal-500">Questions</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Everything you need to know about becoming a provider and using SkillConnect.
        </p>
      </div>

      <div className="max-w-6xl mx-auto justify-center items-center flex flex-col lg:flex-row items-start gap-6">
        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            loading="lazy"
            className="w-full max-w-md "
          />
        </div>

        {/* FAQ Items */}
        <div className="flex-1 space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <span className="text-2xl text-teal-500">{openIndex === index ? "−" : "+"}</span>
              </button>

              <div
                className="answer px-6 overflow-hidden"
                style={{
                  height: openIndex === index ? "auto" : 0,
                  paddingTop: openIndex === index ? "1rem" : 0,
                  paddingBottom: openIndex === index ? "1rem" : 0,
                  transition: "all 0.4s ease",
                }}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
