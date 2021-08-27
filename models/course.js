const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: String,
  description: String,
  dbStatus: { type: Boolean, default: true },
});

const course = mongoose.model('course', courseSchema);
module.exports = course;
