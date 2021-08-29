const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
  name: String,
  teacherId: String,
  birthday: { type: Date},
  direction: String,
});

const teacher = mongoose.model('teacher' ,teacherSchema);
module.exports = teacher;