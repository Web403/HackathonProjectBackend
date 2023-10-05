const {
  createProblemStatement,
  getProblemStatements,
  getProblemStatementsByCategory,
  getProblemStatementById,
} = require("../controllers/problem-statement-controller");

const router = require("express").Router();

router.post("/create-problem-statement", createProblemStatement);
router.get("/problem-statements", getProblemStatements);
router.get("/problem-statement/:id", getProblemStatementById);
router.get("/problem-statements/:category", getProblemStatementsByCategory);

module.exports = router;
