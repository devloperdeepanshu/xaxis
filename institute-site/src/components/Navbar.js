// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-yellow-400 cursor-pointer">
          <Link to="/">X-Axis Institute</Link>
        </h1>

        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/teachers" className="hover:text-yellow-400 transition">Teachers</Link></li>
          <li><Link to="/notice" className="hover:text-yellow-400 transition">Notice Board</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact us</Link></li>

          {/* Dashboard Link (based on role) */}
          {user && user.role && (
            <li>
              <Link
                to="/dashboard"
                className="hover:text-yellow-400 transition"
              >
                {user.role === "admin" ? "Admin Dashboard" : "Teacher Dashboard"}
              </Link>
            </li>
          )}

          {/* Login/Logout */}
          <li>
            {!user ? (
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
            ) : (
              <button onClick={handleLogout} className="hover:text-yellow-400 transition">
                Logout
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 px-6 py-4 space-y-3 text-lg font-medium">
          <Link to="/" className="block hover:text-yellow-400 transition">Home</Link>
          <Link to="/teachers" className="block hover:text-yellow-400 transition">Teachers</Link>
          <Link to="/notice" className="block hover:text-yellow-400 transition">Notice Board</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact us</Link>    
          {user && user.role && (
            <Link to="/dashboard" className="block hover:text-yellow-400 transition">
              {user.role === "admin" ? "Admin Dashboard" : "Teacher Dashboard"}
            </Link>
          )}
          {!user ? (
            <Link to="/login" className="block hover:text-yellow-400 transition">Login</Link>
          ) : (
            <button onClick={handleLogout} className="block hover:text-yellow-400 transition">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
