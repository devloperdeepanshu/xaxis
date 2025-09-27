import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function TeacherManager() {
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ name: "", subject: "", experience: "" });
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // Fetch teachers
  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teachers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setList(res.data);
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Add teacher
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.name || !form.subject || !form.experience || !photoFile) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("subject", form.subject);
      formData.append("experience", form.experience);
      formData.append("photo", photoFile);

      await axios.post("http://localhost:5000/api/teachers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setForm({ name: "", subject: "", experience: "" });
      setPhotoFile(null);
      await fetchTeachers();
    } catch (err) {
      console.error("Error adding teacher:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete teacher
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchTeachers();
    } catch (err) {
      console.error("Error deleting teacher:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Teachers</h2>

      {/* Form */}
      <motion.form
        className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mb-6"
        onSubmit={handleAdd}
      >
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="flex-1 p-2 border rounded"
        />
        <input
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="Subject"
          className="flex-1 p-2 border rounded"
        />
        <input
          type="number"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          placeholder="Experience"
          className="p-2 border rounded w-full sm:w-28"
        />
        <input
          type="file"
          onChange={(e) => setPhotoFile(e.target.files[0])}
          className="p-2"
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded mt-2 sm:mt-0"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add"}
        </button>
      </motion.form>

      {/* Teacher cards */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {list.map((t, i) => (
          <motion.div
            key={t._id}
            className="p-4 bg-white rounded shadow flex flex-col sm:flex-row items-center sm:items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <img
              src={t.photo || `https://i.pravatar.cc/100?u=${t._id}`}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-600">{t.subject}</div>
              <div className="text-xs text-gray-500">{t.experience} yrs</div>
            </div>
            <button
              onClick={() => handleDelete(t._id)}
              className="text-red-600 mt-2 sm:mt-0"
              disabled={loading}
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TeacherManager;
