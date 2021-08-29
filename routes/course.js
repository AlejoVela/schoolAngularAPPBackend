const CourseController = require("../controllers/course");
const router = require("express").Router();

router.post("/createCourse", CourseController.createCourse);
router.get("/listCourse", CourseController.listCourse);

module.exports = router;
