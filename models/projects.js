const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    catagory: String,
    problemStatementId: String,
    studentId: String,
    mentorId: String,
    teamMembers: Array,
    status: String,
    gitHubLink: String,
    projectLink: String,
    presentationLink: String,
    videoLink: String,

}, {timestamp : true});

const Project = mongoose.model('Student_project_by_clg', projectSchema);

module.exports = Project;