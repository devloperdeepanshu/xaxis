// src/components/Hero.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const slides = [
    {
      img: "https://picsum.photos/1600/700?1",
      title: "X-Axis Maths Institute",
      desc: "Transforming students into JEE & Board toppers.",
      btn: "Enroll Now",
      link: "/contact",
    },
    {
      img: "https://picsum.photos/id/237/1600/700",
      title: "Expert Guidance for JEE & Boards",
      desc: "Specialized courses for 10th, 11th, 12th & JEE Aspirants.",
      btn: "Join Classes",
      link: "/courses",
    },
    {
      img: "https://picsum.photos/seed/picsum/1600/700",
      title: "Strong Foundation in Mathematics",
      desc: "Building concepts with clarity and confidence.",
      btn: "Get Started",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[95%] md:w-[80%] rounded-xl overflow-hidden shadow-2xl relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerView={1}
          className="rounded-xl"
        >
          {slides.map((slide, i) => (
           <SwiperSlide key={i}>
  <motion.div
    className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]" // 🔹 height is bigger on small screens
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Background Image */}
    <img
      src={slide.img}
      alt={slide.title}
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
    />

    {/* Overlay */}
<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.3 } },
    }}
  >
    {/* Title */}
    <motion.h1
      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-3 drop-shadow-lg"
      variants={{
        hidden: { y: -30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      {slide.title}
    </motion.h1>

    {/* Description */}
    <motion.p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 max-w-xs sm:max-w-md md:max-w-xl"
      variants={{
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      {slide.desc}
    </motion.p>

    {/* Button */}
    <motion.button
      onClick={() => navigate(slide.link)}
      className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-300 transition text-sm sm:text-base md:text-lg"
      variants={{
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {slide.btn}
    </motion.button>
  </motion.div>
</div>

  </motion.div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
