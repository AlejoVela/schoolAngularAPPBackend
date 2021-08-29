const Course = require("../models/course");

const createCourse = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Process error: There are empty fieldes");

  let existingCourse = await Course.findOne({ name: req.body.name });
  if (existingCourse)
    return res.status(400).send("Process Error: Course Already exist");

  let course = new Course({
    name: req.body.name,
    description: req.body.description,
  });

  let result = await course.save();
  if (!result)
    return res.status(400).send("Process Error: Error to register User");
  return res.status(200).send({ result });
};

const listCourse = async (req, res) => { 
  let course = await Course.find();
  if(!course || course.length === 0) return res.status(400).send('Process Failed: No Course');
  return res.status(200).send({ course });
}

module.exports = { createCourse, listCourse };
