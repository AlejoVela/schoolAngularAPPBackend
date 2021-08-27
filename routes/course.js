const CourseController = require('../controllers/course');
const router = require('express').Router();

router.post('/createCourse', CourseController.createCourse);

module.exports = router;