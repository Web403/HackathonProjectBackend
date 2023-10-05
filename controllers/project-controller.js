const Project = require("../models/projects");

exports.createProject = async (req, res) => {
  const {
    title,
    description,
    category,
    problemStatementId,
    studentId,
    mentorId,
    teamMembers,
    status,
    gitHubLink,
    projectLink,
    presentationLink,
    videoLink,
  } = req.body;

  try {
    const project = new Project({
      title,
      description,
      category,
      problemStatementId,
      studentId,
      mentorId,
      teamMembers,
      status,
      gitHubLink,
      projectLink,
      presentationLink,
      videoLink,
    });
    await project.save();
    return res.status(200).json({ Success: true, Data: project });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProjects = async (req, res) => {
  let projects = await Project.find();
  if (!projects) return res.status(404).json({ Message: "No Projects Found" });
  return res.status(200).json({ Success: true, Data: projects });
};

exports.getProjectById = async (req, res) => {
  let project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ Message: "No Project Found" });
  return res.status(200).json({ Success: true, Data: project });
};

exports.getProjectByStudentId = async (req, res) => {
  let projects = await Project.find({ studentId: req.params.studentId });
  if (!projects) return res.status(404).json({ Message: "No Project Found" });
  return res.status(200).json({ Success: true, Data: projects });
};
