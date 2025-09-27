import React, { useState } from "react";
import { motion } from "framer-motion";
import NoticeManager from "./NoticeManager.js";
import TeacherManager from "./TeacherManager.js";

function Dashboard({ role }) {
  const [active, setActive] = useState("notices"); // 'notices' | 'teachers'

  const tabs = role === "admin" ? ["notices", "teachers"] : ["notices"];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-blue-900 text-white p-6 flex md:flex-col justify-between md:justify-start">
        <div>
          <h3 className="text-xl font-bold mb-6">Dashboard</h3>
          <nav className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3">
            <button
              onClick={() => setActive("notices")}
              className={`py-2 px-3 rounded ${
                active === "notices" ? "bg-blue-700" : "hover:bg-blue-800"
              }`}
            >
              Manage Notices
            </button>
            {role === "admin" && (
              <button
                onClick={() => setActive("teachers")}
                className={`py-2 px-3 rounded ${
                  active === "teachers" ? "bg-blue-700" : "hover:bg-blue-800"
                }`}
              >
                Manage Teachers
              </button>
            )}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <motion.main
        className="flex-1 p-4 md:p-8"
        initial={{ opacity: 0.8, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {active === "notices" && <NoticeManager />}
        {active === "teachers" && role === "admin" && <TeacherManager />}
      </motion.main>
    </div>
  );
}

export default Dashboard;
