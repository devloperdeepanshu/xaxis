import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService.js";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const data = await login(username, password);
      // store session
      localStorage.setItem("token", data.token || "");
      localStorage.setItem("role", data.role || "teacher");
      localStorage.setItem("user", JSON.stringify({ username: data.username, role: data.role }));
      onLogin(data.role || "teacher");
      navigate("/dashboard");
    } catch (error) {
      setErr(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <motion.div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <motion.form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign in</h2>

        {err && <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">{err}</div>}

        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"
          className="w-full px-4 py-2 mb-3 border rounded focus:outline-none" />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none" />

        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-700 text-white py-2 rounded">
          Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Login;
