import React from "react";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ready to Join X-Axis Maths Institute?
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Secure your seat for JEE & Board Exam success today!
      </motion.p>
      <motion.button
        className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded shadow-lg hover:bg-yellow-300 transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Enroll Now
      </motion.button>
    </section>
  );
}

export default CallToAction;
