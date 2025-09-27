// src/pages/Home.js
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import NoticePreview from "../components/NoticePreview";
import CallToAction from "../components/CallToAction";
import Gallery from "../components/Gallery";
import Founder from "../components/Founder";
import Results from "../components/Results";

function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Founder />
      <Features />
      <Courses />
      <Results />
      <Achievements />
      <Testimonials />
      <NoticePreview />
      <Gallery />
      <CallToAction />
    </div>
  );
}

export default Home;
