// src/components/Features.js
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaLaptop } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaGraduationCap />, title: "Top Results", desc: "Our students consistently top exams with exceptional results." },
    { icon: <FaChalkboardTeacher />, title: "Expert Teachers", desc: "Highly qualified teachers with years of experience in JEE and board exams." },
    { icon: <FaLaptop />, title: "Online & Offline", desc: "Flexible learning modes including classroom and online sessions." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.7 }}
          >
            <div className="text-4xl text-blue-600 mb-4">{f.icon}</div>
            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
