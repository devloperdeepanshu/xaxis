// src/components/Footer.js
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-blue-800 text-white py-10" // lighter blue
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Branding */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-yellow-400 mb-2">X-Axis Institute</h1>
          <p className="text-gray-200 max-w-xs">
            Excellence in Mathematics for JEE & Board students. Building confidence and mastery in every student.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 mb-6 md:mb-0">
          <div>
            <h2 className="font-semibold text-yellow-400 mb-2">Quick Links</h2>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="/teachers" className="hover:text-yellow-300 transition">Teachers</a></li>
              <li><a href="/notice" className="hover:text-yellow-300 transition">Notice Board</a></li>
              <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-yellow-400 mb-2">Follow Us</h2>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-yellow-300 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} X-Axis Institute. All Rights Reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;
