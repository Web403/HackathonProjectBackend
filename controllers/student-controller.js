const Student = require("../models/student");

exports.registerStudent = async (req, res) => {
  const db = mongoose.connection.useDb("Students");

  try {
    const {
      name,
      email,
      pwd,
      clg,
      year,
      branch,
      rollNo,
      linkedIn,
      gitHub,
      website,
    } = req.body;
    const student = new Student({
      name,
      email,
      pwd,
      clg,
      year,
      branch,
      rollNo,
      linkedIn,
      gitHub,
      website,
    });
    await Student.save();
    return res.status(200).json({ Success: true, Data: student });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getStudents = async (req, res) => {
  let students = await Student.find();
  if (!students) return res.status(404).json({ Message: "No Students Found" });
  return res.status(200).json({ Success: true, Data: students });
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ Message: "No Student Found" });
  return res.status(200).json({ Success: true, Data: student });
};

exports.getStudentByEmail = async (req, res) => {
  const student = await Student.find({ email: req.params.email });
  if (!student) return res.status(404).json({ Message: "No Student Found" });
  return res.status(200).json({ Success: true, Data: student });
};

exports.getStudentByRollNo = async (req, res) => {
  const student = await Student.find({ rollNo: req.params.rollNo });
  if (!student) return res.status(404).json({ Message: "No Student Found" });
  return res.status(200).json({ Success: true, Data: student });
};
