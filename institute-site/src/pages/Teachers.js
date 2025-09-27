import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTeachers } from "../services/teacherService";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await getTeachers();
        setTeachers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-12">
          Our Expert Teachers
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher._id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="mb-4">
                <img
                  src={teacher.photo || `https://i.pravatar.cc/150?u=${teacher._id}`}
                  alt={teacher.name}
                  className="w-24 h-24 mx-auto rounded-full shadow-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject}</p>
              <p className="text-gray-500 text-sm mt-1">{teacher.experience} yrs experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
