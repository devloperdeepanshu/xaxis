const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true
  },

  answers: [
    {
      questionId: String,
      selectedAnswer: String,
      isCorrect: Boolean,
      topic: String
    }
  ],

  score: Number,
  totalMarks: Number,

}, { timestamps: true });

module.exports = mongoose.model("TestAttempt", attemptSchema);