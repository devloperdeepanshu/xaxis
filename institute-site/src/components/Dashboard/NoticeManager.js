import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

function NoticeManager() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // holds notice id
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
    } finally {
      setConfirmDelete(null); // close modal
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Notices</h2>

      {/* Add Notice Form */}
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

      {/* Notices List */}
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
              onClick={() => setConfirmDelete(n._id)}
              className="text-red-600 mt-2 self-end hover:underline"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-lg font-bold mb-2">Confirm Delete</h3>
              <p className="text-gray-600 mb-4">
                Are you sure you want to delete this notice?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(confirmDelete)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NoticeManager;
