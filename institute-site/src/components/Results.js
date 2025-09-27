// src/components/Results.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const results = [
  {
    year: 2025,
    toppers: 5,
    jeeRankers: 3,
    description: "Outstanding performance in JEE Mains & Advanced.",
    topStudents: ["Aman Kumar", "Riya Sharma", "Rahul Singh", "Priya Verma", "Ankit Yadav"],
  },
  {
    year: 2024,
    toppers: 6,
    jeeRankers: 4,
    description: "Excellent results in Board exams and competitive tests.",
    topStudents: ["Neha Gupta", "Vikram Patel", "Simran Kaur", "Arjun Mehta", "Pooja Choudhary"],
  },
  {
    year: 2023,
    toppers: 4,
    jeeRankers: 2,
    description: "High number of students achieving top ranks.",
    topStudents: ["Ananya Jain", "Siddharth Roy", "Tanvi Sharma", "Rohit Kumar", "Isha Singh"],
  },
  {
    year: 2022,
    toppers: 5,
    jeeRankers: 3,
    description: "Strong foundation leads to consistent success.",
    topStudents: ["Raghav Verma", "Sanya Mehra", "Karan Gupta", "Anjali Yadav", "Aditya Sharma"],
  },
  {
    year: 2021,
    toppers: 3,
    jeeRankers: 1,
    description: "Students shine in both JEE & Board exams.",
    topStudents: ["Tanya Kapoor", "Harsh Singh", "Maya Jain", "Shivansh Kumar", "Ira Verma"],
  },
];

function Results() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Past 5 Years Results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {results.map((res, i) => (
            <YearCard key={i} result={res} />
          ))}
        </div>
      </div>
    </section>
  );
}

function YearCard({ result }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl transition-transform"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.h3 layout className="text-xl font-bold text-yellow-400 mb-2">{result.year}</motion.h3>
      <motion.p layout className="text-blue-900 font-semibold mb-1">Toppers: {result.toppers}</motion.p>
      <motion.p layout className="text-blue-900 font-semibold mb-2">JEE Rankers: {result.jeeRankers}</motion.p>
      <motion.p layout className="text-gray-700 text-sm">{result.description}</motion.p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="mt-4 bg-yellow-50 rounded-lg p-3 text-left"
          >
            <motion.h4
              className="font-semibold text-blue-900 mb-2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Top 5 Students:
            </motion.h4>
            <ul>
              {result.topStudents.map((student, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="list-disc list-inside text-gray-800"
                >
                  {student}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Results;
