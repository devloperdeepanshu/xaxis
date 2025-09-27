const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  experience: { type: Number, required: true },
  photo: { type: String }, // Cloudinary URL
});

module.exports = mongoose.model("Teacher", teacherSchema);
