const StudentController = require('../controllers/student');
const router = require('express').Router();

router.post('/createStudent', StudentController.createStudent);

module.exports = router;