const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  subject: { type: String, required: true },
  experience: { type: Number, required: true },
  photo: { type: String },

}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);