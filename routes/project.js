const {
  createProject,
  getProjectById,
  getProjectByStudentId,
  getProjects,
} = require("../controllers/project-controller");

const router = require("express").Router();

router.post("/create-project", createProject);
router.get("/projects", getProjects);
router.get("/project/:id", getProjectById);
router.get("/project/:studentId", getProjectByStudentId);

module.exports = router;
