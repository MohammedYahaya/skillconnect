import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-6 lg:px-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">SkillConnect</h3>
          <p className="text-gray-400">
            Connect with skilled professionals easily. Turn your skills into income and reach more customers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-teal-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-teal-500 transition">Services</a></li>
            <li><a href="#providers" className="hover:text-teal-500 transition">Providers</a></li>
            <li><a href="#faq" className="hover:text-teal-500 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-teal-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get updates about new providers and services.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r-lg hover:bg-orange-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SkillConnect. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-teal-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-teal-500"><FaTwitter /></a>
          <a href="#" className="hover:text-teal-500"><FaInstagram /></a>
          <a href="#" className="hover:text-teal-500"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
