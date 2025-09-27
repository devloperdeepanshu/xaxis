// src/components/Hero.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Hero() {
  const slides = [
    {
      img: "https://picsum.photos/1600/600?1",
      title: "X-Axis Maths Institute",
      desc: "Transforming students into JEE & Board toppers.",
      btn: "Enroll Now",
    },
    {
      img: "https://picsum.photos/1600/600?1",
      title: "Expert Guidance for JEE & Boards",
      desc: "Specialized courses for 10th, 11th, 12th & JEE Aspirants.",
      btn: "Join Classes",
    },
    {
      img: "https://picsum.photos/1600/600?2",
      title: "Strong Foundation in Mathematics",
      desc: "Building concepts with clarity and confidence.",
      btn: "Get Started",
    },
  ];

  const customArrow = (onClickHandler, label, isLeft) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        isLeft ? "left-3" : "right-3"
      } bg-yellow-400 text-blue-900 p-2 rounded-full shadow-lg hover:bg-yellow-300 transition`}
    >
      {isLeft ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
    </button>
  );

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[90%] md:w-[70%] rounded-xl overflow-hidden shadow-2xl relative">
        <Carousel
          autoPlay
          infiniteLoop
          interval={30000} // 30 seconds
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && customArrow(onClickHandler, label, true)
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && customArrow(onClickHandler, label, false)
          }
        >
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className="relative h-[25vh] md:h-[35vh] group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  className="text-xl md:text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-sm md:text-lg text-white mb-3 max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {slide.desc}
                </motion.p>
                <motion.button
                  className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-lg shadow-lg hover:scale-110 hover:bg-yellow-300 transition text-sm md:text-base"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {slide.btn}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
