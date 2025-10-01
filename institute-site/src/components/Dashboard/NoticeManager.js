import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function NoticeManager() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");

  const fetch = async () => {
    try {
      const res = await axios.get("https://xaxis-backend.onrender.com/api/notices", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      await axios.post(
        "https://xaxis-backend.onrender.com/api/notices",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setContent("");
      fetch();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://xaxis-backend.onrender.com/api/notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetch();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Notices</h2>

      <motion.form
        className="flex flex-col md:flex-row gap-2 mb-6"
        onSubmit={handleAdd}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="flex-1 p-2 border rounded"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="flex-1 p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 md:mt-0">
          Add
        </button>
      </motion.form>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {notices.map((n, i) => (
          <motion.div
            key={n._id}
            className="p-4 bg-white rounded shadow flex flex-col justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div>
              <h4 className="font-semibold">{n.title}</h4>
              <p className="text-gray-600">{n.content}</p>
              <small className="text-gray-400">
                {new Date(n.createdAt || n.date || n._id).toLocaleString()}
              </small>
            </div>
            <button
              onClick={() => handleDelete(n._id)}
              className="text-red-600 mt-2 self-end"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NoticeManager;
