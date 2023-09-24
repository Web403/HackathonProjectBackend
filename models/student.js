const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    college: String,
    year: String,
    branch: String,
    rollNo: String,
    contactNo: String,
    linkedIn: String,
    gitHub: String,
    website: String,
}, {timestamp : true});

const Student = mongoose.model('Student_Reg_Info', studentSchema,);

module.exports = Student;