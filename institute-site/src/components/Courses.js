import React from "react";
import { motion } from "framer-motion";

function Courses() {
  const courses = [
    { name: "JEE Main & Advanced", desc: "Focused preparation with advanced problem solving." },
    { name: "Class 12th Mathematics", desc: "CBSE board exam oriented curriculum." },
    { name: "Class 11th Mathematics", desc: "Strong foundation building for higher classes." },
    { name: "Class 10th Mathematics", desc: "Foundation for boards and competitive exams." },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Courses</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <h3 className="font-bold text-xl mb-2">{course.name}</h3>
            <p className="text-gray-600">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
