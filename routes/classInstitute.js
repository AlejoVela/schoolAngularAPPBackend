const ClassInstituteController = require('../controllers/classInstitute');
const router = require('express').Router();

router.post('/createClass', ClassInstituteController.createClass );
router.get('/listClass', ClassInstituteController.listClass);

module.exports = router;