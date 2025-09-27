import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getNotices } from "../services/noticeService.js";

function NoticePreview() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotices();
        setNotices(data);
      } catch (err) {
        console.error("Error fetching notices", err);
      }
    };
    fetchNotices();
  }, []);

  const latest = notices.slice(-3).reverse(); // Get last 3 notices

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Latest Notices
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 px-6">
        {latest.map((notice, i) => (
          <motion.div
            key={notice._id || i}
            className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition border-l-4 border-yellow-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold">{notice.title}</h4>
            <p>{notice.content}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/notice"
          className="text-blue-700 font-semibold hover:underline"
        >
          View All Notices
        </Link>
      </div>
    </section>
  );
}

export default NoticePreview;
  