const ClassInstitute = require("../models/classInstitute");

const createClass = async (req, res) => {
  if (
    !req.body.className ||
    !req.body.classTeacher ||
    !req.body.quota ||
    !req.body.career ||
    !req.body.startClass ||
    !req.body.endClass
  )
    return res.status(400).send("Process Failed: There are empty fields");

  let  classInstitute = new ClassInstitute({
    className: req.body.className,
    classTeacher: req.body.classTeacher,
    quota: req.body.quota,
    career: req.body.career,
    startClass: req.body.startClass,
    endClass: req.body.endClass,
  });

  let result = await classInstitute.save();
  if(!result) return res.status(400).send('Error to register class');
  return res.status(200).send({ result });
};
const listClass = async (req, res) => { 
  let classInstitute = await ClassInstitute.find().populate('className').populate('classTeacher').exec();
  if(!classInstitute || classInstitute.length === 0) return res.status(400).send('Process Failed: No Course');
  return res.status(200).send({ classInstitute });
}

module.exports = { createClass, listClass };
