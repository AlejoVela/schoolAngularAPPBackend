const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  studentId: String,
  className: {type: mongoose.Schema.ObjectId, ref: "class"},
  birthday: { type: Date },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
