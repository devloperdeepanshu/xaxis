// src/components/TopStudentInterviews.js
import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

const interviews = [
  {
    name: "Rohit Sharma",
    title: "JEE Advanced Topper 2025",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    img: "https://source.unsplash.com/400x300/?student,success",
  },
  {
    name: "Priya Verma",
    title: "Board & JEE Mains Achiever",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    img: "https://source.unsplash.com/400x300/?girl,student",
  },
  {
    name: "Aman Gupta",
    title: "Math Wizard & JEE Mentor",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    img: "https://source.unsplash.com/400x300/?boy,student",
  },
];

function TopStudentInterviews() {
  return (
    <section className="py-20 bg-blue-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
        Top Student Interviews
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {interviews.map((student, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={student.img}
                alt={student.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <a
                href={student.video}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <FaPlayCircle />
              </a>
            </div>

            {/* Card Info */}
            <div className="p-6">
              <h3 className="font-bold text-xl text-blue-900 mb-2">{student.name}</h3>
              <p className="text-gray-700">{student.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TopStudentInterviews;
