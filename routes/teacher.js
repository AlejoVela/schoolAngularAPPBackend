const TeacherController = require('../controllers/teacher');
const router = require('express').Router();

router.post('/createTeacher', TeacherController.createTeacher);
router.get('/listTeacher', TeacherController.listTeacher);

module.exports = router;