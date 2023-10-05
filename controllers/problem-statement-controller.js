const ProblemStatement = require("../models/problemstatement");

exports.createProblemStatement = async (req, res) => {
  const { problemStatement, description, category } = req.body;
  try {
    const newProblemStatement = new ProblemStatement({
      problemStatement,
      description,
      category,
    });
    await newProblemStatement.save();
    return res.status(200).json({ Success: true, Data: newProblemStatement });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProblemStatements = async (req, res) => {
  let ps = await ProblemStatement.find();
  if (!ps)
    return res.status(404).json({ Message: "No Problem Statements Found" });
  return res.status(200).json({ Success: true, Data: ps });
};

exports.getProblemStatementsByCategory = async (req, res) => {
  let ps = await ProblemStatement.findById(req.params.category);
  if (!ps)
    return res.status(404).json({ Message: "No Problem Statements Found" });
  return res.status(200).json({ Success: true, Data: ps });
};

exports.getProblemStatementById = async (req, res) => {
  let ps = await ProblemStatement.findById(req.params.id);
  if (!ps)
    return res.status(404).json({ Message: "No Problem Statement Found" });
  return res.status(200).json({ Success: true, Data: ps });
};
