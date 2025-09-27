import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import NoticeBoard from "./pages/NoticeBoard";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/notice" element={<NoticeBoard />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />

        {/* Login Route */}
        {!role && (
          <Route path="/login" element={<Login onLogin={setRole} />} />
        )}

        {/* Dashboard Route */}
        {role && (
          <Route path="/dashboard" element={<Dashboard role={role} />} />
        )}

        {/* Redirect fallback: if not logged in, go to login */}
        <Route
          path="*"
          element={role ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
