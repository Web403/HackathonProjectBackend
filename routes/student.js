const {
  registerStudent,
  getStudentByEmail,
  getStudentById,
  getStudentByRollNo,
  getStudents,
} = require("../controllers/student-controller");

const router = require("express").Router();

router.post("/register-student", registerStudent);
router.get("/students", getStudents);
router.get("/student/:id", getStudentById);
router.get("/student/:email", getStudentByEmail);
router.get("/student/:rollNo", getStudentByRollNo);

module.exports = router;
