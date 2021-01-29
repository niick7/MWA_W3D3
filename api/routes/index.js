const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students-controller");
const qrCodesController = require("../controllers/qr-codes-controller");
const timesheetsController = require("../controllers/timesheets-controller");

router.route("/students").get(studentsController.getStudents)
                         .post(studentsController.createStudent);
router.route("/students/:studentId").get(studentsController.getStudent)
                                    .put(studentsController.updateStudent)
                                    .delete(studentsController.deleteStudent);


router.route("/qr_codes/generate").post(qrCodesController.generate);
router.route("/qr_codes/validate").post(qrCodesController.validate);

router.route("/timesheets").get(timesheetsController.getTimesheets);

module.exports = router;