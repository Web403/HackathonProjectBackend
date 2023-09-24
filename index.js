const express = require('express');
const mongodb = require('mongodb');
const connection = require('./connection');
const ProblemStatement = require('./models/problemstatement');
const Student = require('./models/student');
const Project = require('./models/projects')
const mongoose = require('mongoose');
const app = express();

connection.connectDb();
app.use(express.json());
app.listen(3000, () => console.log('listening at 3000'));



app.get('/', (req, res) => {
    res.send('Your App Is Successfully Running On Port 3000');
})


// Problem Statement Data Processing

app.post('/api/create/problem-statement', (req, res) => {
    const problemStatement = new ProblemStatement({
        problemStatement: req.body.ProblemStatement,
        description: req.body.Description,
        catagory: req.body.catagory,
    });
    problemStatement.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/api/get/problem-statements', (req, res) => {
    ProblemStatement.find().then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/api/get/problem-statement/id/:id', (req, res) => {
    ProblemStatement.findById(req.params.id).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/problem-statement/catagory/:catagory', (req, res) => {
    ProblemStatement.findById(req.params.catagory).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

// Student Data Processing

app.post('/api/register/student', (req, res) => {
    const db = mongoose.connection.useDb('Students');
    console.log(req.body);
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.pwd,
        clg: req.body.clg,
        year: req.body.year,
        branch: req.body.branch,
        rollNo: req.body.rollNo,
        linkedIn: req.body.linkedIn,
        gitHub: req.body.github,
        website: req.body.website,
    });
    student.save().then((result) => {
        res.status(200).send({"Success" : "True"});
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/api/get/student', (req, res) => {
    Student.find().then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
}
);

app.get('/api/get/student/id/:id', (req, res) => {
    Student.findById(req.params.id).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/student/email/:email', (req, res) => {
    Student.find({email: req.params.email}).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/student/rollNo/:rollNo', (req, res) => {
    Student.find({rollNo: req.params.rollNo}).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});


// Project Data Processing

app.post('/api/create/project', (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        catagory: req.body.catagory,
        problemStatementId: req.body.problemStatementId,
        studentId: req.body.studentId,
        mentorId: req.body.mentorId,
        teamMembers: req.body.teamMembers,
        status: req.body.status,
        gitHubLink: req.body.gitHubLink,
        projectLink: req.body.projectLink,
        presentationLink: req.body.presentationLink,
        videoLink: req.body.videoLink,
    });
    project.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/project', (req, res) => {
    Project.find().then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/project/id/:id', (req, res) => {
    Project.findById(req.params.id).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/api/get/project/studentId/:studentId', (req, res) => {
    Project.find({studentId: req.params.studentId}).then((result) => {
        res.send({"Success" : "True", "Data" : result});
    }).catch((err) => {
        console.log(err);
    })
});