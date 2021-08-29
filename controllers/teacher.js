const Teacher = require('../models/teacher');

const createTeacher = async (req, res) => {
  if(!req.body.name || !req.body.teacherId || !req.body.birthday || !req.body.direction)
    return res.status(400).send('Process Failed: Incomplete Data');
  
  let existingTeacher = await Teacher.findOne({ teacherId: req.body.teacherId });
  if(existingTeacher) return res.status(400).send('Process Failed: Teacher already exist');

  let teacher = new Teacher({
    name: req.body.name,
    teacherId: req.body.teacherId,
    birthday: req.body.birthday,
    direction: req.body.direction,
  });

  let result = await teacher.save();
  if(!result) return res.status(400).send('Process Failed: failed to create teacher');
  return res.status(201).send({ result });
}

const listTeacher = async (req, res) => { 
  let teacher = await Teacher.find();
  if(!teacher || teacher.length === 0) return res.status(400).send('Process Failed: No teachers');
  return res.status(200).send({ teacher });
}

module.exports = { createTeacher, listTeacher };
