const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: { 
    type: String, 
    enum: ["admin", "teacher", "student"], 
    default: "student" 
  },

  name: { type: String, required: true },
  email: { type: String, unique: true },

  course: { type: String },   // JEE, NEET
  batch: { type: String },    // 12th A

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);