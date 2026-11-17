const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  subject: String,

  averageScore: Number,

  weakTopics: [String],

}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);