// src/components/Achievements.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/achievements/bg1.jpg";  
import bg2 from "../assets/achievements/bg2.jpg";  
import bg3 from "../assets/achievements/bg3.jpg";  

const achievements = [
  {
    title: "Top JEE Students",
    img:bg1,
  },
  {
    title: "JEE MAIN 2020 Toppers",
    img: bg2,
  },
  {
    title: "Math Olympiad Winners",
    img: bg3,
  }
];

function Achievements() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Our Achievements
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            onClick={() => setSelectedImg(ach)}
          >
            <div className="relative overflow-hidden">
              <img
                src={ach.img}
                alt={ach.title}
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg font-semibold px-2 text-center">
                  {ach.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg.img}
              alt={selectedImg.title}
              className="max-h-full max-w-full rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Achievements;
