// src/components/Founder.js
import React from "react";
import { motion } from "framer-motion";
import founderImg from "../assets/founder/gagandeep.png"; // Replace with your image

function Founder() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center">
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center max-w-5xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Founder Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-yellow-400 mb-6 md:mb-0 md:mr-8">
          <img
            src={founderImg}
            alt="Gagandeep Sir"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Founder Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
            Gagandeep Sir
          </h2>
          <p className="text-yellow-500 font-semibold mb-3">Math Expert & Founder</p>
          <p className="text-gray-700 mb-4">
            With years of experience in guiding students for JEE and Board exams, Gagandeep Sir has built X-Axis Institute to create a strong foundation in mathematics and help students achieve their dream results.
          </p>
          <button className="bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Founder;
