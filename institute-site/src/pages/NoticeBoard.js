import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaTrash, FaPlus } from "react-icons/fa";
import { getNotices, addNotice, deleteNotice } from "../services/noticeService.js";

function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const role = localStorage.getItem("role");

  // Fetch notices
  const fetch = async () => {
    try {
      const data = await getNotices();
      setNotices(data);
    } catch (err) {
      console.error("Error fetching notices", err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  // Add new notice (admin only)
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      await addNotice({ title, content });
      setTitle("");
      setContent("");
      fetch();
    } catch (err) {
      console.error("Error adding notice", err);
    }
  };

  // Delete notice (admin only)
  const handleDelete = async (id) => {
    try {
      await deleteNotice(id);
      setNotices(notices.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Error deleting notice", err);
    }
  };

  return (
    <section className="bg-gray-100 py-10 px-6">
      <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">
        <FaBullhorn className="inline mr-2" /> Notice Board
      </h3>

      {/* Admin form */}
      {role === "admin" && (
        <form onSubmit={handleAdd} className="max-w-3xl mx-auto flex gap-2 mb-6 flex-wrap">
          <input
            type="text"
            placeholder="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Notice Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaPlus /> Add
          </motion.button>
        </form>
      )}

      {/* Notices list */}
      <div className="max-w-3xl mx-auto space-y-4">
        {notices.map((notice, index) => (
          <motion.div
            key={notice._id || index}
            className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-400 flex justify-between items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div>
              <h4 className="font-semibold">{notice.title}</h4>
              <p>{notice.content}</p>
            </div>
            {role === "admin" && (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(notice._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default NoticeBoard;
