const Student = require('../models/student');

const createStudent = async (req, res) => {
  if(!req.body.name || !req.body.studentId || !req.body.className || !req.body.birthday)
    return res.status(401).send('Process Failed: Incomplete Data');
  
  let existingStudent = await Student.findOne({ studentId: req.body.studentId });
  if(existingStudent) return res.status(401).send('Process Failed: Student already exist');

  let student = new Student({
    name: req.body.name,
    studentId: req.body.studentId,
    className: req.body.className,
    birthday: req.body.birthday,
  });

  let result = await student.save();
  if(!result) return res.status(401).send('Failed to create student');
  return res.status(201).send({ result });
}

module.exports = {createStudent};