const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },

  totalMarks: { type: Number, required: true },
  duration: { type: Number, required: true }, // in minutes

  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      topic: String // used for weak area detection
    }
  ],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

module.exports = mongoose.model("Test", testSchema);