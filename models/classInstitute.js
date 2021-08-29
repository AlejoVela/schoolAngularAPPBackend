const mongoose = require("mongoose");

const classInstituteSchema = mongoose.Schema({
  className: { type: mongoose.Schema.ObjectId, ref: "course" },
  classTeacher: { type: mongoose.Schema.ObjectId, ref: "teacher" },
  quota: Number,
  career: String,
  startClass: { type: Date },
  endClass: { type: Date },
  dbStatus: { type: Boolean, default: true },
});

const classInstitute = mongoose.model("classInstitute", classInstituteSchema);
module.exports = classInstitute;
