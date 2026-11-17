const User = require("../models/User");

const addStudent = async (req, res) => {
  try {
    // basic admin check (your current system)
    if (req.body.role !== "admin") {
      return res.status(403).json({ message: "Only admin can add students" });
    }

    const { username, password, name, email, course, batch } = req.body;

    // validation
    if (!username || !password || !name) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // create student
    const student = new User({
      username,
      password, // (plain for now, will fix later)
      name,
      email,
      course,
      batch,
      role: "student" // FORCE student role
    });

    await student.save();

    res.status(201).json({
      message: "Student added successfully",
      student
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addStudent };