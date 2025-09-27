const Teacher = require("../models/Teacher");
const cloudinary = require("../config/cloudinary");

// Add teacher
const addTeacher = async (req, res) => {
  try {
    const { name, subject, experience } = req.body;

    if (!req.file) return res.status(400).json({ message: "Photo required" });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "teachers",
    });

    const teacher = new Teacher({
      name,
      subject,
      experience,
      photo: result.secure_url, // Cloudinary URL
    });

    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// Delete teacher
const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addTeacher, getTeachers, deleteTeacher };
