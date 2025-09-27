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
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About X-Axis Maths Institute</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          X-Axis Maths Institute is a premier coaching center in Hisar, Haryana, dedicated to 
          nurturing the next generation of mathematicians and engineers. We specialize in 
          JEE, 11th & 12th, and 10th-grade mathematics, focusing on concept clarity, problem-solving, 
          and consistent results.
        </p>
        <motion.div
          className="bg-blue-100 p-8 rounded-xl shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To provide a world-class mathematics education that empowers students to excel 
            in competitive exams and board exams, building a strong foundation for future success.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
