const mongoose = require('mongoose');

const problemStatementSchema = new
mongoose.Schema({
    problemStatement: String,
    description: String,
    catagory: String,
}, {timestamp : true});

const ProblemStatement = mongoose.model('ProblemStatement', problemStatementSchema);

module.exports = ProblemStatement;