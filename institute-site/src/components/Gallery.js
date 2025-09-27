import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";

function Gallery() {
  const images = [img1, img2, img3];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Gallery</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
