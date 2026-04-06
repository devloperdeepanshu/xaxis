import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="font-sans bg-gray-50 py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          About Arjun Classes Institute
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-lg md:text-xl mb-10">
          Arjun Classes Institute is a leading coaching center in Hisar, Haryana,
          committed to shaping the future of students in Chemistry. We specialize
          in JEE, Class 11th & 12th, and 10th-grade Chemistry, focusing on deep
          concept clarity, problem-solving skills, and consistent academic results.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "500+", label: "Students Taught" },
            { number: "95%", label: "Success Rate" },
            { number: "26+ Years", label: "Experience" },
            { number: "Top Results", label: "JEE & Boards" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-blue-900">
                {item.number}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          className="bg-blue-100 p-8 rounded-xl shadow-lg mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            To deliver high-quality Chemistry education that empowers students to
            excel in competitive and board exams, while building a strong academic
            foundation for their future careers.
          </p>
        </motion.div>

        {/* Social Media Preview */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Stay Connected
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Instagram */}
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Instagram</h3>
              <p className="text-gray-600 mb-3">
                Daily tips, student highlights, and class updates.
              </p>
              <button className="text-blue-600 font-semibold">
                Follow Now →
              </button>
            </div>

            {/* YouTube */}
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">YouTube</h3>
              <p className="text-gray-600 mb-3">
                Free lectures, concept explanations, and revision sessions.
              </p>
              <button className="text-blue-600 font-semibold">
                Watch Videos →
              </button>
            </div>

            {/* Telegram / WhatsApp */}
            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-gray-600 mb-3">
                Join our group for notes, updates, and doubt-solving.
              </p>
              <button className="text-blue-600 font-semibold">
                Join Now →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;